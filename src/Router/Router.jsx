import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import Skill from "../Pages/Skill";
import About from "../Pages/About";
import Education from "../Pages/Education";
import Experience from "../Pages/Experience";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/skill",
        Component: Skill,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/education",
        Component: Education,
      },
      {
        path: "/experience",
        Component: Experience,
      },
      {
        path: "/project",
        Component: Project,
      },
      {
        path: "/Contact",
        Component: Contact,
      },
    ],
  },
]);

export default Router;
