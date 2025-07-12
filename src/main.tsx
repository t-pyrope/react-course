import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App.tsx";
import { Layout } from "./components/Layout";
import { ReactBeginnerNotFound } from "./pages/react-beginners/ReactBeginnerNotFound";
import { ReactBeginnersPage } from "./pages/ReactBeginnersPage";
import { ReactBeginnerLayout } from "./pages/ReactBeginnerLayout";
import { Chapter1 } from "./pages/react-beginners/Chapter1";
import { Chapter1Step1 } from "./pages/react-beginners/Chapter1Step1";
import { Chapter1Step2 } from "./pages/react-beginners/Chapter1Step2";
import { Chapter1Step3 } from "./pages/react-beginners/Chapter1Step3";
import { Chapter2 } from "./pages/react-beginners/Chapter2";
import { Chapter2Step1 } from "./pages/react-beginners/Chapter2Step1";
import { Chapter2Step2 } from "./pages/react-beginners/Chapter2Step2";
import { Chapter2Step3 } from "./pages/react-beginners/Chapter2Step3";
import { Chapter2Step4 } from "./pages/react-beginners/Chapter2Step4";
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
          {
            path: "chapter-1",
            children: [
              { index: true, Component: Chapter1 },
              { path: "step-1", Component: Chapter1Step1 },
              { path: "step-2", Component: Chapter1Step2 },
              { path: "step-3", Component: Chapter1Step3 },
            ],
          },
          {
            path: "chapter-2",
            children: [
              { index: true, Component: Chapter2 },
              { path: "step-1", Component: Chapter2Step1 },
              { path: "step-2", Component: Chapter2Step2 },
              { path: "step-3", Component: Chapter2Step3 },
              { path: "step-4", Component: Chapter2Step4 },
            ],
          },
          { path: "*", Component: ReactBeginnerNotFound },
        ],
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />);
