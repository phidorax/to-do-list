import Box from "@mui/material/Box";
import {Link, useLocation} from "react-router-dom";
import {Button} from "@mui/material";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";

function TopMenuItem() {
    // Get actuel url
    const location = useLocation();
    const isCurrentPath = (path) => location.pathname === path;

    return <>
        <Box>
            <Link to={"/"}><Button variant={isCurrentPath("/") ? "outlined" : "text"}>Accueil</Button></Link>
            <Link to={"/dashboard"}><Button variant={isCurrentPath("/dashboard") ? "outlined" : "text"}>Tableau de
                bord</Button></Link>
            <Link to={"/tasks"}><Button variant={isCurrentPath("/tasks") ? "outlined" : "text"}>Tâches</Button></Link>
        </Box>
        <Box>
            <Link to={"/edition/new"}><Button variant={isCurrentPath("/edition/new") ? "outlined" : "text"}
                                              startIcon={<AddIcon/>}>Nouvelle tâche</Button></Link>
        </Box>
    </>;
}

export default TopMenuItem;