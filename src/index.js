import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Edition from "./pages/Edition";
import NewEdition from "./pages/NewEdition";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/tasks",
                element: <Tasks/>
            },
            {
                path: "/edition/new",
                element: <NewEdition/>
            },
            {
                path: "/edition/:taskId",
                element: <Edition/>
            }
        ]
    }
])

root.render(
    <RouterProvider router={router}/>
);
