import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/common/Layout";

import Home from "../pages/Home";
import Start from "../pages/Start";
import Tri from "../pages/Tri";
import Exit from "../pages/Exit";
import Quiz01 from "../pages/Quiz01";
import Finish from "../pages/Finish";
import Next from "../pages/Next";
import So from "../pages/So";
import Beg from "../pages/Beg";
import Gui01 from "../pages/Gui/01";
import Shp04 from "../pages/Gui/02";
import Shp05 from "../pages/Gui/03";
import Shp07 from "../pages/Gui/04";
import ShpFin from "../pages/Gui/Fin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "start",
        element: <Start />,
      },
      {
        path: "tri",
        element: <Tri />,
      },
      // gui01 - 03
      {
        path: "/gui/1",
        element: <Gui01 />,
      },
      // gui04 - guiShp04
      {
        path: "/gui/2",
        element: <Shp04 />,
      },
      // gui05 - 06, 09
      {
        path: "/gui/3",
        element: <Shp05 />,
      },
      // guiShp07 - 08, guiShp10 - 11
      {
        path: "/gui/4",
        element: <Shp07 />,
      },
      {
        path: "/gui/fin",
        element: <ShpFin />,
      },
      {
        path: "exit",
        element: <Exit />,
      },
      // Quiz list
      {
        path: "quiz01",
        element: <Quiz01 />,
      },
      {
        path: "beg",
        element: <Beg />,
      },
      {
        path: "so",
        element: <So />,
      },
      {
        path: "next",
        element: <Next />,
      },
      {
        path: "finish",
        element: <Finish />,
      },
    ],
  },
]);

export default router;
