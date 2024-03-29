import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

export const lightTheme: DefaultTheme = {
  accentColor: '#0095f6',
  borderColor: 'rgb(219, 219, 219)',
  focusColor: 'rgb(38, 38, 38)',
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
    color: ${(props) => props.theme.focusColor};
  }
  a {
    text-decoration: none;
  }
`;
