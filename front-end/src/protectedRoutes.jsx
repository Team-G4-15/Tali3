import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Members from "./scenes/team";
import BookSearch from "./scenes/Filtering/BookSearch";
import PeriodicalSearch from "./scenes/Filtering/PeriodicalsSearch";
import SearchPage from "./scenes/Filtering";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";
import AddBook from "./components/Book.add";
import ResearchPapers from "./scenes/researchpapers";
import AddResearchPaper from "./components/ResearchPaper.add";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useUserContext } from "./contexts/UserContextProvider";
import { useEffect } from "react";
import Cataloging from "./scenes/Cataloging";
export let ProtectedRoutes = function (isSidebar, setIsSidebar) {
    const { user, token } = useUserContext();
    let navigate = useNavigate();

    useEffect(() => {
        if (!user || !token) {
           navigate("/");
        }
    }, []);

    return (
        <>
            {user && token && (
                <>
                    <Sidebar isSidebar={isSidebar} />
                    <main className="content">
                        <Topbar setIsSidebar={setIsSidebar} />
                        <Routes>
                            <Route path="/members" element={<Members />} />
                            {/* <Route path="/contacts" element={<Contacts />} /> */}
                            <Route path="/Cataloging" element={<Cataloging />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/geography" element={<Geography />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/addBook" element={<AddBook />} />
                            <Route path="/researchpapers/add" element={<AddResearchPaper />} />
                            <Route path="/Filtering" element={<SearchPage />}></Route>
                            <Route path="/researchpapers" element={<ResearchPapers/>}></Route>
                        </Routes>
                    </main>
                </>
            )}
        </>
    );
};
