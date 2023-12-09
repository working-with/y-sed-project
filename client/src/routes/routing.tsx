import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// layout
const Layout = lazy(() => import("../components/common/Layout"));

// home
const Home = lazy(() => import("../pages/Home"));
const Start = lazy(() => import("../pages/Start"));

// 예시 페이지
const Tri = lazy(() => import("../pages/Tri"));
const Ex01 = lazy(() => import("../pages/Example/01"));
const Ex02 = lazy(() => import("../pages/Example/02"));
const Ex03 = lazy(() => import("../pages/Example/03"));
const Ex04 = lazy(() => import("../pages/Example/04"));
const ExFin = lazy(() => import("../pages/Example/Fin"));

// 퀴즈 페이지
const Begin = lazy(() => import("../pages/Quiz/Begin"));
const Narration = lazy(() => import("../pages/Quiz/Narration"));
const Content = lazy(() => import("../pages/Quiz/Content"));
const So = lazy(() => import("../pages/Quiz/So"));
const Next = lazy(() => import("../pages/Quiz/Next"));

// 마지막 마무리 페이지 및 종료 페이지
const Exit = lazy(() => import("../pages/Exit"));
const Finish = lazy(() => import("../pages/Finish"));

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

      // 예시 페이지
      {
        path: "tri",
        element: <Tri />,
      },
      // gui01 - 03
      {
        path: "/example/1",
        element: <Ex01 />,
      },
      // gui04 - guiShp04
      {
        path: "/example/2",
        element: <Ex02 />,
      },
      // gui05 - 06, 09
      {
        path: "/example/3",
        element: <Ex03 />,
      },
      // guiShp07 - 08, guiShp10 - 11
      {
        path: "/example/4",
        element: <Ex04 />,
      },
      {
        path: "/example/finish",
        element: <ExFin />,
      },

      // 퀴즈 페이지
      {
        path: "/quiz/:experimentId/begin",
        element: <Begin />,
      },
      {
        path: "quiz/:experimentId/narration",
        element: <Narration />,
      },
      {
        path: "quiz/:experimentId/content",
        element: <Content />,
      },
      {
        path: "quiz/:experimentId/so",
        element: <So />,
      },
      {
        path: "quiz/:experimentId/next",
        element: <Next />,
      },

      // 종료 페이지 및 탈출
      {
        path: "finish",
        element: <Finish />,
      },
      {
        path: "exit",
        element: <Exit />,
      },
    ],
  },
]);

export default router;
