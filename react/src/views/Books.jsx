import { useUserContext } from "../contexts/UserContextProvider";
import AppHeader from "../components/AppHeader";
import { AppFooter, AppSidebar } from "../components";
import BookContent from "../components/content/BookContent";
export function Books() {
    const { user, setUser, setToken } = useUserContext();
    return (
        <>
            <div>
                <AppSidebar />
                <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                    <AppHeader />
                    <div className="body flex-grow-1 px-3">
                        <BookContent />
                    </div>
                    <AppFooter />
                </div>
            </div>
        </>
    );
}
