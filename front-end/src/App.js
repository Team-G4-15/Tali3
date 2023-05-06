import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import { UserContextProvider } from "./contexts/UserContextProvider";
import AddBook from "./components/Book.add";
import ADDUser from "./components/User.add";
import AddLoan from "./components/Loan.add";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <UserContextProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/addBook" element={<AddBook />}></Route>
                <Route path="/ADDUser" element={<ADDUser />}></Route>
                <Route path="/AddLoan" element={<AddLoan />}></Route>

              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </UserContextProvider>
  );
}

export default App;
