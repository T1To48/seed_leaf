import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size:62.5%;
}

 body {
    font-family:"Open Sans", sans-serif;
    background:${({theme}) => theme.color.background}
}

a {
    text-decoration: none;
    /* color: */
}
ul {
    list-style: none;
}
img {
    /* max-width: 100%; */
}
button,a{
    cursor: pointer;
}
button, input, textarea, select {
    font-family:"Open Sans", sans-serif;
}

`;

export default GlobalStyles;
