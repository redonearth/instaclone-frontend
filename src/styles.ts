import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

export const lightTheme: DefaultTheme = {
  bgColor: '#fafafa',
  fontColor: '#2c2c2c',
};

export const darkTheme: DefaultTheme = {
  bgColor: '#2c2c2c',
  fontColor: '#fafafa',
};

export const GlobalStyles: any = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  input {
    all: unset;
  }
  body {
    background-color: ${(props) => props.theme.bgColor};
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
    color: rgb(38, 38, 38);
  }
  a {
    text-decoration: none;
  }
`;
