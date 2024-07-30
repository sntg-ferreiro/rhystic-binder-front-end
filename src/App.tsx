import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from './pages/Root';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import Binder from './pages/Binder';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },//index: true === path: ''
      { path: "login", element: <Login /> },
      { path: "signup", element: <SingUp /> },
      { path: "user/:userid/profile", element: <Profile /> },
      { path: "user/:userId/binder", element: <Binder /> },
      { path: "user/:userid/offers", element: <Offers /> },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
