import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContextProvider";

export function GuestLayout() {
    const { token, user } = useUserContext();
    // check if the token Exists.If yes then the user has aleady authenticated
    if (token && user) {
        return <Navigate to="/dashboard"></Navigate>;
    }
    return (
        <>
            <Outlet />
        </>
    );
}
