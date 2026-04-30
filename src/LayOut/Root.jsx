import { Link, NavLink, Outlet } from "react-router";
import { FaRegFileCode } from "react-icons/fa";

const Root = () => {
  const closeDrawer = () => {
    document.getElementById("my-drawer-4").checked = false;
  };

  const NavBarLinks = (handleClick) => (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#00ff94] font-bold"
              : "hover:text-[#00ff94] transition-colors"
          }
          to="/"
          onClick={handleClick}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#00ff94] font-bold"
              : "hover:text-[#00ff94] transition-colors"
          }
          to="/about"
          onClick={handleClick}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#00ff94] font-bold"
              : "hover:text-[#00ff94] transition-colors"
          }
          to="/skill"
          onClick={handleClick}
        >
          Skill
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#00ff94] font-bold"
              : "hover:text-[#00ff94] transition-colors"
          }
          to="/education"
          onClick={handleClick}
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#00ff94] font-bold"
              : "hover:text-[#00ff94] transition-colors"
          }
          to="/Experience"
          onClick={handleClick}
        >
          Experience
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#00ff94] font-bold"
              : "hover:text-[#00ff94] transition-colors"
          }
          to="/project"
          onClick={handleClick}
        >
          Project
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#00ff94] font-bold"
              : "hover:text-[#00ff94] transition-colors"
          }
          to="/contact"
          onClick={handleClick}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    /* ✅ portfolio-bg applied ONCE here — all pages inherit it */
    <div className="portfolio-bg drawer drawer-end min-h-screen">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Page content */}
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Navbar — glassmorphism so bg shows through */}
        <div
          className="navbar w-full justify-between xl:px-48 py-3 fixed top-0 z-50 border-b border-[#00ff94]/20 rounded-b-2xl backdrop-blur-md"
          style={{ backgroundColor: "rgba(3, 7, 18, 0.85)" }}
        >
          <div className="text-lg font-semibold flex justify-center items-center gap-1">
            <FaRegFileCode className="text-[#00ff94] text-xl md:text-2xl" />
            <Link to="/" className="text-white text-xl md:text-2xl font-bold">
              Nazmul<span className="text-[#00ff94]">.</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop nav */}
            <div className="hidden md:block">
              <ul className="menu menu-horizontal px-1 font-bold text-gray-300">
                {NavBarLinks(() => {})}
              </ul>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost text-gray-300"
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

        {/* Outlet — no bg set, inherits portfolio-bg from root */}
        <div className="flex-1 pt-16 min-h-[calc(100vh-4rem)]">
          <Outlet />
        </div>
      </div>

      {/* Right-side drawer */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div
          className="w-64 min-h-full flex flex-col justify-start items-start px-6 py-8 border-l border-[#00ff94]/10"
          style={{ backgroundColor: "rgba(3, 7, 18, 0.97)" }}
        >
          <div className="text-2xl font-bold text-[#00ff94] mb-6">
            Nazmul<span className="text-white">.</span>
          </div>
          <ul className="menu space-y-2 w-full text-gray-300 font-semibold">
            {NavBarLinks(closeDrawer)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Root;
