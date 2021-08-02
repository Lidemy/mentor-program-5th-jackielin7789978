## Webpack 是做什麼用的？可以不用它嗎？

Webpack 是模組打包工具 (module bundler)，它可以把各種模組甚至是圖片、一般的 css 檔視為資源，然後幫你打包起來。
之前的課程有提到 node.js 的 `module.exports` 和 `require` 語法，方便我們使用模組化的方式開發，譬如寫一個 functions.js 或 utils.js 檔，再把它引入主要的 js 檔中使用。但是原生 JS，也就是在瀏覽器上執行的 JS ，一直到 ES6 的 `import` 和 `export` 語法出現，才能支援這種模組化的開發。因此在 `import/export` 出現之前，前端都要靠特定工具 (Webpack 就是其中之一) 處理過後，才能在瀏覽器上執行這些語法。但是即使 ES6 開始支援模組化開發，瀏覽器的支援度仍然不夠完整，因此還是需要使用 Webpack。就算放棄在比較舊的瀏覽器上跑我們的程式，使用 webpack 還是有很多很方便的地方。就像前面所說的，webpack 可以把圖片檔也視為資源一起打包，另外連 npm 的 library 也可以通通打包起來，因此我們可以很方便的使用 `import Image from './assets/banner.png'` 或 `import $ from 'jquery'` 引入需要的資源，而這都是因為有 webpack 的 loaders 在幫我們處理。

做個總結，webpack 是很方便的模組/資源打包工具，但需不需要使用還是看專案需求。如果沒有上述需求，當然就不必使用 webpack。

## gulp 跟 webpack 有什麼不一樣？

gulp 是任務管理工具 (task manager)，可以幫我們按照所設定的順序一一執行各種任務，譬如 compile sass 檔案、compile babel 檔案、壓縮圖片檔案等等。因為前端開發會使用到蠻多工具的，把這些任務自動化後，就可以節省開發的時間，不用每次都手動執行一大堆指令。而 webpack 像前一題所說的，是模組打包工具，所以這兩者做的事情有根本上的差異。

## CSS Selector 權重的計算方式為何？

0-0-0：萬用選擇器，例如 `*`, `+`, `>` 等等。這些選擇器沒有任何權重。
0-0-X：HTML 元素選擇器，也就是 `body`, `div`, `li` 等等。這類選擇器的數量會加在 X 的地方。
0-X-0：class 和屬性選擇器，這類選擇器的權重比 html tag 高，會按照數量加在 X 的地方。
X-0-0：ID 選擇器的權重又比 class 和屬性更高，同樣會按照數量加在 X 的地方。
X-0-0-0：inline style。它會直接輾壓其他選擇器，蓋過你在 css 檔裡面寫的樣式。
X-0-0-0-0：`!important` 大魔王，不必多說，權重最高，直接暴力蓋過所有人。

要比較權重，只要按照上面的規則加一加再比大小就可以了。
參考資料：![](https://muki.tw/wordpress/wp-content/uploads/2015/07/CSS-Specificity-full.png)
