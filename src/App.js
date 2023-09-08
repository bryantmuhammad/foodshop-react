import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import DetailProduct, {
  loader as detailLoader,
} from "./pages/products/DetailProduct";
import { deferAllItems } from "./api/product";
import Product from "./pages/products/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: deferAllItems,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <Product />,
            loader: deferAllItems,
          },
          {
            path: ":idProduct",
            element: <DetailProduct />,
            loader: detailLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
