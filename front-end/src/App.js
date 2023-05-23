import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// TO BE REMOVED AFTER WORK


import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Members from "./scenes/team";
//import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";
import Cataloging from "./scenes/Cataloging";

// TO BE REMOVED AFTER WORK

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { UserContextProvider } from "./contexts/UserContextProvider";
import AddBook from "./components/Book.add";
import SplitScreenLogin from "./components/SplitScreen.login";
import SplitScreenSignup from "./components/SplitScreen.signup";

import { ProtectedRoutes } from "./protectedRoutes";
import { AppHeightContext } from "./contexts/AppHeight";
function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const [height, setHeight] = useState(null);

    const { pathname } = useLocation();

    return (
        <UserContextProvider>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        {pathname === "/login" || pathname === "/" ? (
                            <Routes>
                                <Route
                                    path="/"
                                    element={<SplitScreenSignup />}
                                />
                                <Route
                                    path="/login"
                                    element={<SplitScreenLogin />}
                                />
                            </Routes>
                        ) : (
                            <>
                                {/* <ProtectedRoutes
                                    isSidebar={isSidebar}
                                    setIsSidebar={setIsSidebar}
                                ></ProtectedRoutes> */}

                                {/* TO BE REMOVED AFTER WORK */}
                                <AppHeightContext.Provider value={{ height, setHeight }}>
                                    <ProtectedRoutes></ProtectedRoutes>
                                </AppHeightContext.Provider>
                            </>
                        )}
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </UserContextProvider>
    );
}

export default App;
