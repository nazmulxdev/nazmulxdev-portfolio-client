/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiServer } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const primaryColor = "#00ff94";
const secondaryColor = "#00d1ff";

// ── Projects Data ─────────────────────────────────────────────────────────────

const projects = [
  {
    name: "EcoSpark Hub",
    tagline: "Where eco-conscious ideas meet community action.",
    description:
      "EcoSpark Hub is a full-stack sustainability community platform that empowers individuals to share, discover, and act on eco-friendly ideas. The platform delivers a complete social ecosystem — from a rich idea-sharing engine with nested comment threads and a democratic voting system, to a premium content marketplace, a multi-stage admin moderation workflow, and Stripe-powered membership tiers. Built with a performance-first mindset, the UI leverages skeleton loading, micro-animations, and a responsive dark/light theme system for a polished, production-grade experience.",
    role: "Full-Stack Developer (Solo)",
    type: "Full-Stack Web Application",
    status: "Live",
    technologies: {
      frontend: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "ShadCN UI",
        "Framer Motion",
        "next-themes",
        "Zod",
        "Sonner",
        "date-fns",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Better Auth",
        "Stripe",
        "Cloudinary",
        "Zod",
      ],
    },
    features: [
      "Role-Based Access Control (USER / MEMBER / ADMIN) with protected dashboards and server actions",
      "Idea lifecycle management: Draft → Under Review → Approved / Rejected",
      "Community voting system (upvote / downvote) with real-time tally tracking",
      "Nested comment threads with full CRUD support",
      "Personal watchlist for saving and revisiting ideas",
      "Premium content marketplace with one-time Stripe purchases and 'Pay Later' flow",
      "Membership subscription system with Stripe webhook-driven status updates",
      "Admin panel: user management, role assignment, category control, idea moderation, blog management",
      "Member dashboard: idea creation, draft management, purchase history",
      "Image uploads via Cloudinary with Zod-validated form handling",
      "Pagination, filtering, and full-text search across ideas and blogs",
      "Skeleton loading states, Framer Motion micro-animations, and seamless dark/light theme switching",
    ],
    challenges: [
      {
        title: "Granular Role-Based Access Control",
        detail:
          "Architected a three-tier RBAC system (USER, MEMBER, ADMIN) using Better Auth, integrating it with Next.js middleware and server actions to enforce route protection and resource-level authorization across the entire platform.",
      },
      {
        title: "Complex Stripe Payment Infrastructure",
        detail:
          "Engineered a dual payment model supporting both one-time premium idea purchases and recurring membership subscriptions. Implemented a 'Pay Later' deferred checkout flow and robust Stripe webhook handling to reliably transition payment states from UNPAID → PENDING → PAID.",
      },
      {
        title: "Scalable Relational Database Design",
        detail:
          "Designed a normalized PostgreSQL schema with Prisma ORM to efficiently handle complex relational data — including self-referencing nested comment threads, per-user vote tracking, idea purchase records, and watchlist associations — while maintaining query performance at scale.",
      },
      {
        title: "Multi-Stage Content Moderation Workflow",
        detail:
          "Built a structured idea lifecycle (Draft → Under Review → Approved / Rejected) with dedicated admin tooling for review, rejection feedback, and category management, giving moderators full visibility and control over platform content quality.",
      },
      {
        title: "Optimized Frontend Performance & UX",
        detail:
          "Delivered a high-quality user experience by implementing skeleton loading states for async data, orchestrated entrance animations with Framer Motion, and a flicker-free dark/light theme architecture using next-themes — all while maintaining strong Core Web Vitals on Next.js 15's App Router.",
      },
    ],
    architecture: {
      Frontend:
        "Next.js 16 App Router (SSR + Server Actions), TypeScript, Tailwind CSS v4, ShadCN UI, deployed on Vercel",
      Backend: "Node.js / Express REST API with TypeScript, deployed on Vercel",
      Database: "PostgreSQL managed via Prisma ORM",
      Auth: "Better Auth (session-based, role-aware)",
      Payments: "Stripe Checkout with webhook event processing",
      Storage: "Cloudinary for image asset management",
    },
    apiHighlights: [
      "RESTful API with consistent { success, statusCode, message, data } response envelope",
      "Modular Express router structure across 10+ feature domains",
      "Middleware-level authentication and role enforcement",
      "Stripe webhook endpoint with signature verification",
      "Cloudinary multipart upload integration with server-side validation",
    ],
    liveLink: "https://ecospark-hub.vercel.app/",
    githubLink: "https://github.com/nazmulxdev/EcoSpark-Hub-Frontend-",
    serverLink: "https://github.com/nazmulxdev/EcoSpark-Hub",
    images: [
      "https://to7bony5dw.ufs.sh/f/E548yy77yPWxq7JRp1oNFaOjrMuvEAUyJ8egTsdGwzVXtLHi",
      "https://to7bony5dw.ufs.sh/f/E548yy77yPWxy6XRXHioiDk3AFWm2lhKINUdePQqCMBY6091",
      "https://to7bony5dw.ufs.sh/f/E548yy77yPWxCVAsMWJYwGmls7xbHXAU1nSiacovghtDPIFQ",
      "https://to7bony5dw.ufs.sh/f/E548yy77yPWxOXzoHatKg18dq6GI7kUnmDQMTb4YfcFhBLXw",
      "https://to7bony5dw.ufs.sh/f/E548yy77yPWxCImpK6YwGmls7xbHXAU1nSiacovghtDPIFQZ",
    ],
  },
  {
    name: "SkillBridge",
    tagline: "Connect with expert tutors. Learn anything, your way.",
    description:
      "SkillBridge is a full-stack tutoring marketplace that bridges the gap between students seeking knowledge and expert tutors offering it. The platform delivers a complete end-to-end learning ecosystem — from tutor discovery and profile browsing, to availability-based session booking, structured review systems, and role-specific dashboards. Built with a type-safe stack from database to UI, every layer is designed for reliability, security, and a polished user experience.",
    role: "Full-Stack Developer (Solo)",
    type: "Full-Stack Web Application",
    status: "Live",
    technologies: {
      frontend: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "ShadCN UI",
        "Framer Motion",
        "TanStack React Form",
        "Better Auth",
        "Zod",
        "Sonner",
        "Lucide React",
        "next-themes",
      ],
      backend: [
        "Node.js",
        "Express v5",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Better Auth",
        "Zod",
      ],
    },
    features: [
      "Role-Based Access Control (STUDENT / TUTOR / ADMIN) with middleware-enforced route protection",
      "Public tutor discovery: browse all tutors, view featured tutors, and explore detailed tutor profiles",
      "Tutor profile management: hourly rate, subjects, education history, availability schedules, and time slots",
      "Availability & time slot system: tutors define weekly schedules, students book specific slots",
      "Booking lifecycle: students create bookings → tutors confirm/complete → students can cancel",
      "Post-session review system: students leave reviews on completed bookings",
      "Admin panel: user management, status control, tutor featuring, booking oversight, category management",
      "Category & subject taxonomy: admin-managed categories with tutor-assigned subjects",
      "Role-aware dashboards: Student (bookings, profile), Tutor (sessions, availability, profile), Admin (users, bookings, categories)",
      "Dark / Light mode with seamless theme switching via next-themes",
      "Animated UI transitions with Framer Motion and toast notifications via Sonner",
      "Zod-validated forms with TanStack React Form for type-safe, error-resilient input handling",
    ],
    challenges: [
      {
        title: "Availability & Time Slot Scheduling System",
        detail:
          "Designed a two-layer scheduling model where tutors define recurring weekly availability windows and then create specific time slots within those windows. Student bookings lock individual slots, preventing double-booking while keeping the tutor's schedule flexible and independently manageable.",
      },
      {
        title: "Role-Based Access Control Across Three Tiers",
        detail:
          "Implemented a three-tier RBAC system (STUDENT, TUTOR, ADMIN) using Better Auth on both frontend and backend. Custom authMiddleware enforces role-specific access on every protected API route, while Next.js middleware guards dashboard pages client-side — ensuring no unauthorized access at either layer.",
      },
      {
        title: "Booking State Machine",
        detail:
          "Engineered a strict booking lifecycle (CONFIRMED → COMPLETED / CANCELLED) where state transitions are role-gated: only tutors can mark sessions complete, only students can cancel, and admins have full read visibility. Invalid state transitions are rejected at the API level.",
      },
      {
        title: "Tutor Profile Composition",
        detail:
          "Built a multi-resource tutor profile system where subjects, education records, availabilities, and time slots are each independently managed via dedicated CRUD endpoints — all relational and consistently synchronized through Prisma's transaction-safe query model.",
      },
      {
        title: "Type-Safe Full-Stack Architecture",
        detail:
          "Maintained end-to-end type safety by combining Prisma-generated types on the backend with shared Zod schemas validated by TanStack React Form on the frontend, eliminating an entire class of runtime data shape errors across the client-server boundary.",
      },
    ],
    architecture: {
      Frontend:
        "Next.js 16 App Router with server components and middleware, deployed on Vercel",
      Backend:
        "Node.js / Express v5 REST API with TypeScript, deployed on Vercel",
      Database: "PostgreSQL managed via Prisma ORM",
      Auth: "Better Auth (session-based, role-aware) on both client and server",
      Scheduling:
        "Two-layer model: Availability windows + Time Slots with booking locks",
      Validation:
        "Zod schemas shared across API middleware and React form layer",
    },
    apiHighlights: [
      "Modular router structure across 6 domains: admin, student, tutor, public, categories, subjects",
      "authMiddleware('ROLE') pattern for declarative, per-route access enforcement",
      "Two-layer scheduling API: /availabilities for windows, /time-slot for bookable units",
      "Booking state transitions are role-gated at the controller level — no client trust",
      "Zod validation middleware on all mutation endpoints before any business logic executes",
    ],
    liveLink: "https://skill-bridge-frontend-v3.vercel.app/",
    githubLink: "https://github.com/nazmulxdev/Skill-Bridge-Frontend-",
    serverLink: "https://github.com/nazmulxdev/Skill-Bridge-server-",
    images: [
      "https://ovp1mr8zjn.ufs.sh/f/3bJxCl7VFBTK1XdLO9Adcz2goja4pZ5Qk7tOqveNMGiDAsFy",
      "https://ovp1mr8zjn.ufs.sh/f/3bJxCl7VFBTKgDrE0tuvbY3Qw4Wu1yP5qfkO6ljxrJpFzm2D",
      "https://ovp1mr8zjn.ufs.sh/f/3bJxCl7VFBTKYQ0FlMhwmuN42kHlK98BIgxTOhYGs3oRFcje",
      "https://ovp1mr8zjn.ufs.sh/f/3bJxCl7VFBTK3ox6hiVFBTKCYJeIEi0kNOMLy9tVb4sngHhd",
      "https://ovp1mr8zjn.ufs.sh/f/3bJxCl7VFBTKi5MuXqsKEbYh9zydWljmTGns1fOMPVXF8eQ3",
      "https://ovp1mr8zjn.ufs.sh/f/3bJxCl7VFBTKmcboJjGbZ8kzIM0UdDxfRq9N6rlhTJgi4KWw",
    ],
  },
  {
    name: "Building Management",
    tagline: "Smart operations for modern residential communities.",
    description:
      "A robust, full-stack building management platform that streamlines residential operations — from apartment listings and tenant agreements to a coupon-enabled payment system, real-time announcements, and role-specific dashboards. Designed for scalability and ease of use, the system gives admins full operational control while providing tenants a seamless self-service experience.",
    role: "Full-Stack Developer (Solo)",
    type: "Full-Stack Web Application",
    status: "Live",
    technologies: {
      frontend: [
        "React",
        "Tailwind CSS",
        "Firebase Auth",
        "Leaflet",
        "React Router",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Stripe",
        "Cloudinary",
      ],
    },
    features: [
      "Role-Based Access Control — User, Member & Admin tiers with protected routes",
      "Apartment listing browser with location map via Leaflet integration",
      "Agreement system: tenants apply for units, admins approve or reject requests",
      "Stripe-powered rent payment with coupon-based percentage discount support",
      "Admin coupon management: create, activate, deactivate, and delete coupons",
      "Platform-wide announcement system managed by admin, visible to all members",
      "Email/password and Google OAuth authentication via Firebase",
      "JWT-secured API with role-aware middleware on all protected endpoints",
      "Admin dashboard: occupancy stats, member count, payment analytics",
      "Member dashboard: payment history, agreement status, announcement feed",
      "Cloudinary image upload for apartment listings",
    ],
    challenges: [
      {
        title: "Role-Based Access Control Across Three Tiers",
        detail:
          "Implemented a three-tier RBAC model (User, Member, Admin) using Firebase Auth on the frontend and JWT middleware on the backend, ensuring each role sees only the routes, UI, and data they are authorized to access.",
      },
      {
        title: "Stripe Payment with Coupon Discount Logic",
        detail:
          "Engineered a Stripe checkout flow with server-side coupon validation that applies percentage-based discounts before creating a payment intent, preventing client-side manipulation while keeping the UX instant and smooth.",
      },
      {
        title: "Agreement Lifecycle Management",
        detail:
          "Built a full agreement workflow where users request units, admins approve or reject, and the apartment status updates accordingly — preventing double-booking and keeping occupancy data consistent across the platform.",
      },
      {
        title: "Dual Authentication Strategy",
        detail:
          "Integrated both email/password and Google OAuth via Firebase Auth, with each login path issuing a server-side JWT for stateless API authorization, ensuring a unified session model regardless of the sign-in method.",
      },
      {
        title: "Interactive Map with Leaflet",
        detail:
          "Embedded Leaflet maps into apartment listing pages to provide tenants with precise building location context, handling dynamic marker rendering and tile layer configuration within React's component lifecycle.",
      },
    ],
    architecture: {
      Frontend: "React SPA with React Router, deployed on Firebase Hosting",
      Backend: "Node.js / Express REST API, deployed on Vercel",
      Database: "MongoDB with Mongoose ODM",
      Auth: "Firebase Auth (Email + Google OAuth) + JWT for API security",
      Payments: "Stripe Payment Intents with server-side coupon validation",
      Storage: "Cloudinary for apartment listing images",
    },
    apiHighlights: [
      "JWT middleware enforcing role-based access on all protected routes",
      "Apartment CRUD with availability status sync on agreement approval",
      "Coupon system: create/toggle active state, validate & apply on checkout",
      "Announcement broadcast endpoint consumed by all member dashboards",
      "Payment record persistence with history retrieval per member",
    ],
    liveLink: "https://my-house-6de15.web.app/",
    githubLink:
      "https://github.com/nazmulxdev/Building-Management-system-Client?tab=readme-ov-file",
    serverLink:
      "https://github.com/nazmulxdev/Building-Management-system-Server",
    images: [
      "https://oo4bwvadds.ufs.sh/f/iO8PeJ3JYfqnRq01McFA7C1xJNqTk2rynZEHUdcQWsOpYfBe",
      "https://oo4bwvadds.ufs.sh/f/iO8PeJ3JYfqnRedjHoFA7C1xJNqTk2rynZEHUdcQWsOpYfBe",
      "https://oo4bwvadds.ufs.sh/f/iO8PeJ3JYfqnFKsWqIaOXEfvpIL2Mcr1TJUNO0GoqAkW8mj7",
      "https://oo4bwvadds.ufs.sh/f/iO8PeJ3JYfqnQ8D7YPCcuTBZYrI5aXULiNfQPsewJhzyOxM8",
      "https://oo4bwvadds.ufs.sh/f/iO8PeJ3JYfqng4OTJw1cdtJqPIQlaRB6S3gmHjpYziZ7rf2A",
      "https://oo4bwvadds.ufs.sh/f/iO8PeJ3JYfqngyRj5B1cdtJqPIQlaRB6S3gmHjpYziZ7rf2A",
      "https://oo4bwvadds.ufs.sh/f/iO8PeJ3JYfqnxEWITkQj7uUyOnoPLS6BQ5fCbkEwTNl3aZ8d",
      "https://oo4bwvadds.ufs.sh/f/iO8PeJ3JYfqnha2Zi6B7JpARFPk5ciLv2ObWHGC4ednoml3r",
    ],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const isRichTech = (tech) =>
  tech && !Array.isArray(tech) && typeof tech === "object";

// ── Sub-components ────────────────────────────────────────────────────────────

const TechBadge = ({ label, color }) => (
  <motion.span
    className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium cursor-default"
    style={{
      backgroundColor: `${color}15`,
      color: color,
      border: `1px solid ${color}30`,
    }}
    whileHover={{ scale: 1.06, backgroundColor: `${color}25` }}
  >
    {label}
  </motion.span>
);

const SectionLabel = ({ color, children }) => (
  <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
    <span
      className="w-1.5 h-5 rounded-full inline-block shrink-0"
      style={{ backgroundColor: color }}
    />
    {children}
  </h4>
);

// ── Detail Panel ──────────────────────────────────────────────────────────────

const TABS = ["Overview", "Features", "Challenges", "Architecture"];

const DetailPanel = ({ project }) => {
  const [tab, setTab] = useState("Overview");
  const rich = isRichTech(project.technologies);

  return (
    <div className="space-y-5 h-full">
      {/* Meta + Title */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          {project.status && (
            <span
              className="text-xs font-bold px-2.5 py-0.5 rounded-full"
              style={{
                backgroundColor: `${primaryColor}20`,
                color: primaryColor,
              }}
            >
              ● {project.status}
            </span>
          )}
          {project.type && (
            <span className="text-xs text-gray-500 font-medium">
              {project.type}
            </span>
          )}
          {project.role && (
            <span className="text-xs text-gray-500 font-medium">
              · {project.role}
            </span>
          )}
        </div>
        <h3
          className="text-2xl sm:text-3xl font-bold leading-tight"
          style={{ color: primaryColor }}
        >
          {project.name}
        </h3>
        {project.tagline && (
          <p
            className="text-sm mt-1 font-medium"
            style={{ color: secondaryColor }}
          >
            {project.tagline}
          </p>
        )}
      </div>

      {/* Tab Bar */}
      <div className="flex gap-1 bg-gray-900 border border-gray-800 rounded-xl p-1 w-fit flex-wrap">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: tab === t ? primaryColor : "transparent",
              color: tab === t ? "#030712" : "#6b7280",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-5"
        >
          {/* ── Overview ── */}
          {tab === "Overview" && (
            <>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>

              {/* Technologies */}
              {rich ? (
                <div className="space-y-4">
                  <div>
                    <SectionLabel color={primaryColor}>Frontend</SectionLabel>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.frontend.map((tech, i) => (
                        <TechBadge key={i} label={tech} color={primaryColor} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <SectionLabel color={secondaryColor}>Backend</SectionLabel>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.backend.map((tech, i) => (
                        <TechBadge
                          key={i}
                          label={tech}
                          color={secondaryColor}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <SectionLabel color={primaryColor}>
                    Technologies Used
                  </SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <TechBadge key={i} label={tech} color={primaryColor} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* ── Features ── */}
          {tab === "Features" && (
            <div>
              <SectionLabel color={primaryColor}>Key Features</SectionLabel>
              <ul className="space-y-2.5">
                {project.features?.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-gray-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ x: 4, color: "#d1d5db" }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: primaryColor }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* ── Challenges ── */}
          {tab === "Challenges" && (
            <div>
              <SectionLabel color={secondaryColor}>
                Challenges & Solutions
              </SectionLabel>
              <div className="space-y-3">
                {project.challenges?.map((challenge, i) => (
                  <motion.div
                    key={i}
                    className="rounded-xl p-4 border"
                    style={{
                      backgroundColor: `${secondaryColor}08`,
                      borderColor: `${secondaryColor}20`,
                    }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    {typeof challenge === "object" ? (
                      <>
                        <p
                          className="text-sm font-bold mb-1"
                          style={{ color: secondaryColor }}
                        >
                          {challenge.title}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                          {challenge.detail}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-gray-400">{challenge}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── Architecture ── */}
          {tab === "Architecture" && (
            <div className="space-y-4">
              {project.architecture && (
                <div>
                  <SectionLabel color={primaryColor}>
                    System Architecture
                  </SectionLabel>
                  <div className="space-y-2">
                    {Object.entries(project.architecture).map(
                      ([key, val], i) => (
                        <motion.div
                          key={i}
                          className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm rounded-lg px-3 py-2.5"
                          style={{ backgroundColor: `${primaryColor}08` }}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                        >
                          <span
                            className="font-bold shrink-0 w-20"
                            style={{ color: primaryColor }}
                          >
                            {key}
                          </span>
                          <span className="text-gray-400">{val}</span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {project.apiHighlights && (
                <div>
                  <SectionLabel color={secondaryColor}>
                    API Highlights
                  </SectionLabel>
                  <ul className="space-y-2">
                    {project.apiHighlights.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-gray-400"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        whileHover={{ x: 4, color: "#d1d5db" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: secondaryColor }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────

const Project = () => {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <section
      id="projects"
      className="w-full pt-16 pb-8 bg-gray-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: primaryColor }}
          >
            My Projects
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 mt-3 mx-auto w-24 rounded-full"
            style={{ backgroundColor: primaryColor }}
          />
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Featured projects with detailed case studies
          </p>
        </motion.div>

        {/* Project Tabs */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="flex flex-wrap justify-center gap-2 bg-gray-900/80 border border-gray-800 rounded-2xl p-2">
            {projects.map((p, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300"
                style={{
                  backgroundColor:
                    activeProject === index ? primaryColor : "transparent",
                  color: activeProject === index ? "#030712" : "#9ca3af",
                }}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Content */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 items-start"
        >
          {/* Image Slider */}
          <div className="w-full rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <Swiper
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              className="w-full aspect-video"
            >
              {project.images.map((image, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-full bg-gray-800">
                    <img
                      src={image}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Link Buttons */}
            <div className="flex flex-wrap gap-3 p-4 bg-gray-900/80 border-t border-gray-800">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
                style={{ backgroundColor: primaryColor, color: "#030712" }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FiExternalLink size={16} />
                Live Demo
              </motion.a>

              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border"
                style={{ borderColor: primaryColor, color: primaryColor }}
                whileHover={{
                  backgroundColor: `${primaryColor}12`,
                  scale: 1.04,
                }}
                whileTap={{ scale: 0.96 }}
              >
                <FiGithub size={16} />
                Client Code
              </motion.a>

              {project.serverLink && (
                <motion.a
                  href={project.serverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border"
                  style={{ borderColor: secondaryColor, color: secondaryColor }}
                  whileHover={{
                    backgroundColor: `${secondaryColor}12`,
                    scale: 1.04,
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <FiServer size={16} />
                  Server Code
                </motion.a>
              )}
            </div>
          </div>

          {/* Detail Panel */}
          <DetailPanel project={project} />
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
