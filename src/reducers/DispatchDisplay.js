import {createTheme} from "@mui/material";

export function displayReducer(state, action) {
    switch (action.type) {
        case 'setDarkMode':
            switch (action.payload) {
                case 'light':
                    return createTheme({palette: {mode: 'light'}});
                case 'dark':
                    return createTheme({palette: {mode: 'dark'}});
                default:
                    throw Error('Unknown action: ' + action.type);
            }
        case 'setWindowWidth':
            return action.payload;
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
