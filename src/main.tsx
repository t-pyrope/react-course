import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App.tsx";
import { Layout } from "./components/Layout";
import { ReactBeginnersPage } from "./pages/ReactBeginnersPage.tsx";
import { ReactBeginnerLayout } from "./pages/ReactBeginnerLayout.tsx";
import { Step1 } from "./pages/react-beginners/Step1.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, Component: App },
      {
        path: "react-beginners",
        element: <ReactBeginnerLayout />,
        children: [
          { index: true, Component: ReactBeginnersPage },
          { path: "step-1", Component: Step1 },
        ],
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />);
