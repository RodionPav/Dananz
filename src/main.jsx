import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./page/Error/Error.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
