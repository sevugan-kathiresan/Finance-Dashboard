import {ThemeProvider, createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { CssBaseline } from "@mui/material";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "@/scenes/navbar/NavBar";
import DashBoard from "@/scenes/dashboard/DashBoard";

function App() {
  // we created the theme by supplying the themesettings object from our theme.ts file to createTheme function which is imported from material UI
  const theme = useMemo(()=>createTheme(themeSettings),[]);
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar/>
            <Routes>
              <Route path="/" element={<DashBoard/>}/>
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
