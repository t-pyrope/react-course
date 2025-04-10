import {
  AppBar,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { deepOrange, lightGreen } from "@mui/material/colors";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import App from "./App.tsx";
import "./index.css";
import { StructurePage } from "./pages/structure/StructurePage.tsx";

const theme = createTheme({
  palette: {
    primary: lightGreen,
    secondary: deepOrange,
  },
});

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Курсы по React.js
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet /> {/* Здесь будет подставляться контент дочерних роутов */}
    </ThemeProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, Component: App },
      { path: "structure", Component: StructurePage },
      { path: "react-beginners", Component: StructurePage },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />);
