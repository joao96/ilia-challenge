import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #212121 no-repeat center top;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 14px Roboto, sans-serif;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
