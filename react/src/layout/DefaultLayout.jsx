import React from "react";

import { Outlet,Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContextProvider";
export const DefaultLayout = () => {
    const { user, token } = useUserContext();
    if (!token || !user) {
        debugger;
        // go to login if user not available
        return <Navigate to="/login" />;
    }
    return (
        <>
            <Outlet />
        </>
    );
};
