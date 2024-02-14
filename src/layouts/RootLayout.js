import * as React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Button, ButtonGroup} from "@mui/material";

const RootLayout = () => {
    return (
        <>
            <nav>
                <ButtonGroup variant="contained" aria-label="Menu">
                    <Link to={'/'}>
                        <Button variant="contained">Home</Button>
                    </Link>
                    <Link to={'/dashboard'}>
                        <Button variant="contained">Dashboard</Button>
                    </Link>
                    <Link to={'/taches'}>
                        <Button variant="contained">Tâches</Button>
                    </Link>
                </ButtonGroup>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default RootLayout;