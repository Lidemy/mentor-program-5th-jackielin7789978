## 交作業流程

寫作業
1. 按照 [MTR05]「如何交作業」影片中的敘述開啟自己的作業 repository 並複製網址
2. 開啟 git bash，用 `git clone 網址` 指令將整個 repo 複製到本機資料夾
3. 從本機資料夾開啟當週作業檔案 → 寫作業
4. 完成當週所有作業後，到學習系統上查看「自我檢測」並修正錯誤

交作業
1. 用 git bash 新建一個 branch：`git branch branch_name`
2. 切換到那個 branch：`git checkout branch_name`
> tip: `git checkout -b branch_name` 組合技
3. commit 完成的作業檔案：`git commit -am`
4. 把本地 repo push 到 GitHub 上：`git push origin branch_name`
5. 發 Pull request (可直接在 GitHub 上操作)：按一下 [Compare & pull request] → 複製完成後的 PR 網址
6. 到學習系統上點選 [繳交作業] → 貼上 PR 網址


