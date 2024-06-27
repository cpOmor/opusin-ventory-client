import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { SignIn } from "../pages/SignIn";
import { Home } from "../pages/Home";
import { SignUp } from "../pages/Signup";
import SalesChart from "../components/ui/SalesChart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sells-history",
        element: <SalesChart />,
      },
    ],
  },
]);

export default router;
