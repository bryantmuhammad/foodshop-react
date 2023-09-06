import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import About from "./pages/About";
import Home, { loader as homeLoader } from "./pages/Home";
import Error from "./pages/Error";
import DetailProduct, {
  loader as detailLoader,
} from "./pages/products/DetailProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "products",
        children: [
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
