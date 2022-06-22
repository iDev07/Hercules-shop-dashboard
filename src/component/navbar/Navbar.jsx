import * as React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { HeaderMain } from "./Header";
import { Category } from "./Category";
import { Switch } from "../helpers/switch/Switch";

import home from "../../assets/navbar/homeIcon.svg";
import about from "../../assets/navbar/aboutIcon.svg";
import service from "../../assets/navbar/serviceIcon.svg";
import contact from "../../assets/navbar/contactIcon.svg";
import siteMaster from "../../assets/navbar/siteMasterIcon.svg";
import logo from "../../assets/logo.png";
import style from "./Navbar.module.css";

const drawerWidth = 240;
function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { t } = useTranslation();

  const map = [
    { id: 1, link: "home", title: t("menu1"), icon: home },
    { id: 2, link: "about", title: t("menu2"), icon: about },
    { id: 3, link: "products", title: t("menu3"), icon: service },
    { id: 4, link: "contact", title: t("menu4"), icon: contact },
    { id: 5, link: "main", title: t("menu5"), icon: contact },
    { id: 6, link: "clients", title: t("menu6"), icon: siteMaster },
    { id: 7, link: "convert", title: t("menu7"), icon: siteMaster },
    { id: 8, link: "siteMaster", title: t("menu8"), icon: siteMaster },
  ];
  const ma2 = map.map((a) => (
    <NavLink
      key={a.id}
      to={a.link}
      style={{ display: "flex" }}
      className={(navData) => (navData.isActive ? "active" : "ListItem")}
    >
      <ListItem button key={a.id} className={style.ListItem}>
        <ListItemIcon>
          <img src={a.icon} alt="" />
        </ListItemIcon>
        <ListItemText primary={a.title} />
      </ListItem>
    </NavLink>
  ));

  const drawer = (
    <div className={style.Wrapper}>
      <img
        className={style.Wrapper__icon}
        src={logo}
        alt="logo rasmi bor edi!"
      />
      <Divider />
      <List className={style.drawer}>{ma2}</List>
      <Switch />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className={style.Block__Wrapper}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={style.Typography_Header}
            noWrap
            component="div"
          >
            <HeaderMain />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          <Category />
        </Typography>
      </Box>
    </Box>
  );
}
Navbar.propTypes = {
  window: PropTypes.func,
};
export default Navbar;
