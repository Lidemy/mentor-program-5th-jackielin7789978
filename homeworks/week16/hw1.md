![](https://miro.medium.com/max/1838/1*iHhUyO4DliDwa6x_cO5E3A.gif)

執行順序：

1. 把 console.log(1) 放進 call stack。
2. 執行 console.log(1)，然後把這個函式從 call stack 中 pop 掉。
3. 把 setTimeout(() => {console.log(2), 0}) 放進 call stack。
4. 呼叫 setTimeout，把裡面的 cb function 移出 call stack，等待 0 秒後放入 callback queue。
5. 把 console.log(3) 放進 call stack。
6. 執行 console.log(3)，然後 pop 掉。
7. 把 setTimeout(() => {console.log(4), 0}) 放進 call stack。
8. 呼叫 setTimeout，把裡面的 cb function 移出 call stack，等待 0 秒後放入 callback queue。
9. 把 console.log(5) 放進 call stack。
10. 執行 console.log(5)，然後 pop 掉。
11. 因為 console.log(5) 已經是最後一行了，所以這時 V8 會最底下那個 main 也 pop 掉，清空 call stack。
14. Event loop 看到 call stack 是空的，就把 callback queue 中的第一個 cb function 放進 call stack。
15. 執行 console.log(2)，然後 pop 掉，清空 call stack。
16. Event loop 看到 call stack 是空的，就把剩下的 cb function 放進 call stack。
17. 執行 console.log(4)，然後 pop 掉，清空 call stack。

因此這段程式碼最終會印出：
1
3
5
2
4