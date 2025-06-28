import { Link, NavLink, Outlet } from "react-router";
import Footer from "../Component/Footer";
import portfolioLog from "../assets/icon.png";

const Root = () => {
  const closeDrawer = () => {
    document.getElementById("my-drawer-4").checked = false;
  };

  const NavBarLinks = (handleClick) => (
    <>
      <li>
        <NavLink
          className="hover:bg-primary hover:text-primary-content"
          to="/"
          onClick={handleClick}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-primary hover:text-primary-content"
          to="/about"
          onClick={handleClick}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-primary hover:text-primary-content"
          to="/skill"
          onClick={handleClick}
        >
          Skill
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-primary hover:text-primary-content"
          to="/education"
          onClick={handleClick}
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-primary hover:text-primary-content"
          to="/Experience"
          onClick={handleClick}
        >
          Experience
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-primary hover:text-primary-content"
          to="/project"
          onClick={handleClick}
        >
          Project
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-primary hover:text-primary-content"
          to="/contact"
          onClick={handleClick}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Page content */}
      <div className="drawer-content flex flex-col min-h-screen ">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full justify-between xl:px-48 py-3 fixed top-0 z-50 shadow-sm">
          <div className="text-lg font-semibold text-accent flex justify-center items-center gap-2">
            <img
              className="text-accent w-12 md:w-16"
              src={portfolioLog}
              alt=""
            />{" "}
            <Link
              to="/"
              className="text-base-content text-xl md:text-2xl font-bold"
            >
              Nazmul<span className="text-accent">.</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Navbar menu for large screens */}
            <div className="hidden md:block">
              <ul className="menu menu-horizontal px-1 font-bold">
                {NavBarLinks(() => {})}
              </ul>
            </div>

            {/* Hamburger for mobile */}
            <div className="md:hidden">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>

        {/* Page content below navbar */}
        <div className="flex-1 my-22">
          <Outlet />
          <Footer></Footer>
        </div>
      </div>

      {/* Right-side drawer */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="w-64 min-h-full bg-base-200 flex flex-col justify-start items-start px-6 py-8">
          {/* Drawer Title */}
          <div className="text-2xl font-bold text-primary mb-6">
            Nazmul<span className="text-base-content">.</span>
          </div>

          {/* Navigation Links */}
          <ul className="menu space-y-2 w-full text-base-content">
            {NavBarLinks(closeDrawer)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Root;
