import { Navigate, createBrowserRouter } from "react-router-dom";
import { AdminLogin } from "./views/AdminLogin";
import { NotFound } from "./views/NotFound";
import { DashBoard } from "./views/Dashboard";
import Users from "./views/Users";
import { GuestLayout } from "./layout/GuestLayout";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Books } from "./views/Books";

// this is the main router of the react app
export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            { path: "/login", element: <AdminLogin></AdminLogin> },
            {
                path: "/",
                element: <Navigate to="/login"></Navigate>,
            },
        ],
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: "/dashboard", element: <DashBoard></DashBoard> },
            // if we are using the Default layout and no route is specified go to the dashboard
            { path: "/users", element: <Users></Users> },
            { path: "/", element: <Navigate to="/dashboard"></Navigate> },
            { path: "/books", element: <Books></Books> },
        ],
    },
    {
        // for any other route just display the not found page
        path: "*",
        element: <NotFound></NotFound>,
    },
]);
export const routes = [{ path: "/home", exact: true, name: "Home" }];
