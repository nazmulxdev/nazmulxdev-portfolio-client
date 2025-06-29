import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import Skill from "../Pages/Skill";
import About from "../Pages/About";
import Education from "../Pages/Education";
import Experience from "../Pages/Experience";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import Loading from "../Utilities/Loading";
import { Suspense } from "react";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/skill",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Skill></Skill>
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <About></About>
          </Suspense>
        ),
      },
      {
        path: "/education",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Education></Education>
          </Suspense>
        ),
      },
      {
        path: "/experience",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Experience></Experience>
          </Suspense>
        ),
      },
      {
        path: "/project",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Project></Project>
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Contact></Contact>
          </Suspense>
        ),
      },
    ],
  },
]);

export default Router;
