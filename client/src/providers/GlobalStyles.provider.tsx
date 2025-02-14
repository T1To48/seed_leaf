import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from 'src/styles';

import type { FCWithChildren } from 'src/types';





const GlobalStylesProvider= ({ children }: FCWithChildren) => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider >
    )
}

export default GlobalStylesProvider

