import react, { lazy,Suspense } from "react";
import reactDom from "react-dom/client";
import Header from "./containers/Header.js";
import Body from "./containers/Body";
// import About from "./containers/About";
import Error from "./containers/Error";
import Contact from "./containers/Contact.js";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import ResturantMenu from "./containers/ResturantMenu.js";

const About = lazy(() => import("./containers/About"));
const AppLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

const root = reactDom.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading......</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
