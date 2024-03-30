import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import TopMenuItem from "./TopMenuItem";
import SwitchDarkMode from "./SwitchDarkMode";
import * as PropTypes from "prop-types";
import * as React from "react";

function TopApp(props) {
    return <Container maxWidth="lg">
        <Toolbar variant="regular" sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor: theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(24px)',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: theme.palette.mode === 'light'
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
        })}>
            <Box sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
                justifyContent: "center",
            }}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
                    <h1 style={{marginRight: "0px", marginLeft: "16px"}}>ToDoList</h1>
                    <TopMenuItem/>
                    <SwitchDarkMode theme={props.theme} onClickLight={props.onClickLight}
                                    onClickDark={props.onClickDark}/>
                </div>
            </Box>
        </Toolbar>
    </Container>;
}

TopApp.propTypes = {
    theme: PropTypes.any,
    onClickLight: PropTypes.func,
    onClickDark: PropTypes.func
};

export default TopApp;