import { useState } from "react";
import {
  Drawer,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Hidden,
  Link,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const list = (anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link component={RouterLink} to="settings">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={["lg", "xl"]}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", flexGrow: 1 }}
            >
              Movies recommendation
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Button
              component={RouterLink}
              to="settings"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Settings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
