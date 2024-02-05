import * as React from "react";
import {
  ContainerStyles,
  Drawer,
  DrawerCloseButtonStyles,
  DrawerHeader,
  DrawerOpenButtonStyles,
} from "./styles";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PannelItem from "../panel-item";
import MenuIcon from "@mui/icons-material/Menu";
import BugReportIcon from "@mui/icons-material/BugReport";

interface sidePannelProps {
  open?: boolean;
  handleDrawerClose?: () => void;
  handleDrawerOpen?: () => void;
}

const SidePannel: React.FC<sidePannelProps> = ({
  open,
  handleDrawerClose,
  handleDrawerOpen,
}) => {
  return (
    <Box sx={ContainerStyles}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        {open ? (
          <DrawerHeader>
            <IconButton
              onClick={handleDrawerClose}
              sx={DrawerCloseButtonStyles}
            >
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
        ) : (
          <DrawerHeader>
            <IconButton onClick={handleDrawerOpen} sx={DrawerOpenButtonStyles}>
              <MenuIcon />
            </IconButton>
          </DrawerHeader>
        )}

        <Divider />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100vh"
        >
          <List>
            <PannelItem text="Information" open={open} Icon={BugReportIcon} />
            {/* <PannelItem text="Analytics" open={open} Icon={AutoGraphOutlinedIcon} />
            <PannelItem text="Prenumeration" open={open} Icon={WorkspacePremiumIcon} />
            <PannelItem text="inställningar" open={open} Icon={GroupsIcon} /> */}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SidePannel;
