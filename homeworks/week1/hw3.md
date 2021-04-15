## 教你朋友 CLI

# Command Line 基礎教學 (給 h0w 哥)

### 什麼是 Command Line？
要知道什麼是 Command Line，首先你要知道 GUI 是什麼。Graphical User Interface (圖形使用者介面) 顧名思義就是以圖形顯示的使用者介面，使用者可以透過圖像化的介面來操控電腦。我們平常使用的 Windows 系統、macOS 系統、瀏覽器、Photoshop 等等能看見圖像並用滑鼠點選按鈕的界面都是 GUI。沒有 GUI 的時候，使用者就必須透過文字來操控電腦，這時我們就必須在 Terminal (終端機) 環境中使用 Command Line (指令列)。

> 那為什麼要有 Terminal，如果所有軟體都用 GUI 操作不是很方便嗎？

其實電腦上有各種大大小小的軟體在運作，並不是每一個軟體都需要特別去設計一個 GUI，有時這個軟體只需要完成簡單的任務，只要在 Terminal 裡用幾行指令就可以完成。所以你還是乖乖學怎麼用 Command Line 來操控電腦吧！

### 執行環境
你可以在各種終端機軟體中執行 Command Line，例如 Mac 內建的 Terminal 和 Windows 的命令提示字元。這裡我建議你使用 Git 所附帶的 git-bash，只要在電腦中[安裝 Git](https://git-scm.com/)，系統就會一併安裝這個終端機軟體。

### 常用指令
現在我們來認識幾個常用指令：
``` 
*基本指令
pwd: 顯示現在所在的資料夾
ls: 列出資料夾中的檔案
    -a 列出隱藏檔案
    -l 列出檔案的詳細資訊
    -al 組合技
cd: cd + directory name 切換資料夾
    cd .. 回到上一個資料夾
man: man + 指令名稱 可顯示指令的使用說明 (macOS)
--help：指令名稱 --help 可顯示指令的使用說明 (Windows)

*檔案操作
touch: 建立檔案或變更檔案使用的時間記錄
rm: 刪除檔案
rmdir: 刪除資料夾
mkdir: 建立資料夾
mv: 移動檔案或更改檔名
cp: 複製檔案
cat: 查看檔案內容

*補充指令
grep: 依關鍵字抓取內容。grep + 關鍵字 + 檔名 → 顯示包含關鍵字的那行文字/程式碼
wget: 輸入 wget + 網址即可下載檔案。附註：wget 不是內建指令，需另外下載安裝。
curl: 

*指令組合技
重新導向: 透過 ">" 符號可以將指令的結果重新導向/輸入至另一個檔案。
    範例：ls -al > list.txt 就會將 ls -al 的結果輸入至一個新的檔案 list.txt

pipe: 將 "|" 符號左邊的輸出結果輸入到右方
    範例：cat filename | grep someword 
    輸入這個指令的結果會和 grep someword filename 一模一樣
```

### 補充：終端機裡的文字編輯器 Vim
如果你想在終端機裡直接編輯檔案，可以輸入 `vim` + `filename`，開啟 Vim 編輯器。
進去之後按照下列方法操作就可以了。

操作方法：
1. 按 i 進入編輯模式
2. 按 Esc 進入普通模式
    * :q 離開
    * :wq 存檔並離開

## 教學：如何用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案
看完上面的介紹之後，我相信你自己應該會做了，但我還是把步驟寫在這裡給你參考，誰叫我人那麼好呢！

操作步驟：
``` 
1. mkdir wifi (建立資料夾)
2. cd wifi (切換到剛剛建立的資料夾)
3. touch afu.js (在資料夾中新增檔案)
```

