## 什麼是 Ajax？
Ajax 全名是 Asynchronous JavaScript and XML，意思是使用 JavaScript 向伺服器發送非同步請求，然後交換資料的格式早期是用 XML，所以名稱裡才會有 XML，但其實現在比較常用 JSON 格式。
至於非同步請求，指的是客戶端發送 request 之後，可以繼續執行其他程式碼，等收到 response 後再處理傳回來的資料，這樣可以大幅提升效率，也可以避免當遠端伺服器有問題的時候，你整支程式都無法做後續動作的問題。

## 用 Ajax 與我們用表單送出資料的差別在哪？
表單：用表單送出資料會強制換頁
Ajax：可以不換頁，在動態變更部分資料的時候能有比較好的使用者體驗

## JSONP 是什麼？
全名 JSON with Padding，是 CORS 之外另一個解決瀏覽器非同源政策的方法。JSONP 利用 html <script> 標籤不受非同源政策限制的特性，在 src 屬性裡面放入跨網域網址，server 端收到 request 之後會回傳一個 JavaScript 檔案，在這個檔案裏面呼叫已經在 client 端宣告好的函式並夾帶資料，就可以完成跨網域交換資料的任務。

## 要如何存取跨網域的 API？
Server 端必須在 response 裡面加上 "access-control-allow-origin" 這個 header，並且授予 client 端權限，client 端的瀏覽器才不會擋掉 response。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四週我們是用 node.js 透過自己的電腦發送 request 和接收 response，中間並沒有透過瀏覽器，而非同源政策是屬於瀏覽器的安全性政策，所以只有在透過瀏覽器跟 server 交換資料的時候才會有跨網域問題。 
