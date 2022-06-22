import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import style from "./Dropdown.module.css";

export default function DropdownJSX() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Tooltip title="Username">
        <IconButton>
          <Avatar
            className={style.dropdown__avatar}
            sx={{ width: 32, height: 32 }}
          >
            C
          </Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
}
