import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import routes from "./router";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
        <ToastContainer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
