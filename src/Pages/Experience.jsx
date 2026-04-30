/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaCode,
  FaSearch,
  FaRocket,
  FaLayerGroup,
  FaDocker,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiGo,
  SiNginx,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbBrandAws } from "react-icons/tb";

const Experience = () => {
  const primaryColor = "#00ff94";
  const primaryFaded = `${primaryColor}15`;

  const journeyData = [
    {
      period: "2025 - Present",
      phase: "Phase 3",
      icon: <FaRocket />,
      accentColor: "#a855f7",
      title: "Next Level Web Development",
      org: "Programming Hero — Level 2",
      status: "Completed",
      summary:
        "Industry-standard full-stack engineering with TypeScript, Next.js, PostgreSQL, Prisma, Docker, Nginx, Golang, and AWS. Shipped 2 production-grade projects.",
      highlights: [
        "Built PH Healthcare — a full-stack AI-integrated platform (backend + frontend)",
        "Built PH Tour Management System using Golang backend",
        "Mastered Docker (multi-container apps, volumes, networks, Compose)",
        "Set up Nginx reverse proxy & load balancing in production",
        "Deployed on AWS — EC2, S3, IAM, Linux, CI/CD with GitHub Actions",
        "Wrote unit & integration tests using Jest and Supertest",
        "Completed 9 missions + 7 assignments across 66 modules",
      ],
      techIcons: [
        { icon: <SiTypescript />, color: "#3178c6", label: "TypeScript" },
        { icon: <SiNextdotjs />, color: "#ffffff", label: "Next.js" },
        { icon: <SiPostgresql />, color: "#336791", label: "PostgreSQL" },
        { icon: <SiPrisma />, color: "#a5b4fc", label: "Prisma" },
        { icon: <FaDocker />, color: "#2496ed", label: "Docker" },
        { icon: <SiNginx />, color: "#009900", label: "Nginx" },
        { icon: <SiGo />, color: "#00add8", label: "Golang" },
        { icon: <TbBrandAws />, color: "#ff9900", label: "AWS" },
      ],
    },
    {
      period: "2024 - 2025",
      phase: "Phase 2",
      icon: <FaLayerGroup />,
      accentColor: "#00ff94",
      title: "MERN Stack Development",
      org: "Programming Hero — Level 1",
      status: "Completed",
      summary:
        "500+ hours of intensive full-stack training. Built 12+ production-ready applications covering the complete MERN ecosystem.",
      highlights: [
        "Built 12+ full-stack apps — dashboards, e-commerce, real-time tools",
        "Mastered React component architecture, hooks, and state management",
        "Built REST APIs with Node.js & Express with proper MVC structure",
        "Implemented authentication with Firebase Auth & JWT",
        "Worked with MongoDB & Mongoose for data modeling",
        "Deployed projects on Vercel, Netlify & Firebase Hosting",
      ],
      techIcons: [
        { icon: <SiReact />, color: "#00d8ff", label: "React" },
        { icon: <FaNodeJs />, color: "#68a063", label: "Node.js" },
        { icon: <SiExpress />, color: "#cccccc", label: "Express" },
        { icon: <SiMongodb />, color: "#589636", label: "MongoDB" },
        { icon: <SiFirebase />, color: "#ffca28", label: "Firebase" },
        { icon: <SiJsonwebtokens />, color: "#d63aff", label: "JWT" },
        { icon: <SiTailwindcss />, color: "#38bdf8", label: "Tailwind" },
      ],
    },
    {
      period: "2023 - 2024",
      phase: "Phase 1",
      icon: <FaCode />,
      accentColor: "#38bdf8",
      title: "Self-Taught Foundations",
      org: "Personal Learning",
      status: "Completed",
      summary:
        "Started from zero — built strong foundations in HTML, CSS, and JavaScript through self-paced learning and personal projects.",
      highlights: [
        "Learned HTML5, CSS3, and vanilla JavaScript fundamentals",
        "Built responsive layouts and interactive UI components",
        "Started exploring React and component-based thinking",
        "Practiced problem-solving with JavaScript algorithms",
      ],
      techIcons: [],
    },
  ];

  return (
    <section
      id="experience"
      className="pt-20 pb-8 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ff94]">
            My <span className="text-white">Journey</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 mt-3 mx-auto w-24 rounded-full bg-[#00ff94]"
          />
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            From zero to full-stack — every phase that shaped my skills
          </p>
        </motion.div>

        {/* ── Actively Seeking Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative group"
        >
          <div
            className="p-6 md:p-8 rounded-2xl border text-center relative overflow-hidden"
            style={{
              borderColor: `${primaryColor}40`,
              background: `linear-gradient(135deg, ${primaryColor}08 0%, transparent 60%)`,
            }}
          >
            {/* Animated pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ boxShadow: `inset 0 0 40px ${primaryColor}10` }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `${primaryColor}20`,
                  border: `2px solid ${primaryColor}40`,
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaSearch
                  className="text-2xl"
                  style={{ color: primaryColor }}
                />
              </motion.div>

              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-[#00ff94]"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-xs font-bold text-[#00ff94] uppercase tracking-widest">
                    Open to Work
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Actively Seeking First Opportunity
                </h3>
                <p className="text-gray-400 max-w-2xl">
                  Completed Level 1 & Level 2 at Programming Hero. Ready to
                  contribute to a real team, solve real problems, and grow fast.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Journey Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 origin-top"
            style={{ backgroundColor: `${primaryColor}30` }}
          />

          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-2 top-6">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg relative z-10"
                    style={{
                      backgroundColor: `${item.accentColor}20`,
                      border: `2px solid ${item.accentColor}50`,
                      color: item.accentColor,
                    }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
                  {/* Pulse */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: item.accentColor }}
                    animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm overflow-hidden group"
                  whileHover={{
                    y: -4,
                    borderColor: `${item.accentColor}40`,
                    boxShadow: `0 20px 40px -10px ${item.accentColor}20`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: item.accentColor }}
                  />

                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded"
                            style={{
                              backgroundColor: `${item.accentColor}20`,
                              color: item.accentColor,
                            }}
                          >
                            {item.phase}
                          </span>
                          <span className="text-xs text-gray-500">
                            {item.period}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p
                          className="text-sm font-medium mt-0.5"
                          style={{ color: item.accentColor }}
                        >
                          {item.org}
                        </p>
                      </div>
                      <span
                        className="text-xs font-bold px-3 py-1.5 rounded-full shrink-0"
                        style={{
                          backgroundColor: `${item.accentColor}15`,
                          color: item.accentColor,
                          border: `1px solid ${item.accentColor}30`,
                        }}
                      >
                        ✓ {item.status}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-gray-400 mb-5 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {item.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-300"
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span
                            className="mt-1 shrink-0"
                            style={{ color: item.accentColor }}
                          >
                            ▹
                          </span>
                          {h}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech icons */}
                    {item.techIcons.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                        {item.techIcons.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                            style={{
                              backgroundColor: `${tech.color}12`,
                              color: tech.color,
                              border: `1px solid ${tech.color}25`,
                            }}
                            whileHover={{
                              scale: 1.08,
                              backgroundColor: `${tech.color}22`,
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="text-sm">{tech.icon}</span>
                            {tech.label}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "2+", label: "Years Learning", color: "#00ff94" },
            { value: "12+", label: "Projects Built", color: "#a855f7" },
            { value: "66", label: "Modules Completed", color: "#38bdf8" },
            { value: "500+", label: "Hours of Training", color: "#f59e0b" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-5 rounded-xl border border-gray-800 bg-gray-900/50"
              whileHover={{
                y: -4,
                borderColor: `${stat.color}50`,
                boxShadow: `0 10px 30px -8px ${stat.color}25`,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
