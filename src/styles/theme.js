import { ThemeProvider } from "styled-components";

import theme from '../themes/default';
import GlobalStyle from "./global";

const Theme = ({children})=>(
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {children}
    </ThemeProvider>
);

export default Theme;