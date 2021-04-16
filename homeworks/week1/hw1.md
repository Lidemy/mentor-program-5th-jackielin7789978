## 交作業流程

寫作業
1. 按照 [MTR05]「如何交作業」影片中的敘述開啟自己的作業 repository 並複製網址
2. 開啟 git bash，用 `git clone 網址` 指令將整個 repo 複製到本機資料夾
3. 從本機資料夾開啟當週作業檔案 → 寫作業
4. 完成當週所有作業後，到學習系統上查看「自我檢測」並修正錯誤

交作業
1. 用 git bash 新建一個 branch：`git branch week1`
2. 切換到那個 branch：`git checkout week1`
> tip: `git checkout -b week1` 組合技
3. 用 git add 把新增的檔案加到暫存區
3. commit 完成的作業檔案：`git commit -am`
4. 把本地 repo push 到 GitHub 上：`git push origin week1`
5. 發 Pull request (可直接在 GitHub 上操作)：按一下 [Compare & pull request] → 複製完成後的 PR 網址
6. 到學習系統上點選 [繳交作業] → 貼上 PR 網址

助教改完作業 (merge) 後：
1. 切換回 main：`git checkout main`
2. 把 GitHub 上的變更 pull 下來：`git pull origin main`
3. 刪除已經合併的分支：`git branch -d week1`


