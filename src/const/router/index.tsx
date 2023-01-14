import { createBrowserRouter } from "react-router-dom";
import Home from "../../ui/components/Home";
import PageNotFound from "../../ui/patterns/PageNotFound";
import UnderConstructionBanner from "../../ui/patterns/UnderConstructionBanner";
import routes from "./routes";

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
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
