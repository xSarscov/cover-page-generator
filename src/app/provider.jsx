import {ThemeProvider} from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme} from "@mui/material/styles";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {BrowserRouter} from "react-router";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: [
            'Inter',
        ].join(','),
    }
})

export const AppProvider = ({children}) => {
    return (
        <BrowserRouter>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    {children}
                </ThemeProvider>
            </LocalizationProvider>
        </BrowserRouter>
    )
}