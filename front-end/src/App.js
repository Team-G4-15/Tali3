import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { UserContextProvider } from "./contexts/UserContextProvider";
import AddBook from "./components/Book.add";
import SplitScreenLogin from "./components/SplitScreen.login";
import SplitScreenSignup from "./components/SplitScreen.signup";

import { ProtectedRoutes } from "./protectedRoutes";
function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

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
                                <ProtectedRoutes
                                    isSidebar={isSidebar}
                                    setIsSidebar={setIsSidebar}
                                ></ProtectedRoutes>
                            </>
                        )}
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </UserContextProvider>
    );
}

export default App;