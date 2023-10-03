import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./layouts/main";
import PageMenus, {
  loader as loaderMenuList,
  action as actionSearch,
} from "./pages/home";
import PageDetailMenu, { loader as loaderMenuDetail } from "./pages/detail";
import PageAbout from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        loader: loaderMenuList,
        action: actionSearch,
        element: <PageMenus />,
      },
      {
        path: "detail/:id",
        loader: loaderMenuDetail,
        element: <PageDetailMenu />,
      },
      {
        path: "about",
        element: <PageAbout />,
      },
    ],
  },
]);

export default router;
