import Box from "@mui/material/Box";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightlightIcon from "@mui/icons-material/Nightlight";
import PropTypes from "prop-types";


function SwitchDarkMode(props) {
    return <Box sx={{display: {md: "flex"}}}>
        <ToggleButtonGroup>
            <ToggleButton
                selected={props.theme.palette.mode === "light"}
                value="light"
                onClick={props.onClickLight}>
                <Brightness7Icon/>
            </ToggleButton>
            <ToggleButton
                selected={props.theme.palette.mode === "dark"}
                value="dark"
                onClick={props.onClickDark}>
                <NightlightIcon/>
            </ToggleButton>
        </ToggleButtonGroup>
    </Box>;
}

SwitchDarkMode.propTypes = {
    theme: PropTypes.any,
    onClickLight: PropTypes.func,
    onClickDark: PropTypes.func
};

export default SwitchDarkMode;