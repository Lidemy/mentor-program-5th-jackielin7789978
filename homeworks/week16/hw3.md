1. 進入 Global EC，初始化 Global VO：
Global VO
{
  a: undefined,
  fn: func
}
2. 執行 Global EC，把 a 的值改成 1：
Global VO
{
  a: 1,
  fn: func
}
3. 呼叫 fn，進入 fn EC，初始化 fn AO：
fn AO
{
  a: undefined,
  fn2: func
}
4. 執行 fn EC，log 出 a 的值 // undefined
5. 執行 fn EC，把 a 的值改成 5
fn AO
{
  a: 5,
  fn2: func
}
6. 執行 fn EC，log 出 a 的值 // 5
7. 執行 fn EC，a ++
{
  a: 6,
  fn2: func
}
8. 略過 var a，因為 fn AO 裡面已經有一個 a 了
9. 呼叫 fn2，進入 fn2 EC，初始化 fn2 AO：
fn2 AO
{
  // 沒有變數或函式宣告，所以留空
}
10. 執行 fn2 EC，console.log(a)。因為 fn2 AO 裡面沒有 a，所以往作用域的上層找，找到 fn AO 中的 a 並 log 出來 // 6
11. 執行 fn2 EC，a = 20，一樣往上找到 fn AO，並改變 a 的值。
fn AO
{
  a: 20,
  fn2: func
}
12. 執行 fn2 EC，b = 100。這次往上找 fn AO，裡面沒有 b，再往上找 Global VO，也沒有 b，只好就地在 Global VO 中宣告 b，並賦值為 100。
Global VO
{
  a: 1,
  fn: func,
  b: 100
}
13. fn2 執行完畢。
14. 執行 fn EC，console.log(a) // 20
15. fn 執行完畢。
16. 執行 Global EC，console.log(a) // 1
17. 執行 Global EC，把 a 的值改為 10
Global VO
{
  a: 10,
  fn: func,
  b: 100
}
18. 執行 Global EC，log 出 a // 10
19. 執行 Global EC，log 出 b // 100

這段程式碼最終會印出：
undefined
5
6
20
1
10
100