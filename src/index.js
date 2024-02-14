import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Taches from "./pages/Taches";
import Edition from "./pages/Edition";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/taches",
                element: <Taches/>
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
