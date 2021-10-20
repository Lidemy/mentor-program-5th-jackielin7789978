import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { StrictMode } from 'react'
import GlobalStyle from './constants/GlobalStyle'

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.querySelector('#root')
)
