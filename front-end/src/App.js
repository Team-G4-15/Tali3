import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// TO BE REMOVED AFTER WORK

// TO BE REMOVED AFTER WORK

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { UserContextProvider } from "./contexts/UserContextProvider";
import SplitScreenLogin from "./components/SplitScreen.login";
import SplitScreenSignup from "./components/SplitScreen.signup";

import { ProtectedRoutes } from "./protectedRoutes";
import { AppHeightContext } from "./contexts/AppHeight";
import { Guide } from "./scenes/UserGuide/Guid";
import LandingPage from "./scenes/LandingPage/LandingPage";
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
                        {pathname === "/login" ||
                        pathname === "/" ||
                        pathname === "/guide" ||
                        pathname === "/landing" ||
                        pathname === "/landing" ? (
                            <Routes>
                                <Route
                                    path="/"
                                    element={<SplitScreenSignup />}
                                />
                                <Route
                                    path="/login"
                                    element={<SplitScreenLogin />}
                                />
                                <Route path="/guide" element={<Guide />} />
                                <Route
                                    path="/landing"
                                    element={<LandingPage />}
                                />
                            </Routes>
                        ) : (
                            <AppHeightContext.Provider
                                value={{ height, setHeight }}
                            >
                                <ProtectedRoutes></ProtectedRoutes>
                            </AppHeightContext.Provider>
                        )}
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </UserContextProvider>
    );
}

export default App;
