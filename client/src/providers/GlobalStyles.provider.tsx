import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from 'src/styles';

import type { FCWithChildren } from 'src/types';





const GlobalStylesProvider: FCWithChildren = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider >
    )
}

export default GlobalStylesProvider

