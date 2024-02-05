import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import {
  ListItemButtonStyles,
  ListItemIconStyles,
  WrapperStyles,
} from "./styles";

interface Props {
  open?: boolean;
  text: string;
  Icon: React.ComponentType;
}

const PannelItem: React.FC<Props> = ({ text, open, Icon }) => {
  return (
    <ListItem key={text} disablePadding sx={WrapperStyles}>
      <ListItemButton
        sx={{
          ...ListItemButtonStyles,
          justifyContent: open ? "initial" : "center",
        }}
      >
        <ListItemIcon sx={{ ...ListItemIconStyles, mr: open ? 3 : "auto" }}>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default PannelItem;
