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
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

// ─── Zustand Bear Icon ──────────────────────────────────────────────────────
const ZustandIcon = ({ className = "" }) => (
  <span className={`${className}`} role="img" aria-label="Zustand">
    🐻
  </span>
);

// ─── Reusable Orbit Icons ───────────────────────────────────────────────────
const OrbitIcons = ({ containerSize, radius, iconSize = 50 }) => {
  const icons = [
    FaReact,
    SiNextdotjs,
    SiTypescript,
    FaNodeJs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiTailwindcss,
    FaDocker,
    FaGitAlt,
    ZustandIcon,
  ];

  const total = icons.length;
  const center = containerSize / 2;

  return icons.map((Icon, i) => {
    const angle = (i / total) * 2 * Math.PI;
    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center"
        style={{
          width: iconSize,
          height: iconSize,
          left: `${Math.cos(angle) * radius + center - iconSize / 2}px`,
          top: `${Math.sin(angle) * radius + center - iconSize / 2}px`,
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeInOut",
        }}
      >
        <Icon className="text-xl text-gray-300" />
      </motion.div>
    );
  });
};

// ─── Glow Ring ──────────────────────────────────────────────────────────────
const GlowRing = () => (
  <motion.div
    className="absolute inset-0 rounded-full border-4 border-transparent"
    animate={{
      boxShadow: [
        "0 0 20px 5px rgba(0, 255, 148, 0.3)",
        "0 0 30px 10px rgba(0, 255, 148, 0.5)",
        "0 0 20px 5px rgba(0, 255, 148, 0.3)",
      ],
    }}
    transition={{ duration: 4, repeat: Infinity }}
  />
);

// ─── About Component ────────────────────────────────────────────────────────
const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const techStack = [
    {
      icon: <FaReact className="text-2xl" />,
      name: "React.js",
      color: "#00d8ff",
    },
    {
      icon: <SiNextdotjs className="text-2xl" />,
      name: "Next.js",
      color: "#ffffff",
    },
    {
      icon: <SiTypescript className="text-2xl" />,
      name: "TypeScript",
      color: "#3178c6",
    },
    {
      icon: <SiTailwindcss className="text-2xl" />,
      name: "Tailwind",
      color: "#38bdf8",
    },
    {
      icon: <FaNodeJs className="text-2xl" />,
      name: "Node.js",
      color: "#68a063",
    },
    {
      icon: <SiExpress className="text-2xl" />,
      name: "Express",
      color: "#ffffff",
    },
    {
      icon: <SiMongodb className="text-2xl" />,
      name: "MongoDB",
      color: "#589636",
    },
    {
      icon: <SiPostgresql className="text-2xl" />,
      name: "PostgreSQL",
      color: "#336791",
    },
    {
      icon: <SiPrisma className="text-2xl" />,
      name: "Prisma",
      color: "#5a67d8",
    },
    {
      icon: <span className="text-2xl">🐻</span>,
      name: "Zustand",
      color: "#f97316",
    },
    {
      icon: <FaDocker className="text-2xl" />,
      name: "Docker",
      color: "#2496ed",
    },
    { icon: <FaGitAlt className="text-2xl" />, name: "Git", color: "#f05032" },
  ];

  return (
    <section id="about" className="py-20 px-4  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Profile Image with Orbit Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 10 },
          }}
          className="flex justify-center mb-24"
        >
          <div className="relative w-64 h-64">
            <img
              src={profilePic}
              alt="Md Nazmul Hossen"
              className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-2xl z-10 relative"
            />
            <OrbitIcons containerSize={256} radius={145} iconSize={40} />
            <GlowRing />
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#00ff94]">
              About <span className="text-white">Me</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 md:h-1.5 mt-3 md:mt-4 mx-auto w-24 md:w-32 bg-[#00ff94]"
            />
          </motion.div>

          {/* Intro */}
          <motion.div
            variants={item}
            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              👋 I'm{" "}
              <span className="text-[#00ff94] font-semibold">
                Md Nazmul Hossen
              </span>
              , an Electrical and Electronic Engineering student from{" "}
              <span className="text-[#00ff94] font-semibold">
                Hajee Mohammad Danesh Science and Technology University,
                Dinajpur
              </span>{" "}
              and passionate Full Stack developer. I bridge hardware knowledge
              with cutting-edge web development to create innovative digital
              solutions.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={item}
            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              💻 I completed{" "}
              <span className="text-[#a855f7]">Level 1 & Level 2</span> of the
              Full Stack Development course from{" "}
              <span className="text-[#a855f7]">Programming Hero</span>, building{" "}
              <span className="text-[#00ff94]">
                12+ production-ready applications
              </span>{" "}
              including complex dashboards, e-commerce systems, and real-time
              collaboration tools.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={item}
            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-[#00ff94] mb-4 flex items-center">
              🚀 <span className="ml-2">Tech Stack</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all"
                >
                  <div style={{ color: tech.color }}>{tech.icon}</div>
                  <span className="text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What Sets Me Apart */}
          <motion.div
            variants={item}
            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-[#00d1ff] mb-4 flex items-center">
              🧠 <span className="ml-2">What Sets Me Apart</span>
            </h3>
            <ul className="space-y-3">
              {[
                "Unique blend of EEE engineering logic and creative web design",
                "Strong problem-solving & system design skills",
                "Type-safe fullstack development with TypeScript + Prisma",
                "Experience with authentication, dashboards & real-time UIs",
                "Eager to learn and grow in fast-paced environments",
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-start text-lg text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-[#00ff94] mr-2">▹</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Goals */}
          <motion.div
            variants={item}
            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-[#a855f7] mb-3 flex items-center">
              🎯 <span className="ml-2">My Goal</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Seeking <span className="text-[#00ff94]">internships</span> or{" "}
              <span className="text-[#00ff94]">entry-level roles</span> where I
              can contribute, tackle real-world challenges, and grow with a
              team.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={item}
            className="border-l-4 border-[#00ff94] pl-5 py-3 bg-gradient-to-r from-gray-800/40 to-transparent"
          >
            <p className="text-xl italic text-gray-300">
              "Every line of code I write takes me one step closer to the future
              I dream of."
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex justify-center gap-4 pt-6"
          >
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/nazmulxdev",
                color: "#ffffff",
              },
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/in/nazmulxdev",
                color: "#0a66c2",
              },
              {
                icon: <FaWhatsapp />,
                link: "https://wa.me/+8801600106065",
                color: "#25d366",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${social.color}20`,
                  color: social.color,
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
