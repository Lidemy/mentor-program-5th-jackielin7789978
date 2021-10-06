import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, textarea {
    margin: 0;
    padding: 0;
  }
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  input {
    text-decoration: none;
    &:focus {
      outline: none;
    }
  }
  button {
    background: transparent;
    border: none;
  }

`

export default GlobalStyle
