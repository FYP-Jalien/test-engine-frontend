import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import routes from "./router";
import { theme } from "./theme";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
