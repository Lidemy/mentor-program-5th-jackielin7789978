## 交作業流程

1. 用 git bash 新建一個 branch：`git branch week1`
2. 切換到那個 branch：`git checkout week1`
> tip: `git checkout -b week1` 組合技
3. 寫作業
3. 用 git add 把新增的檔案加到暫存區
3. commit 改動：`git commit -am`
4. 把本地的改動 push 到 GitHub 上：`git push origin week1`
5. 發 Pull request (可直接在 GitHub 上操作)：按一下 [Compare & pull request] → 複製完成後的 PR 網址
6. 到學習系統上點選 [繳交作業] → 貼上 PR 網址

助教改完作業 (merge) 後：
1. 切換回 main：`git checkout master`
2. 把 GitHub 上的變更 pull 下來：`git pull origin master`
3. 刪除已經合併的分支：`git branch -d week1`


