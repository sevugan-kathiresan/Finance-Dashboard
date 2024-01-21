import {ThemeProvider, createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { CssBaseline } from "@mui/material";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {Box} from "@mui/material";

function App() {
  const theme = useMemo(()=>createTheme(themeSettings),[]);
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Routes>
              <Route path="/" element={<div>dashboard</div>}/>
              <Route path="/predictions" element={<div>predictions</div>}/>
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
