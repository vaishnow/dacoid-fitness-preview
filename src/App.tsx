import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import Intro from "./pages/Intro";
import Personalization from "./pages/Personalization";
import Progress from "./pages/Progress";
import ProgressSchedule from "./pages/ProgressSchedule";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Intro />,
    },
    {
      path: "/login",
      element: <Auth />,
    },
    {
      path: "/register",
      element: <Auth isRegister />,
    },
    {
      path: "/personalization",
      element: <Personalization />,
    },
    {
      path: "/progress-tracker",
      children: [
        {
          index: true,
          element: <Progress />,
        },
        {
          path: "schedule",
          element: <ProgressSchedule />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
