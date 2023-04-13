import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Login from "./Routes/Login"

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/dentista/:id",
    element: <Detail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function Routes() {
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default Routes;