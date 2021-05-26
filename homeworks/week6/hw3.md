## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. <button></button>：用來做按鈕的標籤。雖然 <input> 也可以做按鈕，但由於裡面的文字是用 value 屬性加上去的，因此無法再另外加上 <i>, <b>, <strong>, <br> 等標籤，用 <button></button> 則可以。
2. <article></article>： 用來標記一段可以獨立於其他內容的文章，例如部落格文章或一篇新聞報導。瀏覽器不會特別把 article 標籤裡的內容渲染成怎樣，但使用這個標籤會比較符合語意。
3. <audio></audio>：可以嵌入音檔的標籤。


## 請問什麼是盒模型（box modal）
我們可以把 CSS 中的每個元素想像成一個盒子，由內而外分別是 content → padding → border → margin。另外還有一個 outline， 是畫在 border 外面的框線。
Content 是盒子的內容，文字、圖片等都會出現在裡面，content 跟 border 之間可以加上 padding，border 與其他元素之間則可以加上 margin。


## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* inline：同行並排，大小靠內容撐開，無法手動設定寬高，預設為 inline 的 html tag 有 <span>, <strong>, <em>, 和 <a> 等。
* block：占據一整列的空間 (預設寬度 100%)，可以自由設定寬高。常見 tag 有 <h1>~<h6>, <div>, <p>, 和 <ul> 等。
* inline-block：可以想成是會並排的 block + 可以設定寬高的 inline。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* static：預設值。會按照瀏覽器預設的排版流自動排下來。
* relative：設定成 relative 的元素一開始會定位在原本的位置，我們可以加上 top, right, bottom 和 left 屬性去移動位置。
* absolute：初始定位點會以元素上層第一個非 static 元素為準，然後再用 top, right, bottom 和 left 去直接定位。
* fixed：和 absolute 很像，但是 fixed 元素會一直停留在視窗的相同位置，不管怎麼捲動都不會移動。

補充： 用 relative, absolute 和 fixed 定位的元素不會影響到其他元素的排列位置。 
