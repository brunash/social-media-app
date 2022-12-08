import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import navBar from "./components/navbar/navBar";
import rightBar from "./components/rightBar/rightBar";
import leftBar from "./components/leftBar/leftBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {

  const Layout = () => {
    return (
      <div>
        <navBar />
        <div style={{ display: "flex" }}>
          <leftBar />
          <Outlet />
          <rightBar />
        </div>
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
