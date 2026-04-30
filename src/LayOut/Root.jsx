/* eslint-disable no-unused-vars */
import { Link, NavLink, Outlet } from "react-router";
import { FaRegFileCode } from "react-icons/fa";
import {
  HiHome,
  HiUser,
  HiLightningBolt,
  HiAcademicCap,
  HiBriefcase,
  HiCollection,
  HiMail,
} from "react-icons/hi";
import AnimatedBackground from "../Utilities/Animatedbackground";

const navLinks = [
  { to: "/", label: "Home", Icon: HiHome },
  { to: "/about", label: "About", Icon: HiUser },
  { to: "/skill", label: "Skills", Icon: HiLightningBolt },
  { to: "/education", label: "Education", Icon: HiAcademicCap },
  { to: "/experience", label: "Experience", Icon: HiBriefcase },
  { to: "/project", label: "Projects", Icon: HiCollection },
  { to: "/contact", label: "Contact", Icon: HiMail },
];

/* ── Isolated component so Icon prop stays in its own closure ──
   This fixes the "Icon is not defined" bug that occurs when using
   the NavLink render-prop pattern inside a .map() callback.       */
const BottomTabItem = ({ to, label, Icon }) => (
  <NavLink
    to={to}
    end={to === "/"}
    className={({ isActive }) =>
      `flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all duration-200 min-w-[40px] ${
        isActive ? "text-[#00ff94]" : "text-gray-500 hover:text-gray-300"
      }`
    }
  >
    {({ isActive }) => (
      <>
        <span
          className={`relative flex items-center justify-center w-9 h-7 rounded-xl transition-all duration-200 ${
            isActive
              ? "bg-[#00ff94]/15 shadow-[0_0_12px_rgba(0,255,148,0.25)]"
              : ""
          }`}
        >
          <Icon
            className={`text-[18px] transition-all duration-200 ${
              isActive ? "scale-110" : ""
            }`}
          />
          {isActive && (
            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00ff94]" />
          )}
        </span>
        <span
          className={`text-[9px] font-semibold tracking-wide transition-all duration-200 ${
            isActive ? "opacity-100" : "opacity-50"
          }`}
        >
          {label}
        </span>
      </>
    )}
  </NavLink>
);

const Root = () => {
  return (
    <div className="relative min-h-screen bg-[#030712]">
      {/* ── Animated canvas background ── */}
      <AnimatedBackground />

      {/* ── All page UI ── */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ════════════════════════════════
            DESKTOP NAVBAR  (md and above)
        ════════════════════════════════ */}
        <nav
          className="
            hidden md:flex
            w-full items-center justify-between
            xl:px-48 px-8 py-3
            fixed top-0 z-50
            border-b border-[#00ff94]/20
            rounded-b-2xl
            backdrop-blur-xl
            shadow-[0_1px_30px_rgba(0,255,148,0.07)]
          "
          style={{ backgroundColor: "rgba(3,7,18,0.75)" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FaRegFileCode className="text-[#00ff94] text-2xl" />
            <Link
              to="/"
              className="text-white text-xl font-bold tracking-tight"
            >
              Nazmul<span className="text-[#00ff94]">.</span>
            </Link>
          </div>

          {/* Desktop links */}
          <ul className="flex items-center gap-1 font-medium">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                      isActive
                        ? "text-[#00ff94] bg-[#00ff94]/10 font-semibold"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ════════════════════════════════
            MOBILE TOP BAR  (below md)
        ════════════════════════════════ */}
        <header
          className="
            md:hidden
            fixed top-0 left-0 right-0 z-50
            flex items-center justify-between
            px-5 py-3
            border-b border-[#00ff94]/15
            rounded-b-2xl
            backdrop-blur-xl
            shadow-[0_1px_20px_rgba(0,255,148,0.06)]
          "
          style={{ backgroundColor: "rgba(3,7,18,0.85)" }}
        >
          <div className="flex items-center gap-2">
            <FaRegFileCode className="text-[#00ff94] text-xl" />
            <Link
              to="/"
              className="text-white text-lg font-bold tracking-tight"
            >
              Nazmul<span className="text-[#00ff94]">.</span>
            </Link>
          </div>

          {/* Status pill */}
          <span className="flex items-center gap-1.5 text-[10px] font-semibold text-[#00ff94]/80 bg-[#00ff94]/8 border border-[#00ff94]/20 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff94] animate-pulse" />
            Available
          </span>
        </header>

        {/* ── Page content ── */}
        <main className="flex-1 pt-14 md:pt-16 pb-20 md:pb-0">
          <Outlet />
        </main>

        {/* ════════════════════════════════
            MOBILE BOTTOM TAB BAR (below md)
        ════════════════════════════════ */}
        <nav
          className="
            md:hidden
            fixed bottom-0 left-0 right-0 z-50
            flex items-center justify-around
            px-2 pt-2 pb-[env(safe-area-inset-bottom,8px)]
            border-t border-[#00ff94]/15
            rounded-t-2xl
            backdrop-blur-2xl
            shadow-[0_-1px_30px_rgba(0,255,148,0.08)]
          "
          style={{ backgroundColor: "rgba(3,7,18,0.92)" }}
        >
          {navLinks.map((link) => (
            <BottomTabItem key={link.to} {...link} />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Root;
