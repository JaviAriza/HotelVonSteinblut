import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CustomerProfile from "../pages/CustomerProfile";
import Reservations from "../pages/Reservations";
import Restaurant from "../pages/Restaurant";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/profile",
        element: <CustomerProfile />
    },
    {
        path: "/reservations",
        element: <Reservations />   
    },
    {
        path: "/restaurant",
        element: <Restaurant />
    }
])
