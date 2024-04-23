import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import Intro from "./pages/Intro";
import Personalization from "./pages/Personalization";
import Progress from "./pages/Progress";

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
      element: <Progress />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
