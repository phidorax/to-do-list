import * as React from 'react';
import {Outlet} from "react-router-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {displayReducer} from "../reducers/DispatchDisplay";
import {storage} from "../services/LocalStorage";
import TopApp from "../components/TopApp";


const RootLayout = () => {
    const [theme, dispatchTheme] = React.useReducer(displayReducer, storage.getTheme(), arg => {
        switch (arg) {
            case 'light':
                return createTheme({palette: {mode: 'light'}});
            case 'dark':
                return createTheme({palette: {mode: 'dark'}});
            default:
                return createTheme({palette: {mode: 'light'}});
        }
    });

    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        <TopApp theme={theme} onClickLight={() => {
            if (theme.palette.mode === 'dark') {
                dispatchTheme({type: 'setDarkMode', payload: 'light'});
                storage.setTheme('light');
            }
        }} onClickDark={() => {
            if (theme.palette.mode === 'light') {
                dispatchTheme({type: 'setDarkMode', payload: 'dark'});
                storage.setTheme('dark');
            }
        }}/>
        <Outlet/>
    </ThemeProvider>;
}

export default RootLayout;