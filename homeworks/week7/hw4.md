## 什麼是 DOM？
DOM 全名是 Document Object Model，中文翻「文件物件模型」，是一種提供給 XML、HTML 和 SVG 文件的程式介面。以 HTML 為例，DOM 會以樹狀結構來表示 HTML (DOM Tree)，把 HTML 元素變成一個個節點 (node)，再讓程式透過 DOM 提供的 API 來存取、操作這些節點，進而動態改變我們預先寫好的 HTML。
`document.addEventListener('', callback)` 這段程式碼就是用 JavaScript 操作DOM 的一種方式，在 document 這個物件上透過 `addEventListener()` method 來監聽事件，事件發生後再執行 callback function 裡面的程式碼。
如果沒有 DOM，我們就沒辦法用 JavaScript 讓網頁動起來。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
事件發生的時候，會從 window → document → html 一路按照 DOM 的樹狀結構 (也就是 HTML 的階層結構) 往下傳遞到 target，再從 target 沿原路往上傳遞回 window。由上而下的過程稱為捕獲階段 (capturing phase)，由下往上傳的過程稱為冒泡階段 (bubbling phase)。如果你在中間任何一個節點加上 event listener，就可以在事件傳遞到那個節點的時候執行 callback function 中的程式碼。
補充：Event listener 預設是加在事件的冒泡階段，要手動在監聽器加上第三個參數 `{capture: true}`，才可以在補獲的階段觸發 callback function。

## 什麼是 event delegation，為什麼我們需要它？
Event delegation 就是事件代理，是利用事件傳遞機制的特性，把監聽器加在原本 target 的父節點上。以 click 事件來舉例，當我們點擊 `<div><p></p</div>` 中的 `<p>` tag，同時也點擊到了 `<p>` 的父元素 `<div>`，所以把監聽器加在 `<div>` 上也是可以的。
需要用到事件代理的情況有很多，舉例來說，假如一個父元素 `<div>` 底下有超多個 `<button>`，這時與其在每一個 `<button>` 上都加上監聽器，不如只加在他們的父元素上，等事件傳遞到父元素的時候，再用 `e.target` 去判斷使用者點選的是哪一個元素即可。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
`event.preventDefault()`：阻止事件預設的行為，如果事件是 submit，就不要送出表單，如果事件是 click，那就不讓你點擊。

`event.stopPropagation()`：阻止事件傳遞。如果在事件傳遞路徑的任何一個階段加上 `event.stopPropagation()`，事件執行完這個結點上的 event listeners 之後，就不會再繼續傳遞到下一個節點了。
補充：如果同一個節點的相同階段上有多個事件監聽器，你可以在任何一個監聽器被觸發的時候加上 `event.stopImmediatePropagation()`，就可以停止觸發後面所有的 listeners。