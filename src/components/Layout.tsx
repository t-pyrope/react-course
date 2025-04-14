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
import { grey, lime } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: grey,
    secondary: {
      main: lime["500"],
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {},
    },
  },
});

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" elevation={1}>
        <Toolbar>
          <Typography variant="h6" noWrap component="h1">
            <NavLink
              to="/"
              style={{
                color: "inherit",
                fontFamily: `"IBM Plex Sans", sans-serif`,
                fontWeight: 600,
              }}
            >
              Курсы "Hey look ma, I'm a programmer"
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
