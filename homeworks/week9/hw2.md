## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
Varchar 和 text 都是用來儲存字串的資料格式，最多都可以儲存到 65,535 個字元，但是 varchar 可以指定最長幾個字元，而 text 無法指定。


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
Cookie 是一種瀏覽器專用的小型文字檔案，可以用來儲存一些暫時性的資料，常見用途有登入機制的驗證、廣告驗證等等。
Server 在回傳 response 的時候，只要帶上 `Set-Cookie` 這個 header，就可以叫 client 端的瀏覽器把指定資料存成 cookie。下次 client 發送 request 的時候，server 就可以在 `cookie` 這個 header 裡面拿到資料。


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
會員的密碼都是用明碼儲存在資料庫上，應該要經過加密處理才不會有資安疑慮。

