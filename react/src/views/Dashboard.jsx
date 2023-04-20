import { useUserContext } from "../contexts/UserContextProvider";
import AppHeader from "../components/AppHeader";
import {  AppFooter, AppSidebar } from "../components";
import AppContent from "../components/content/AppContent";
export function DashBoard() {

    const { user, setUser, setToken } = useUserContext();
    return (
        <>
            <div>
                <AppSidebar />
                <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                    <AppHeader />
                    <div className="body flex-grow-1 px-3">
                        <AppContent />
                    </div>
                    <AppFooter />
                </div>
            </div>
        </>
    );
}
