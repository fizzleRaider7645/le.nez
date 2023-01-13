import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./ui/components/Home";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UnderConstructionBanner from "./ui/atoms/UnderConstructionBanner";
import routes from "./const/routes";

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Home />,
  },
  {
    path: routes.ABOUT,
    element: <UnderConstructionBanner />,
  },
  {
    path: routes.CONTACT,
    element: <UnderConstructionBanner />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
