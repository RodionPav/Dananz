import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./page/Error/Error.jsx";

// const intros = [
//   {
//     title: "About",
//     text: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     img: "/img/about-intro.png",
//   },
// ];

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
