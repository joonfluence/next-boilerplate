import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const Component = createGlobalStyle`
  ${normalize()};

  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1;
  }

  #__next, body {
    position: relative;
    z-index: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  li, ul, ol, dl {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  div, header, aside, section, article, main, footer {

  }

  body {
    font-family: 'Noto Sans KR';
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; */
    /* font-family: 'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace; */
    font-size: 14px;
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
  }

  [data-rsbs-overlay] {
    max-width: 480px !important;
    margin: 0 auto !important;
  }
 `;

export default Component;
