import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";
import { StructurePage } from "./pages/structure/StructurePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: App },
      { path: "structure", Component: StructurePage },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />);
