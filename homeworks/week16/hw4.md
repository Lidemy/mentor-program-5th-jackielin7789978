1. 先把底下的三個 function call 改寫成 .call 的形式：

obj.inner.hello() => obj.inner.hello.call(obj.inner)
obj2.hello() => obj2.hello.call(obj2)
hello() => hello.call(undefined)

2. 得知這三個 function call 的 this 分別會是 obj.inner, obj2, undefined
3. `obj.inner.hello()` 會印出 `this.value`，所以就是 `obj.inner.value`，也就是 2。
4. 因為前面有把 `obj.inner` 賦值給 `obj2`，所以這兩個 object 指向的是同一個物件。因此 `obj2.hello()` 就是 `obj.inner.hello()`，且要印出的 `this.value` 等於 `obj2.value` 等於 `obj.inner.value`，所以答案也是 2。
5. `const hello = obj.inner.hello`，所以呼叫 hello 就是呼叫 `console.log(this.value)`，由於這邊的 this 是 undefined，所以答案就是 undefined。要多解釋一點的話，這就跟在一個非物件導向環境中直接 `console.log(this)` 的行為一樣。

總結，這段程式碼會輸出：
2
2
undefined
