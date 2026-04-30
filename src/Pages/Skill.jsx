/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import { IoLogoVercel, IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiGit,
  SiRender,
  SiZod,
  SiJsonwebtokens,
  SiFirebase,
  SiRedis,
  SiPostman,
  SiGithub,
  SiNginx,
  SiSocketdotio,
  SiStripe,
  SiCloudinary,
  SiMysql,
  SiDaisyui,
  SiFramer,
  SiVite,
  SiNpm,
  SiAuth0,
  SiReactquery,
  SiAxios,
  SiReacthookform,
  SiRailway,
} from "react-icons/si";

// ─── Data ────────────────────────────────────────────────────────────────────

const coreStack = [
  { icon: <FaReact />, name: "React", color: "#00d8ff" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#68a063" },
  { icon: <FaPython />, name: "Python", color: "#3776ab" },
  { icon: <SiExpress />, name: "Express", color: "#cccccc" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#589636" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
  { icon: <SiPrisma />, name: "Prisma", color: "#a5b4fc" },
  { icon: <FaDocker />, name: "Docker", color: "#2496ed" },
  { icon: <span>🐻</span>, name: "Zustand", color: "#f97316" },
  { icon: <RiTailwindCssFill />, name: "Tailwind", color: "#38bdf8" },
  { icon: <SiGit />, name: "Git", color: "#f05032" },
];

const categories = [
  {
    title: "Frontend",
    accent: "#00d8ff",
    skills: [
      { icon: <SiHtml5 />, name: "HTML5", color: "#e34f26" },
      { icon: <SiCss3 />, name: "CSS3", color: "#1572b6" },
      { icon: <SiJavascript />, name: "JavaScript", color: "#f7df1e" },
      { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" },
      { icon: <FaReact />, name: "React.js", color: "#00d8ff" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
      { icon: <SiReactquery />, name: "TanStack Query", color: "#ff4154" },
      { icon: <SiReacthookform />, name: "React Hook Form", color: "#ec4899" },
      { icon: <SiAxios />, name: "Axios", color: "#5a29e4" },
      { icon: <RiTailwindCssFill />, name: "Tailwind CSS", color: "#38bdf8" },
      { icon: <span>🐻</span>, name: "Zustand", color: "#f97316" },
      { icon: <SiFramer />, name: "Framer Motion", color: "#ff0055" },
      { icon: <SiDaisyui />, name: "DaisyUI", color: "#5ce0d8" },
      { icon: <SiVite />, name: "Vite", color: "#646cff" },
    ],
  },
  {
    title: "Backend",
    accent: "#00ff94",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", color: "#68a063" },
      { icon: <SiExpress />, name: "Express.js", color: "#cccccc" },
      { icon: <FaPython />, name: "Python", color: "#3776ab" },
      { icon: <SiJsonwebtokens />, name: "JWT", color: "#d63aff" },
      { icon: <SiZod />, name: "Zod", color: "#3e67b1" },
      { icon: <span>🔒</span>, name: "Bcrypt", color: "#f59e0b" },
      { icon: <SiStripe />, name: "Stripe", color: "#635bff" },
      { icon: <SiCloudinary />, name: "Cloudinary", color: "#3448c5" },
    ],
  },
  {
    title: "Database & ORM",
    accent: "#f59e0b",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB", color: "#589636" },
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
      { icon: <SiMysql />, name: "MySQL", color: "#4479a1" },
      { icon: <SiPrisma />, name: "Prisma ORM", color: "#a5b4fc" },
      { icon: <SiRedis />, name: "Redis", color: "#ff4438" },
      { icon: <SiFirebase />, name: "Firebase DB", color: "#ffca28" },
      { icon: <FaDatabase />, name: "Raw SQL", color: "#f59e0b" },
    ],
  },
  {
    title: "Auth & Security",
    accent: "#f472b6",
    skills: [
      { icon: <SiJsonwebtokens />, name: "JWT", color: "#d63aff" },
      { icon: <SiFirebase />, name: "Firebase Auth", color: "#ffca28" },
      { icon: <SiAuth0 />, name: "Better Auth", color: "#eb5424" },
      { icon: <SiAuth0 />, name: "NextAuth", color: "#00d8ff" },
    ],
  },
  {
    title: "DevOps, Tools & Cloud",
    accent: "#f87171",
    skills: [
      { icon: <SiGit />, name: "Git", color: "#f05032" },
      { icon: <SiGithub />, name: "GitHub", color: "#ffffff" },
      { icon: <FaDocker />, name: "Docker", color: "#2496ed" },
      { icon: <SiNginx />, name: "Nginx", color: "#009900" },
      { icon: <IoLogoVercel />, name: "Vercel", color: "#ffffff" },
      { icon: <SiRender />, name: "Render", color: "#46e3b7" },
      { icon: <SiPostman />, name: "Postman", color: "#ff6c37" },
      { icon: <SiNpm />, name: "npm", color: "#cb3837" },
      { icon: <SiRailway />, name: "Railway", color: "#0b0d0e" },
    ],
  },
];

// ─── Skill Card ──────────────────────────────────────────────────────────────

const SkillCard = ({ icon, name, color }) => (
  <motion.div
    className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-gray-800 bg-gray-900/50 cursor-default select-none min-h-[80px]"
    whileHover={{
      y: -6,
      scale: 1.07,
      borderColor: `${color}70`,
      backgroundColor: `${color}12`,
      boxShadow: `0 14px 32px -8px ${color}35`,
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <span className="text-2xl md:text-3xl" style={{ color }}>
      {icon}
    </span>
    <span className="text-[10px] md:text-xs font-medium text-center text-gray-400 leading-tight">
      {name}
    </span>
  </motion.div>
);

// ─── Core Pill ───────────────────────────────────────────────────────────────

const CorePill = ({ icon, name, color }) => (
  <motion.div
    className="flex items-center gap-2 px-3 py-2 rounded-full border cursor-default select-none"
    style={{ borderColor: `${color}40`, backgroundColor: `${color}10` }}
    whileHover={{ scale: 1.08, backgroundColor: `${color}25`, y: -3 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <span className="text-lg" style={{ color }}>
      {icon}
    </span>
    <span className="text-xs font-semibold text-gray-300 whitespace-nowrap">
      {name}
    </span>
  </motion.div>
);

// ─── Main Component ──────────────────────────────────────────────────────────

const Skill = () => {
  const primaryColor = "#00ff94";

  return (
    <section id="skills" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ff94]">
            My <span className="text-white">Skills</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 mt-3 mx-auto w-24 rounded-full bg-[#00ff94]"
          />
          <p className="text-gray-400 mt-4 text-lg">
            Technologies I've mastered through hands-on projects
          </p>
        </motion.div>

        {/* Core Stack Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div
            className="rounded-2xl border border-gray-800 p-6 md:p-8"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #111827 100%)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 rounded-full bg-[#00ff94]" />
              <h3 className="text-xl font-bold text-white">Core Stack</h3>
              <span className="text-xs text-gray-500 ml-auto">
                {coreStack.length} technologies
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {coreStack.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <CorePill {...tech} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Categorized Grids */}
        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.07 }}
            >
              {/* Category Label */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1.5 h-6 rounded-full"
                  style={{ backgroundColor: cat.accent }}
                />
                <h3 className="text-base md:text-lg font-semibold text-white">
                  {cat.title}
                </h3>
                <div
                  className="flex-1 h-px ml-2 rounded-full"
                  style={{ backgroundColor: `${cat.accent}25` }}
                />
                <span className="text-xs text-gray-600">
                  {cat.skills.length}
                </span>
              </div>

              {/* Icon Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
            style={{
              backgroundColor: `${primaryColor}10`,
              border: `1px solid ${primaryColor}30`,
            }}
            whileHover={{ backgroundColor: `${primaryColor}20` }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-medium text-[#00ff94]">
              Continuously expanding my skillset
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-[#00ff94]"
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
