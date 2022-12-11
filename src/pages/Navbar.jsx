import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import React, { useState, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import FeedbackContext from "../context/FeedbackContext";
import InputBase from "@mui/material/InputBase";
import image from "../images/alrehmanLogo.png";
import backgroundImg from "../images/OfficialCover.jpeg";

export default function Navbar({ size }) {
  const { cart, desiredProduct, loginStatus, login } =
    useContext(FeedbackContext);

  const [find, foundText] = useState("");
  const [state, setState] = React.useState({
    left: false,
  });
  const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { name: "ACCESSORIES", path: "/accessories" },
          { name: "AIR FILTER", path: "/air-filter" },
          { name: "BRAKE PADS", path: "/brake-pads" },
          { name: "ENGINE OIL", path: "/engine-oil" },
          { name: "OIL FILTER", path: "/oil-filter" },
          { name: "SPARK PLUG", path: "/spark-plug" },
        ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(text.path)}>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#ffffff",
      },
    },
  });
  const onLogout = () => {
    loginStatus(false);
    navigate("/");
  };

  const handleChange = (e) => {
    foundText(e.target.value);
  };
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div style={{ background: "black" }}>
        <img
          src={image}
          alt=""
          style={{
            width: "117px",
            boxShadow: " 1px 3px 11px red",
            borderRadius: " 59px",
          }}
        />
      </div>
      <Box sx={{ flexGrow: 1, display: "flex" }} theme={darkTheme}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary" enableColorOnDark>
            <Toolbar>
              <div>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      onClick={toggleDrawer(anchor, true)}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>

              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Auto Care
              </Typography> */}
              {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
              />
            </Search> */}
              <input
                type="text"
                className="navbar-search"
                onChange={handleChange}
              />
              <Button
                className="navbar-Icon"
                color="inherit"
                onClick={() => desiredProduct(find)}
              >
                <SearchIcon className="navbar-search-btn" />
              </Button>

              <div className="home-Icon-display">
                <Button
                  className="navbar-Icon"
                  color="inherit"
                  onClick={() => navigate("/")}
                >
                  Home
                </Button>
              </div>
              <div className="navbar-Icon-display">
                <Button
                  className="navbar-Icon"
                  color="inherit"
                  onClick={() => navigate("/cart")}
                >
                  <ShoppingBagIcon />
                  {cart.length}
                </Button>
              </div>
              {login && (
                <div className="logOut-display">
                  <button className="logOut" type="button" onClick={onLogout}>
                    Logout
                  </button>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
    </div>
  );
}
