import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CustomerProfile from "../pages/CustomerProfile";
import Reservations from "../pages/Reservations";
import Restaurant from "../pages/Restaurant";
import UserLogin from "../pages/UserLogin"
import BookingSummary from "../components/BookingSummary/BookingSummary";
import Faq from "../pages/Faq";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/reservations", element: <Reservations /> },
            { path: "/restaurant", element: <Restaurant /> },
            { path: "/booking-summary", element: <BookingSummary /> },
            { path: "/customer/:id", element: <CustomerProfile /> },
            { path: "/customer", element: <UserLogin /> },
            { path: "/faq", element: <Faq /> },
            {path: "/profile",element: <CustomerProfile />},

        ],
    },
]);
