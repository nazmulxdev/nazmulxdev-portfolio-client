/* eslint-disable no-unused-vars */
import profilePic from "../assets/new-pic-for-profle.jpg";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDocker,
  FaGitAlt,
  FaUniversity,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiJsonwebtokens,
  SiStripe,
  SiCloudinary,
  SiFramer,
  SiVite,
  SiNginx,
  SiPostman,
  SiZod,
  SiReactquery,
  SiReacthookform,
  SiAxios,
  SiDaisyui,
  SiMysql,
  SiRedis,
  SiAuth0,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";

const glass = {
  backgroundColor: "rgba(3,7,18,0.65)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.06)",
};

const glassGreen = {
  backgroundColor: "rgba(3,7,18,0.65)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(0,255,148,0.12)",
  background:
    "linear-gradient(135deg, rgba(0,255,148,0.06) 0%, rgba(3,7,18,0.65) 60%)",
};

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/nazmulxdev",
    label: "GitHub",
    color: "#ffffff",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/nazmulxdev",
    label: "LinkedIn",
    color: "#0a66c2",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/+8801600106065",
    label: "WhatsApp",
    color: "#25d366",
  },
];

const highlights = [
  {
    emoji: "⚡",
    title: "EEE × Web Dev",
    accent: "#00ff94",
    desc: "My engineering background shapes how I write code — structured thinking, debugging instincts, and a system-level mindset that most web devs don't have.",
  },
  {
    emoji: "🏗️",
    title: "Type-Safe Full Stack",
    accent: "#3178c6",
    desc: "I build end-to-end with TypeScript — from React components to Prisma schemas — keeping codebases predictable and maintainable.",
  },
  {
    emoji: "🚀",
    title: "12+ Real Projects",
    accent: "#f97316",
    desc: "Not just tutorials. I've shipped production-ready apps — dashboards, e-commerce, healthcare systems, and tour management platforms.",
  },
  {
    emoji: "📦",
    title: "Exploring DevOps",
    accent: "#2496ed",
    desc: "Currently learning Docker and containerization. Comfortable with Vercel, Render, and Railway deployments. Actively going deeper into DevOps.",
  },
];

const skillGroups = [
  {
    label: "Frontend",
    color: "#00d8ff",
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
    label: "Backend",
    color: "#00ff94",
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
    label: "Database & ORM",
    color: "#f59e0b",
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
    label: "Auth & Security",
    color: "#f472b6",
    skills: [
      { icon: <SiJsonwebtokens />, name: "JWT", color: "#d63aff" },
      { icon: <SiFirebase />, name: "Firebase Auth", color: "#ffca28" },
      { icon: <SiAuth0 />, name: "Better Auth", color: "#eb5424" },
      { icon: <SiAuth0 />, name: "NextAuth", color: "#00d8ff" },
    ],
  },
  {
    label: "Tools & Deployment",
    color: "#f87171",
    skills: [
      { icon: <FaGitAlt />, name: "Git", color: "#f05032" },
      { icon: <FaDocker />, name: "Docker", color: "#2496ed" },
      { icon: <SiNginx />, name: "Nginx", color: "#009900" },
      { icon: <IoLogoVercel />, name: "Vercel", color: "#ffffff" },
      { icon: <SiPostman />, name: "Postman", color: "#ff6c37" },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

// "WHO I AM" style section label — consistent across the page
const SectionTag = ({ children }) => (
  <div className="flex items-center gap-2 mb-4">
    <span className="w-6 h-px bg-[#00ff94]/50" />
    <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#00ff94]/60">
      {children}
    </span>
    <span className="w-6 h-px bg-[#00ff94]/50" />
  </div>
);

const MiniLabel = ({ children }) => (
  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#00ff94]/50 mb-1.5">
    {children}
  </p>
);

const SkillPill = ({ icon, name, color }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.06 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg cursor-default select-none"
    style={{
      border: `1px solid ${color}30`,
      backgroundColor: `${color}12`,
    }}
  >
    <span className="text-sm shrink-0" style={{ color }}>
      {icon}
    </span>
    <span className="text-[11px] font-medium text-gray-300 whitespace-nowrap">
      {name}
    </span>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="pb-10 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          {/* "WHO I AM" tag */}
          <div className="flex justify-center mb-4">
            <SectionTag>Who I Am</SectionTag>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            About <span className="text-[#00ff94]">Me</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 mt-4 mx-auto w-24 rounded-full bg-[#00ff94]"
            style={{ originX: 0.5 }}
          />

          <p className="mt-4 text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Engineer by degree. Developer by passion. Builder by nature.
          </p>
        </motion.div>

        {/* ════════════════════════════════
            PROFILE + BIO GRID
        ════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* ── Left: Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col"
          >
            <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-full">
              {/* Image */}
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ aspectRatio: "3/4", ...glass }}
              >
                <img
                  src={profilePic}
                  alt="Md Nazmul Hossen"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom gradient for name readability */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(3,7,18,0.97) 0%, rgba(3,7,18,0.4) 45%, transparent 100%)",
                  }}
                />

                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[#00ff94]/70 font-bold mb-0.5">
                    Full Stack Developer
                  </p>
                  <h3 className="text-xl font-black text-white leading-snug">
                    Md Nazmul
                    <br />
                    Hossen
                  </h3>
                  <div className="flex items-center gap-2 mt-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff94] animate-pulse" />
                    <span className="text-[11px] text-[#00ff94]/80 font-semibold">
                      Open to opportunities
                    </span>
                  </div>
                </div>

                {/* Top badge */}
                <div
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(3,7,18,0.7)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <MdElectricBolt className="text-[#00ff94] text-xs" />
                  <span className="text-[10px] font-bold text-white tracking-wider">
                    EEE + Dev
                  </span>
                </div>
              </div>

              {/* Social links — frosted glass buttons */}
              <div className="flex gap-2 mt-4">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl transition-all text-[11px] font-semibold text-gray-400 hover:text-white"
                    style={glass}
                  >
                    <span style={{ color: s.color }}>{s.icon}</span>
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Bio Blocks ── */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* My Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="p-5 rounded-2xl"
              style={glass}
            >
              <MiniLabel>My Story</MiniLabel>
              <p className="text-gray-300 leading-relaxed text-sm md:text-[15px]">
                I'm a{" "}
                <span className="text-white font-semibold">
                  final-year EEE student
                </span>{" "}
                at{" "}
                <span className="text-[#00ff94] font-semibold">
                  HSTU, Dinajpur
                </span>
                , currently in my final semester (Level-4, Semester-II).
                Alongside my degree, I've been seriously building full-stack web
                applications — completing{" "}
                <span className="text-white font-semibold">
                  Level 1 & Level 2
                </span>{" "}
                at{" "}
                <span className="text-[#00ff94] font-semibold">
                  Programming Hero
                </span>{" "}
                and shipping{" "}
                <span className="text-white font-semibold">
                  12+ production-grade apps
                </span>
                .
              </p>
              <p className="text-gray-500 leading-relaxed text-sm mt-3">
                My engineering education taught me to think in systems —
                debugging circuits and debugging code require the same
                structured mindset. I bring that discipline into every project I
                build.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="relative p-5 rounded-2xl overflow-hidden"
              style={glassGreen}
            >
              <div className="absolute top-2 left-4 text-5xl font-black text-[#00ff94]/10 leading-none select-none">
                "
              </div>
              <p className="relative z-10 text-base md:text-lg font-medium text-white/80 italic leading-relaxed pt-3">
                Every line of code I write takes me one step closer to the
                future I dream of.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-px bg-[#00ff94]/40" />
                <span className="text-[10px] text-[#00ff94]/50 font-bold tracking-widest uppercase">
                  Nazmul Hossen
                </span>
              </div>
            </motion.div>

            {/* Goal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.55 }}
              className="p-5 rounded-2xl flex items-start gap-4"
              style={glass}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 text-base"
                style={{
                  backgroundColor: "rgba(0,255,148,0.1)",
                  border: "1px solid rgba(0,255,148,0.2)",
                }}
              >
                🎯
              </div>
              <div>
                <MiniLabel>Current Goal</MiniLabel>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Actively seeking an{" "}
                  <span className="text-[#00ff94] font-semibold">
                    internship
                  </span>{" "}
                  or{" "}
                  <span className="text-[#00ff94] font-semibold">
                    entry-level role
                  </span>{" "}
                  where I can contribute to real products, learn from
                  experienced engineers, and grow fast.
                </p>
              </div>
            </motion.div>

            {/* University */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16, duration: 0.55 }}
              className="p-5 rounded-2xl flex items-start gap-4"
              style={glass}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  backgroundColor: "rgba(0,255,148,0.1)",
                  border: "1px solid rgba(0,255,148,0.2)",
                }}
              >
                <FaUniversity className="text-[#00ff94] text-sm" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-snug">
                  B.Sc — Electrical & Electronic Engineering
                </p>
                <p className="text-xs text-[#00ff94]/70 font-semibold mt-0.5">
                  HSTU, Dinajpur · 2021 – Present
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Final Semester · Level-4, Semester-II
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ════════════════════════════════
            WHAT SETS ME APART
        ════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-[#00ff94]" />
            <h3 className="text-lg font-bold text-white">What Sets Me Apart</h3>
          </div>
          <p className="text-xs text-gray-600 mb-6 ml-4">
            Traits that make me stand out as a developer
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative group p-5 rounded-2xl overflow-hidden transition-all duration-300"
                style={glass}
              >
                {/* Hover corner glow */}
                <div
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                  style={{ backgroundColor: item.accent }}
                />
                <span className="text-2xl mb-3 block">{item.emoji}</span>
                <h4
                  className="text-sm font-bold mb-2"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ════════════════════════════════
            TECH SKILLS
        ════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-8 rounded-3xl"
          style={glass}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full bg-[#00ff94]" />
            <h3 className="text-lg font-bold text-white">Tech I Work With</h3>
          </div>
          <p className="text-xs text-gray-600 mb-8 ml-4">
            My actual stack — no fluff
          </p>

          <div className="space-y-7">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.07, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-[10px] font-bold tracking-[0.2em] uppercase"
                    style={{ color: group.color }}
                  >
                    {group.label}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ backgroundColor: `${group.color}25` }}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.03 }}
                    >
                      <SkillPill {...skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
