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
import { cyan, teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: teal,
    success: cyan,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#24292e",
        },
      },
    },
  },
});

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={1}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="h1">
            <NavLink
              to="/"
              style={{
                color: "#fff",
                fontFamily: `"IBM Plex Sans", sans-serif`,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <img src={"/icon.svg"} width={30} height={30} />
              Hey look ma, I'm a programmer
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
