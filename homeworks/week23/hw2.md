## 為什麼我們需要 Redux？

Redux 是一種「狀態管理工具」 (state management tool)，我們可以使用 Redux 來集中管理應用程式中的全域狀態，讓其成為應用程式中的唯一資訊來源 (single source of truth)，接著在需要使用狀態的元件中把資料取出來使用即可。

以 React 搭配 Redux 的使用情境來說，Redux 解決了寫 React 的時候常常會碰到的惱人問題 — Prop Drilling。 寫 React 的時候，如果想讓子元件接收到父元件的資料，就得把資料當成 props 傳下去，當元件像俄羅斯娃娃一樣有超多層的時候，就只能一層一層傳下去，這就是 prop drilling。使用 Redux 之後，由於可以很方便的取用全域狀態，就可以解決這個問題，而且整個應用程式的元件都可以取出這些資料，就不用瘋狂的把 state 往上提升了。

順帶補充，在 React Context 和 Hooks 出現之後，比較小型的專案或許不需要使用到 Redux，可以用 Context Provider 和 useContext 實現類似的功能。不過由於 context 中的資料一有改動就會觸發 re-render，使用的時候可能會造成效能問題。

## Redux 是什麼？可以簡介一下 Redux 的各個元件跟資料流嗎？

Redux 管理狀態的方式，是提供一個叫做 store 的地方來儲存 global state，而 UI 會根據 state 來顯示畫面。當應用程式發生變化 (例如使用者互動)，就使用 store 提供的方法 dispatch，來 dispatch 一個 action，這個 action 會描述應用程式發生了什麼變化，並帶上 action payload，接著會由 reducer function 來接收這個 action，對 state 做相對應的改動 (immutable)，最後再根據 state 來改變畫面。這就是 Redux 的資料流，store 做完 single source of truth，而所有 actions 都會經由 dispatcher 發出，因此能夠確保程式不會有非預期的改動，也更容易追蹤所有的變化。

## 該怎麼把 React 跟 Redux 串起來？

React 官方有提供一個專門用來綁定 React 和 Redux 的套件 - react-redux，而 React Redux 又提供了兩種方式來做綁定。

在 hooks 出現以前，大家是透過 `connect` 這個 function 搭配 HOC 的做法來進行綁定，只要傳入 `mapStateToProps` 和 `mapDispatchToProps` 這兩個 function，`connect` 就會回傳可用於綁定的另一個 function。
最後只要 call 這個 function，並傳入要綁定的 React component，就可以拿到綁定後的 component。綁定後的 component 是一個 higher order component，也稱為 smart component，而原本的 component 就變成只處理 UI 的 dumb component，可以接收 Redux 的 state 和 dispatcher。這是第一種綁定方式。

Hooks 出現之後，有了更方便的綁定方式 - `useSelector` & `useDispatch`。只要在 React component 裡面呼叫這兩個 hooks，就可以拿到 Redux store 裡面的 state 和 dispatcher，超方便的。在 hooks 普及之後，官方也變得比較推薦這種方式。
