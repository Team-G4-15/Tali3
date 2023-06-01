import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Members from "./scenes/team";
import Member from "./scenes/Member";
import AccountOV from "./components/AccountOV";
import SearchPage from "./scenes/Filtering";
import Bar from "./scenes/bar";
import Form from "./scenes/form";

import AddBook from "./components/Book.add";
import AddMember from "./components/AddMember";
import Cataloging from "./scenes/Cataloging";
import ResearchPapers from "./scenes/researchpapers";
import AddResearchPaper from "./components/ResearchPaper.add";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useUserContext } from "./contexts/UserContextProvider";
import { useEffect } from "react";
import {Loan} from "./scenes/Loan/index.jsx"
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
                             <Route path="/loan" element={<Loan />} />
                            <Route path="/Cataloging" element={<Cataloging />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/bar" element={<Bar />} />
                   
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/addBook" element={<AddBook />} />
                            <Route path="/researchpapers/add" element={<AddResearchPaper />} />
                            <Route path="/Filtering" element={<SearchPage />} />
                            <Route path="/Member" element={<Member />}></Route>
                            <Route path="/patrons/add" element={<AddMember />}></Route>
                            {/* <Route path="/Filtering" element={<PeriodicalSearch />} /> */}
                            <Route path="/researchpapers" element={<ResearchPapers />} />
                            <Route path="/account" element={<AccountOV />} />
                        </Routes>
                    </main>
                </>
            )}
        </>
    );
};
