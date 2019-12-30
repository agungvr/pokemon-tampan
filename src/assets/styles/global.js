import { css } from "styled-components";

import LinotteRegular from "../fonts/Linotte-Regular.otf";
import LinotteSemiBold from "../fonts/Linotte-Semi-Bold.otf";
import LinotteLight from "../fonts/Linotte-Light.ttf";

const GlobalCSS = css`
  @font-face {
    font-family: "Linotte";
    font-style: normal;
    font-display: auto;
    src: url(${LinotteRegular});
    src: url(${LinotteRegular}) format("truetype");
  }

  @font-face {
    font-family: "Linotte-Semi-Bold";
    font-style: normal;
    font-display: auto;
    src: url(${LinotteSemiBold});
    src: url(${LinotteSemiBold}) format("truetype");
  }

  @font-face {
    font-family: "Linotte-Light";
    font-style: normal;
    font-display: auto;
    src: url(${LinotteLight});
    src: url(${LinotteLight}) format("truetype");
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    font-family: "Linotte";
    color: rgb(106, 124, 149);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p {
    margin: 0;
    color: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0px;
    width: 100%;
    padding: 0px auto;
    background: #fdfdfd;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
  input:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  input[type="button" i],
  input[type="submit" i],
  input[type="reset" i],
  input[type="file" i]::-webkit-file-upload-button,
  button {
    padding: 0;
  }
  input {
    -webkit-appearance: none;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    padding: 0;
    border: none;
  }
  .scroll::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
  .scroll::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  .scroll::-webkit-scrollbar-thumb {
    background-color: #7d2ae8;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
`;

export default GlobalCSS;
