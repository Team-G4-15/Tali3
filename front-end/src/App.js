import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Member from "./scenes/Member";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Cataloging from "./scenes/Cataloging";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import { UserContextProvider } from "./contexts/UserContextProvider";
import AddBook from "./components/Book.add";
import SearchPage from "./scenes/Filtering";
import ResearchPapers from "./scenes/researchpapers";
import AddResearchPaper from "./components/ResearchPaper.add";
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
                <Route path="/Cataloging" element={<Cataloging />} />
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
                <Route path="/researchpapers/add" element={<AddResearchPaper />} />
                <Route path="/Filtering" element={<SearchPage />}></Route>
                <Route path="/Member" element={<Member />}></Route>
                <Route path="/researchpapers" element={<ResearchPapers/>}></Route>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </UserContextProvider>
  );
}

export default App;
