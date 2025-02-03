import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from '../styles';

import { FCWithChildren } from '../types';





const GlobalStylesProvider: FCWithChildren = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider >
    )
}

export default GlobalStylesProvider

