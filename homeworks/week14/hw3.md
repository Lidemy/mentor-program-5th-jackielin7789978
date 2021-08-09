## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
DNS 就像是網路世界的電話簿，過去我們可以透過電話簿查到某某人的住址，現在我們可以透過 DNS 找到某一台電腦/機器的網址，而 DNS 做的事就是把使用者輸入的網址 (也就是網域名，domain name) 轉換成電腦讀得懂的 IP 位址，這樣電腦跟電腦之間就可以互相訪問溝通。

## 什麼是資料庫的 lock？為什麼我們需要 lock？
在資料庫加上 lock，就可以鎖住特定資料，不讓其他 sql 指令改變那些資料。
幫資料加上 lock 主要是為了解決 transaction 可能會碰到的 race condition 問題。
以演唱會門票的搶購頁面來舉例，可能會發生多個人同時送出 request 來買最後一張門票的情形發生，這時如果我們的程式碼沒有加上 lock，就會發生超賣的問題，因為大家同時發出 request，程式就同時下 sql 指令去 db 修改資料。

解決方法如下：
```php
$conn->autocommit(FALSE);
$conn->begin_transaction();
<!-- for update 會幫 id = 1 的這個 row 加上 LOCK -->
<!-- 加上 LOCK 之後，先執行到這行的人才能繼續往下執行，其他人要等-->
<!-- 注意：不要鎖住整個 table -->
$stmt = $conn->prepare("SELECT amount from products WHERE id=1 for update");
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo "amount：" . $row["amount"];
    
    if ($row["amount"] > 0) {
        $stmt = $conn->prepare("UPDATE products SET amount = amount - 1 WHERE id = 1");
        if ($stmt->execute()) {
            echo "購買成功";
        }
    }
}
<!-- commit 之後就會解鎖 -->
$conn->commit();
$conn->close();
```

加上 lock 之後，就算 10 個人幾乎同時送出 request，也只有第一個送到的 request 可以進到 db 修改資料，其他人會等第一個人執行完，才會發現門票已經賣完了，最後購買失敗。不過也因為其他人要等，所以使用 lock 可能會產生效能問題。

## NoSQL 跟 SQL 的差別在哪裡？
SQL 的全名是 structured query language，結構化查詢語言，是我們管理關聯式資料庫的時候會用到的語言。關聯式資料庫是用 table 把資料儲存在表格裡面的一種資料庫，可以透過表格裡面的共通欄位把不同的 table 關聯在一起 (JOIN)。其中最有名的一套軟體是 MySQL。

NoSQL 的全名是 Not only SQL，統一用來稱呼所有不屬於關聯式資料庫的資料庫管理系統。其中有些系統支援使用關聯式資料庫，有些單純只支援 NoSQL。NoSQL 資料庫管理系統中最廣為人知的是 MongoDB。

NoSQL 不像關聯式資料一樣把資料儲存成 table，而是把資料用 key-value pair 的形式儲存，可以想成是用 JSON 格式來儲存資料。這種方式在儲存大量資料、或資料結構不明確的時候很好用。


## 資料庫的 ACID 是什麼？
ACID 是進行 Transaction 的時候要注意的四大要素：
1. Atomicity 原子性：所有操作必須全部成功，或全部失敗，不能只有部分成功。
2. Consistency 一致性：維持資料的一致性。以轉帳舉例，轉帳前後的錢總數必須要相同。
3. Isolation 隔離性：多筆交易間互不影響。也就是一次只能修改一個值。
4. Durability 持久性：交易成功後，寫入的資料不會不見。
