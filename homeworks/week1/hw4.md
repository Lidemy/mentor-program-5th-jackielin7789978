## 跟你朋友介紹 Git

# Git 新手教學 (給蔡哥)

### 什麼是 Git？
Git 是專門用來進行版本控制的軟體。在電腦中安裝 Git 之後，就可以在終端機 (推薦使用 git bash) 輸入各種指令來進行版本控制，不用再土法煉鋼複製一堆自己也搞不清楚的資料夾啦！

>如果你不會用指令，可以看這篇簡單的 [Command Line 教學](https://hackmd.io/@jackielin7789978/HyITPaBUu)。

### Git 操作流程
所以到底要怎麼使用 Git 呢？
首先，我們必須先進行初始化，讓 Git 建立一個隱藏資料夾。
完成初始化後，我們可以：

1. 變更、新增檔案
2. 把檔案加進暫存區 (staging area)
3. Commit 暫存區中的檔案，正式將檔案加入版本控制
4. 重複步驟 1~3

### 常用 Git 指令
現在我們知道該做什麼了，但還不知道該怎麼做，由於以上操作都必須透過指令來進行，接下來就讓我們來認識常用的 Git 指令吧！
* `git init`：初始化版本控制，git 會在資料夾裡開一個隱藏資料夾 `.git/`
* `git add`：把檔案加進暫存區
    * `git add` + *file name*
    * `git add .`：一次加入整個資料夾的檔案
* `git status`：確認狀態，例如哪些檔案已變更或遭刪除，哪些已加入暫存區 (staging area)
* `git commit`：將暫存區的檔案 commit 出去，並產生版本編號 
    * `commit -m`＋*commit message*
    * `commit -am`＋*commit message*：把 new, modified, deleted 等狀態的檔案一起 commit 出去
    * `commit --amend -m`：修改 commit message
* `git log`：查看 commit 的歷史紀錄
    * `log --oneline`：查看較簡短的資料
* `git checkout`：切換版本
    * `git checkout` + *版本編號*：切換到某一個 commit 的版本。這個時候你會進入 detached HEAD 狀態，改動任何東西都不會影響到 main，可以理解為尚未命名的 branch (見下文)
延伸閱讀：[【冷知識】斷頭（detached HEAD）是怎麼一回事？](https://gitbook.tw/chapters/faq/detached-head.html)
    * `git checkout` + *branch name*：切換分支
* `.gitignore`：新建一個 `.gitignore` 檔案，把不想加入版本控制的檔案名稱紀錄在裡面，系統就會自動忽略這些檔案

其中最重要的兩個指令就是 `add` 和 `commit`，只要你會使用這兩個指令，就可以把檔案加入版本控制，再將新的版本發佈成一個新的 commit。

### 什麼是 Branch？要如何使用？
Branch 就是分支，是 Git 的精隨。我們直接舉實例來說明：
假設今天你想在笑話大全裡加一些新的笑話，或是改寫一些舊笑話，你可以使用 `git branch` 指令複製一條新的分支，好比複製一個新的資料夾，然後在新的分支上寫新笑話或改笑話。在這條新分支上做的任何改變都不會影響原本的主分支 (稱為 main)，就像你所複製的新資料夾與舊資料夾互不影響一樣。等你完成所有改變，就可以用 `git checkout main` 切回主分支，再用 `git merge` + *branch name* 合併兩條分支，它們就是你最新版本的笑話大全了。
開分支的好處是，你可以放膽去嘗試寫一堆新笑話或改笑話，也不用擔心你引以為傲的笑話大全被改得亂七八糟，再也回不去那個最完美的版本。

對了，合併的時候你可能會遇到「衝突」，也就是兩個分支中相同檔案的同一行內容不同，而 Git 不知道應該以哪個版本為主的情況。遇到這個狀況時，系統可能會顯示 `CONFLICT (content): Merge conflict in filename`，這時你就必須手動變更檔案的內容，然後重新 commit 一次。

### 我會用 Git 了，那 GitHub 又是什麼？
用一句話來解釋，Git 是版本控制軟體，GitHub 是一個使用 Git 的原始碼代管服務平台。
你可以把自己本地中的 git repository 放到 GitHub (或其他類似平台) 上，開放其他使用者觀看或進行協作。你可以免費在 GitHub 上建立公開的 repository，但如果你不想公開你的笑話大全，就必須付費才能建立私人的 repository。

### 進階：與遠端協作
假設你想把笑話大全的 git repository 放到 GitHub 上 (也就是建立一個遠端 repo)，那你也必須學會進行遠端協作時會用到的兩個指令：`push` 和 `pull`。

我們可以透過瞭解兩種連結遠端 repo 的情況來瞭解 `push` 和 `pull`。

* **把本地 repo 放上 GitHub：**
    1. 開啟一個新的 GitHub repo 並複製網址
    2. 在 git bash 中輸入 `git remote add origin 網址` (origin 是 GitHub 的預設遠端名稱，你也可以取其他名稱)
    3. 接著輸入 `git branch -M main` 和 `git push -u origin main`

只要在 `git push` 指令後面加上 `origin` (指遠端) 和 `main` (分支名稱)，就可以把本地的 `main` 分支推送到遠端的 repo 中。之後不論你在本地做了哪些改變，都可以透過相同方法同步本地和遠端的 repo。

* **把 GitHub 上的 repo clone 下來：**
    1. 找到你想複製到本地的 GitHub repo 並複製網址
    2. 在 git bash 中輸入 `git clone 網址`
    3. 輸入 `git remote` 查看遠端 repo (應該會看到 origin)

接下來，只要這個遠端 repo 中有任何變更，你都可以用 `git remote pull origin` + *branch name* 指令把這些變更抓到本地。

>不論你是如何與遠端連結，都可以使用 `push` 和 `pull`，輕鬆將本地檔案推送到遠端，或把遠端檔案拉取至本地。

### 結語
現在你已經瞭解 Git 是什麼，也掌握了 `add`、`commit`、`push` 和 `pull` 的用法，開始使用 Git 為你的笑話做版本控制吧！