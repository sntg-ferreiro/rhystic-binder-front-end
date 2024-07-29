import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from './pages/Root';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },//index: true === path: ''
      //{ path: "products", element: <Products /> },
      //{ path: "products/:productid", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
