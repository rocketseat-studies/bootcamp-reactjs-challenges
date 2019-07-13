import { createGlobalStyle } from "styled-components";
import { mediaLG } from "./utilities/breakpoints";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font-family: sans-serif;
        background-color: #9B65E5;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        overflow-x: hidden !important;
       
        ${mediaLG` overflow-y: hidden !important;`}
    }

`;

export default GlobalStyle;
