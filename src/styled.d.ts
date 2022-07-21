import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    accentColor?: string;
    bgColor?: string;
    fontColor?: string;
    borderColor?: string;
    focusColor?: string;
  }
}
