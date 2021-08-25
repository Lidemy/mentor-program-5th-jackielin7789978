執行順序：

1. 進入第一圈迴圈，把 console.log('i: ' + i) 放進 call stack。
2. 執行 console.log('i: ' + i)，此時 i = 0。印出 i: 0 後 pop 掉。
3. 把 setTimeout 放進 call stack。
4. 呼叫 setTimeout，把裡面的 console.log(i) 移出 call stack，等待 0 * 1000 秒後移入 callback queue。把 setTimeout pop 掉。
5. 進入第二圈迴圈，把 console.log('i: ' + i) 放進 call stack。
6. 執行 console.log('i: ' + i)，此時 i = 1。印出 i: 1 後 pop 掉。
7. 把 setTimeout 放進 call stack。
8. 呼叫 setTimeout，把裡面的 console.log(i) 移出 call stack，等待 1 * 1000 秒後移入 callback queue。把 setTimeout pop 掉。
9. 進入第三圈迴圈，把 console.log('i: ' + i) 放進 call stack。
10. 執行 console.log('i: ' + i)，此時 i = 2。印出 i: 2 後 pop 掉。
11. 把 setTimeout 放進 call stack。
12. 呼叫 setTimeout，把裡面的 console.log(i) 移出 call stack，等待 2 * 1000 秒後移入 callback queue。把 setTimeout pop 掉。
13. 進入第四圈迴圈，把 console.log('i: ' + i) 放進 call stack。
14. 執行 console.log('i: ' + i)，此時 i = 3。印出 i: 3 後 pop 掉。
15. 把 setTimeout 放進 call stack。
16. 呼叫 setTimeout，把裡面的 console.log(i) 移出 call stack，等待 3 * 1000 秒後移入 callback queue。把 setTimeout pop 掉。
17. 進入第五圈迴圈，把 console.log('i: ' + i) 放進 call stack。
18. 執行 console.log('i: ' + i)，此時 i = 4。印出 i: 4 後 pop 掉。
19. 把 setTimeout 放進 call stack。
20. 呼叫 setTimeout，把裡面的 console.log(i) 移出 call stack，等待 4 * 1000 秒後移入 callback queue。把 setTimeout pop 掉。
21. 此時 i = 5，不會進入迴圈，主程式跑完清除 call stack。
22. Event loop 發現 call stack 是空的，就依序把 callback queue 裡的 console.log(i) 放入 call stack 並執行。由於用 var 宣告的 i 在這裡是全域變數，所以所有的 console.log(i) 都會印出 5。


因此這段程式碼最終會印出：
i: 0
i: 1
i: 2
i: 3
i: 4
5
5
5
5
5