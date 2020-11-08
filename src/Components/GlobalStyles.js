import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    padding-top: 100px;
    font-family: 'Nanum Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    font-size: 13px;
    background-color: rgba(20, 20, 20, 1);
    color: white;
    background-image: url("images/take_over.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`;

export default globalStyles;