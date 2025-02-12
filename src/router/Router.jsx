import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CustomerProfile from "../pages/CustomerProfile";
import Reservations from "../pages/Reservations";
import Restaurant from "../pages/Restaurant";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,  // Layout con Navbar y Footer
        children: [
            { path: "/", element: <Home /> },
            { path: "/reservations", element: <Reservations /> },
            { path: "/restaurant", element: <Restaurant /> },
            { path: "/customer/:id", element: <CustomerProfile /> },
        ],
    },
]);


