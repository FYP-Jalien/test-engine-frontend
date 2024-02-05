import { useState } from "react";
import Box from "@mui/material/Box";
import SidePannel from "../components/side-panel";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
      alignItems="start"
    >
      <SidePannel
        open={openDrawer}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
