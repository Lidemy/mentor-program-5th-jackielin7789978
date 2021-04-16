# hw5

## 請解釋後端與前端的差異。
以網頁而言，前端負責的是使用者能看到並與之互動的部分，後端負責的則是使用者看不到，默默在背後運行的部分。舉例來說，我今天打開 Lidemy 锂學院的課程網頁，眼睛所看到的畫面、課程排列方式、與 UI 的互動 (例如把游標移到課程上的時候邊框顏色會改變等等) 都屬於前端工程師負責的範疇。如果我要登入會員開始上課，我就要在登入頁面輸入我的電子郵件地址和密碼，按下 [Log In] 按鈕，這時從網頁前端收集來的資料 (帳號密碼) 就會傳到資料庫，由某種程式或指令去檢查我是不是已經註冊的會員 (資料庫裡有沒有我的資料)，核對到資料才會讓我登入。而從按下 [Log In] 按鈕後的整個過程就是後端工程師負責的範疇。

進一步說明，前端負責瀏覽器上的畫面和互動，常使用人稱前端三本柱的 HTML、CSS 和 JavaScript，近年也流行使用各種框架和函式庫來進行開發；後端負責按照前端的要求到資料庫去存取/核對資料，再將結果傳回給前端，可以拿來寫後端的程式語言很多，常見的有 php、python、C#、Java、Ruby 等等，還要熟悉如何使用 MySQL 之類的資料庫。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 瀏覽器向 Google 的伺服器送出 request
    * 如果要講得更細，中間還會多這一層：瀏覽器 → 作業系統 → 網路卡 (最後由它送出 request)
2. 伺服器到 Google 的資料庫裡尋找有關 JavaScript 的內容
3. 伺服器找到相關內容，並回傳資料到客戶端 (瀏覽器收到 response)
    * 由網路卡 → 作業系統 → 瀏覽器依序解析
4. 瀏覽器根據收到的 html 檔將內容渲染到螢幕上，讓使用者看到


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. `hostname`：用來查看主機名稱的簡單指令
2. `nslookup`：可用 domain name 來查詢 IP 位址，也可以反過來查的指令。搭配 `-type` 參數可以指定要查詢什麼東西。
    * 如果要查詢 www.google.com 的 IP 位址，可以輸入 `nslookup www.google.com` 或是 `nslookup -type=a www.google.com`
    * 如果想查詢 IP 位址 8.8.8.8 的 domain name，可以輸入 `nslookup 8.8.8.8` 或 `nslookup -type=ptr 8.8.8.8`
    * 可用的 type 參數如下：
        * any
        * a: A Record (IP Address)
        * mx: 郵件伺服器
        * ns: 名稱伺服器
        * cname: 查別名
        * ptr: 由 IP Address 反查網域名稱
        * hinfo: 查伺服器的系統資訊
        * txt: Text如SPF資訊
3. `git stash`：第三個是 git 的指令。如果臨時必須停下手邊的工作去完成別的任務，可以把正在修改的檔案加到暫存區，再用 Git 的 stash 功能把手邊未完成的工作暫時存起來，不用先 commit 再回來修改。
    * `git stash`：建立 stash
    * `git stash save` + "文字"：建立有附上訊息的 stash
    * `git stash list`：查看現在有哪些 stash
    * `git stash pop`：把暫時放在 stash 裡的檔案叫出來繼續編輯，會從編號最小的 stash 開始拿，如要指定可加上 `stash@{0}` ID。注意：執行 `pop` 會一併刪除 stash
    * `git stash apply`：跟 pop 的功能一樣，但是不會刪除 stash
    * `git stash drop`：放棄這個 stash，用法和 pop 一樣
    * `git stash clear`：刪除所有的 stash