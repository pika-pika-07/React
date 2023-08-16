import React from "react";
import ReactDOM from "react-dom/client";
import { SampleData } from "./utils/sampleData.js";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu.js";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restraunt Container
 *      - RestrauntCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {
        // What outlet does behind the scenes
        // It notices the path and loads the component here according to the mapped component for that path
        // Mapping is defined in appRouter
        // so Outlet comnponent will be replaced by the component mapped to tha path
        /**
         * if path ==='/' load Body component
         * if path === '/about' load About Component
         * if path === '/contact' load Contact Cmponent
         */
        /**
         * So the final layout will look like
         * if path  === '/' Outlet will be replaced by Body
            * <Header />
              <Body />
         * if path  === '/'contact Outlet will be replaced by Contact
            * <Header />
            <Contact />
          * if path  === '/about'contact Outlet will be replaced by About
              * <Header />
              <About />
      }
      {/* <Body /> */
      }
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunts/:resId",
        element: <RestrauntMenu />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.querySelector("#root")); // Creating a Root for React

root.render(<RouterProvider router={appRouter} />);
