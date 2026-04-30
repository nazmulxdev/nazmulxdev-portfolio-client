/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { TbBrandAws } from "react-icons/tb";
import { MdSchool } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiNginx,
  SiGo,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiJavascript,
} from "react-icons/si";

const Education = () => {
  const primaryColor = "#00ff94";
  const primaryFaded = `${primaryColor}20`;

  const educationData = [
    {
      icon: <FaUniversity className="text-3xl" />,
      title: "B.Sc in Electrical and Electronic Engineering",
      institution:
        "Hajee Mohammad Danesh Science & Technology University, Dinajpur",
      details: [
        { label: "Department", value: "Electrical and Electronic Engineering" },
        { label: "Session", value: "2021" },
        {
          label: "Current Status",
          value: "Appeared in Final Semester (Level-4, Semester-II)",
        },
      ],
      year: "2021 - Present",
    },
    {
      icon: <IoIosSchool className="text-3xl" />,
      title: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Bangla College",
      details: [
        { label: "Board", value: "Dhaka" },
        { label: "Group", value: "Science" },
        { label: "Passing Year", value: "2020" },
        { label: "GPA", value: "5.00/5.00" },
      ],
      year: "2018 - 2020",
    },
    {
      icon: <MdSchool className="text-3xl" />,
      title: "Secondary School Certificate (SSC)",
      institution: "Konda High School",
      details: [
        { label: "Board", value: "Dhaka" },
        { label: "Group", value: "Science" },
        { label: "Passing Year", value: "2018" },
        { label: "GPA", value: "5.00/5.00" },
      ],
      year: "2016 - 2018",
    },
  ];

  const coursesData = [
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Next Level Web Development",
      institution: "Programming Hero — Level 2",
      badge: "Advanced",
      badgeColor: "#00ff94",
      description:
        "Industry-standard full-stack development covering TypeScript, Next.js, PostgreSQL, Prisma ORM, Docker, Nginx, Golang, and AWS. Built 2 production-grade projects: PH Healthcare & PH Tour Management System.",
      tags: [
        { icon: <SiTypescript />, label: "TypeScript", color: "#3178c6" },
        { icon: <SiNextdotjs />, label: "Next.js", color: "#ffffff" },
        { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
        { icon: <SiPrisma />, label: "Prisma", color: "#a5b4fc" },
        { icon: <SiDocker />, label: "Docker", color: "#2496ed" },
        { icon: <SiNginx />, label: "Nginx", color: "#009900" },
        { icon: <SiGo />, label: "Golang", color: "#00add8" },
        { icon: <TbBrandAws />, label: "AWS", color: "#ff9900" },
      ],
      missions: [
        "TypeScript — Basic, Advanced & OOP",
        "Node.js, Express & SQL with PostgreSQL",
        "RDBMS, DB Normalization & Advanced SQL",
        "Prisma ORM & Next.js with Auth System",
        "Full Stack AI-integrated Healthcare App",
        "Full Stack Tour Management App with Golang",
        "Docker — Images, Volumes, Networks & Compose",
        "Nginx — Reverse Proxy & Load Balancing",
        "AWS — S3, IAM, EC2, Linux & CI/CD",
        "Unit & Integration Testing (Jest + Supertest)",
        "Software Engineering & Design Architecture",
      ],
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "MERN Stack Development",
      institution: "Programming Hero — Level 1",
      badge: "Completed",
      badgeColor: "#00ff94",
      description:
        "Comprehensive full-stack web development training using MongoDB, Express, React, and Node.js. Built 12+ production-ready applications including dashboards, e-commerce systems, and real-time collaboration tools.",
      tags: [
        { icon: <FaReact />, label: "React.js", color: "#00d8ff" },
        { icon: <FaNodeJs />, label: "Node.js", color: "#68a063" },
        { icon: <SiExpress />, label: "Express", color: "#cccccc" },
        { icon: <SiMongodb />, label: "MongoDB", color: "#589636" },
        { icon: <SiFirebase />, label: "Firebase", color: "#ffca28" },
        { icon: <SiJsonwebtokens />, label: "JWT", color: "#d63aff" },
        { icon: <RiTailwindCssFill />, label: "Tailwind", color: "#38bdf8" },
        { icon: <SiJavascript />, label: "JavaScript", color: "#f7df1e" },
      ],
      missions: [
        "JavaScript ES6+ & React fundamentals",
        "Node.js & Express REST APIs",
        "MongoDB & Mongoose ODM",
        "Firebase Auth & JWT",
        "Full Stack project deployments",
      ],
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "UI/UX Design Fundamentals",
      institution: "Creative IT Institute",
      badge: "Completed",
      badgeColor: "#00ff94",
      description:
        "Learned principles of user interface and experience design with Figma including wireframing, prototyping, and design systems.",
      tags: [],
      missions: [
        "Figma & Prototyping",
        "Design Systems & Components",
        "UX Research & Wireframing",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="pt-20 pb-8 px-4 bg-gray-950 relative overflow-hidden"
    >
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: primaryFaded,
              opacity: 0.15,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1],
              transition: {
                duration: Math.random() * 1 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              },
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full text-center mb-12 md:mb-20"
        >
          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: primaryColor }}
          >
            Education Journey
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 md:h-1.5 mt-3 md:mt-4 mx-auto w-24 md:w-32"
            style={{ backgroundColor: primaryColor, originX: 0 }}
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-4 md:mt-6 max-w-3xl mx-auto">
            My academic path and professional certifications
          </p>
        </motion.div>

        {/* ── Academic Timeline ── */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-8 text-white flex items-center gap-3"
          >
            <FaGraduationCap style={{ color: primaryColor }} />
            <span>Academic Background</span>
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-6 top-0 h-full w-1 origin-top md:left-1/2 md:-translate-x-1/2"
              style={{ backgroundColor: primaryColor }}
            />

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 pl-10 md:pl-0 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-10 md:text-right"
                    : "md:ml-auto md:pl-10"
                }`}
              >
                {/* Year badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`absolute top-0 ${
                    index % 2 === 0
                      ? "md:right-0 md:-mr-14"
                      : "md:left-0 md:-ml-14"
                  } z-10 px-3 py-1 rounded-full text-xs font-bold tracking-wide`}
                  style={{ backgroundColor: primaryFaded, color: primaryColor }}
                >
                  {edu.year}
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  className="absolute top-4 left-0 w-5 h-5 rounded-full border-4 border-gray-900 transform -translate-x-1/2 md:left-1/2 z-10"
                  style={{ backgroundColor: primaryColor }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="absolute top-4 left-0 w-5 h-5 rounded-full transform -translate-x-1/2 md:left-1/2 z-0"
                  style={{ backgroundColor: primaryColor }}
                  animate={{ scale: [1, 1.5, 1.8], opacity: [0.4, 0.2, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeOut",
                    delay: index * 0.3,
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: `0 20px 40px -10px ${primaryColor}30`,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="p-6 rounded-xl bg-gray-900/70 border border-gray-800 backdrop-blur-sm shadow-lg overflow-hidden relative group"
                  style={{
                    borderLeftColor: primaryColor,
                    borderLeftWidth: "4px",
                  }}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute -left-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{
                        backgroundColor: primaryColor,
                        filter: "blur(40px)",
                      }}
                    />
                  </div>

                  <div
                    className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""} relative z-10`}
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: primaryFaded,
                        boxShadow: `0 0 20px ${primaryColor}30`,
                      }}
                    >
                      {edu.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {edu.title}
                      </h4>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                  </div>

                  <ul
                    className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""} relative z-10`}
                  >
                    {edu.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className="text-gray-300"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span
                          className="font-medium"
                          style={{ color: primaryColor }}
                        >
                          {detail.label}:{" "}
                        </span>
                        <span>{detail.value}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Professional Courses ── */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-8 text-white flex items-center gap-3"
          >
            <FaLaptopCode style={{ color: primaryColor }} />
            <span>Professional Courses</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 20px 40px -10px ${primaryColor}30`,
                }}
                className="relative group"
              >
                <div
                  className="h-full p-6 rounded-xl bg-gray-900/70 border border-gray-800 overflow-hidden relative flex flex-col"
                  style={{
                    boxShadow: `0 10px 30px -10px ${primaryColor}20`,
                    borderTopColor: course.badgeColor,
                    borderTopWidth: "3px",
                  }}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}08 0%, transparent 70%)`,
                      }}
                    />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: primaryFaded,
                          boxShadow: `0 0 20px ${primaryColor}20`,
                        }}
                      >
                        {course.icon}
                      </motion.div>
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${course.badgeColor}20`,
                          color: course.badgeColor,
                          border: `1px solid ${course.badgeColor}40`,
                        }}
                      >
                        {course.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-1">
                      {course.title}
                    </h4>
                    <p
                      className="text-sm font-semibold mb-3"
                      style={{ color: primaryColor }}
                    >
                      {course.institution}
                    </p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Tech tags */}
                    {course.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1 text-xs px-2 py-1 rounded-md"
                            style={{
                              backgroundColor: `${tag.color}15`,
                              color: tag.color,
                              border: `1px solid ${tag.color}30`,
                            }}
                          >
                            {tag.icon}
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Key Topics */}
                    <div className="mt-auto">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Key Topics
                      </p>
                      <ul className="space-y-1">
                        {course.missions.map((m, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-gray-400"
                          >
                            <span
                              style={{ color: primaryColor }}
                              className="mt-0.5 shrink-0"
                            >
                              ▹
                            </span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
