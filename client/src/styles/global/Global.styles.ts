import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

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
    background:${props=>props.theme.color.background}
}

a {
    text-decoration: none;
    /* color: */
}
ul {
    list-style: none;
}
img {
    max-width: 100%;
}
`;

export default GlobalStyles;
