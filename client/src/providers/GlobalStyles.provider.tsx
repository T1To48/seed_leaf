import { PropsWithChildren } from 'react'
import { ThemeProvider } from "styled-components";

import { theme,GlobalStyles } from '../styles';


type FCWithChildren = React.FC<PropsWithChildren>



const GlobalStylesProvider: FCWithChildren = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            {children}
        </ThemeProvider >)
}

export default GlobalStylesProvider

