import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App.tsx";
import { Layout } from "./components/Layout";
import { ReactBeginnerNotFound } from "./pages/react-beginners/ReactBeginnerNotFound";
import { ReactBeginnersPage } from "./pages/ReactBeginnersPage";
import { ReactBeginnerLayout } from "./pages/ReactBeginnerLayout";
import { Step1 } from "./pages/react-beginners/Step1";
import { Step2 } from "./pages/react-beginners/Step2";
import { Step3 } from "./pages/react-beginners/Step3";
import { Step4 } from "./pages/react-beginners/Step4";
import { Step5 } from "./pages/react-beginners/Step5";
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
          { path: "step-2", Component: Step2 },
          { path: "step-3", Component: Step3 },
          { path: "step-4", Component: Step4 },
          { path: "step-5", Component: Step5 },
          { path: "*", Component: ReactBeginnerNotFound },
        ],
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />);
