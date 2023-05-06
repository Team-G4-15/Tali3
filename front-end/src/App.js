import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Members from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import { UserContextProvider } from "./contexts/UserContextProvider";
import AddBook from "./components/Book.Add";
import SplitScreenLogin from "./components/SplitScreen.login";
import SplitScreenSignup from "./components/SplitScreen.signup";
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
                <Route path="/" element={<SplitScreenSignup />} />
                <Route path="/login" element={<SplitScreenLogin />} />
              </Routes>
            ) : (

              <>
                <Sidebar isSidebar={isSidebar} />
                <main className="content">
                  <Topbar setIsSidebar={setIsSidebar} />
                  <Routes>
                    <Route path="/members" element={<Members />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/geography" element={<Geography />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/addBook" element={<AddBook />} />
                  </Routes>
                </main>
              </>
            )}
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </UserContextProvider>
  );
}

export default App;
