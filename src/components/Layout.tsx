import {
  AppBar,
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, Outlet } from "react-router";
import { deepOrange, lightGreen } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: lightGreen,
    secondary: deepOrange,
  },
});

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="h1">
            <NavLink to="/" style={{ color: "inherit", fontWeight: "bold" }}>
              Курсы по React.js
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3, mt: 7 }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};
