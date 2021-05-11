## 請以自己的話解釋 API 是什麼
API 是一種協助應用程式彼此溝通 (傳遞、修改資料) 的程式。舉例來說，我們都很習慣透過 agoda、airbnb 這類訂房網站訂房，因為可以在一個地方看到各家飯店、民宿業者的資訊，還可以直接訂房或和業者溝通，非常方便。其實這些飯店和民宿可能都有自己的網站和資料庫，我們也可以直接去他們的網站訂房，但因為業者把訂房功能開放給訂房網站使用，一般大眾才能在訂房網站上直接下訂。如果再講清楚一點，飯店業者就是透過 API 把訂房功能提供給訂房網站，只要在 API 中明訂拿取、修改資料的方法和位置 (網址和路徑) 即可。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
**304 Not Modified**：要拿取的資料未改變，可從快取拿。
這和 http 的 caching 功能有關，可以透過 `Last-Modified` 和 `If-Modified-Since` 這兩個 header 來實作。假設我半年前在 google 搜尋了一張貓貓圖，瀏覽器可以幫我快取起來 (效期半年)，並在 response 裡面加上 `Last-Modified` header，註記這張圖片上次變更的時間點，半年後我再次搜尋這張貓貓圖，瀏覽器就會在 request 裡面加上 `If-Modified-Since` header，幫我檢查這張圖片自 `Last-Modified` 的日期後有沒有更新。如果沒有，server 就會回傳 `304 Not Modified` 的 status code，讓瀏覽器沿用快取的檔案。

**405 Method Not Allowed**：Request 使用的 method 無法用於特定資源。
附帶這個 status code 的 response 會包含 `allow` header，列出可用於該資源的 methods。

**409 Conflict**：請求與伺服器目前狀態衝突。
使用 PUT method 的時候比較容易產生衝突，例如上傳的檔案遇到版本衝突時，server 就會回傳 `409 Conflict`。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

**Base URL**: https://www.myrestaurants.com/api
| description      | method | path | parameter | example |
| ---------------- | ------ | ---- | --------- | ------- |
| 取得所有餐廳資料    |GET    |/restaurants|_limit : 限制回傳資料數量|/restaurants?_limit=5|
| 取得單一餐廳資料    |GET    |/restaurants/:id|無           |/restaurants/7|
| 刪除餐廳          |DELETE  |/restaurants/:id|無          |/restaurants/7 |
| 新增餐廳          |POST    |/restaurants|name: 餐廳名| 無        |
| 更改餐廳          |PATCH   |/restaurants/:id|name: 餐廳名| /restaurants/7  |
