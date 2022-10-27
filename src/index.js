import React from "react";
import ReactDom from 'react-dom';
import Home from "./pages/Home";
import Story from "./pages/Story";
import Shop from "./pages/Shop";
import Csr from "./pages/Csr";
import Boutique from "./pages/Boutique";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import JobApplication from "./pages/JobApplication";
import GiftCards from "./pages/GiftCards";
import Login from "./pages/Login";
import Lipstick from "./pages/Lipstick";
import Lipliner from "./pages/Lipliner";
import Agavecream from "./pages/Agavecream";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/story",
        element: <Story />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: "/csr",
        element: <Csr />
    },
    {
        path: "/boutique",
        element: <Boutique />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/lipstick",
        element: <Lipstick />
    },
    {
        path: "/lipliner",
        element: <Lipliner />
    },
    {
        path: "/agavecream",
        element: <Agavecream />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/giftcards",
        element: <GiftCards />
    },
    {
        path: "/jobapplication",
        element: <JobApplication />
    },
]);
ReactDom.render(
    <RouterProvider router={router} />,
    document.getElementById("homepage")
);