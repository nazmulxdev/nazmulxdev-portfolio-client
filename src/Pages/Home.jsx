/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import profileImage from "../assets/new-pic-for-profle.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCode,
  FaProjectDiagram,
  FaServer,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import GlowingButton from "../Utilities/GlowingButton";
import SocialCircleButton from "../Utilities/SocilaCircleButton";
import { IoMdContacts } from "react-icons/io";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useNavigate } from "react-router";

// Reusable orbit icon renderer
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
    SiRedux,
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

const Home = () => {
  const primaryColor = "#00ff94";
  const grayColor = "#6b7280";
  const navigate = useNavigate();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Md-Nazmul-Hossen-MERN-Developer-Resume.pdf";
    link.download = "Md-Nazmul-Hossen-MERN-Developer-Resume.pdf";
    link.click();
  };

  const handleContactButton = () => {
    navigate("/contact");
  };

  const stats = [
    { value: 12, label: "Projects Completed", icon: <FaProjectDiagram /> },
    { value: 500, label: "GitHub Commits", icon: <FaCode /> },
    { value: 15, label: "Technologies", icon: <FaServer /> },
  ];

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

  return (
    <section
      id="home"
      className="min-h-screen pt-20 pb-8 px-4 bg-gray-950 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile: Profile Image First */}
        <div className="flex justify-center lg:hidden mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", damping: 10 },
            }}
            className="flex justify-center mb-16"
          >
            {/* Mobile container: w-64 h-64 = 256px */}
            <div className="relative w-64 h-64">
              <img
                src={profileImage}
                alt="Md Nazmul Hossen"
                className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-2xl z-10 relative"
              />
              <OrbitIcons containerSize={256} radius={145} iconSize={40} />
              <GlowRing />
            </div>
          </motion.div>
        </div>

        {/* 2:1 Grid Layout (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column (2/3 width) */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                Hi, I'm{" "}
                <span style={{ color: primaryColor }}>Md Nazmul Hossen</span>
              </h1>

              {/* Typewriter Effect */}
              <div
                className="text-2xl md:text-3xl font-semibold mb-6 h-12"
                style={{ color: primaryColor }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "Problem Solver",
                      "Tech Enthusiast",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>

              <p className="text-lg mb-8 text-gray-400 max-w-2xl">
                I build exceptional digital experiences with modern web
                technologies. Currently specializing in Full Stack development
                and creating responsive, user-friendly applications.
              </p>

              {/* Stats Grid with CountUp */}
              <div ref={ref} className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 text-center"
                  >
                    <div
                      className="flex justify-center text-2xl mb-2"
                      style={{ color: primaryColor }}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {inView ? (
                        <CountUp end={stat.value} duration={2} suffix="+" />
                      ) : (
                        0
                      )}
                    </div>
                    <div className="text-sm" style={{ color: grayColor }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <GlowingButton
                  onClick={handleDownloadCV}
                  icon={HiDownload}
                  size="lg"
                >
                  Resume
                </GlowingButton>
                <GlowingButton onClick={handleContactButton} size="lg">
                  <IoMdContacts /> Contact Me
                </GlowingButton>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <SocialCircleButton
                  icon={FaGithub}
                  onClick={() =>
                    window.open("https://github.com/nazmulxdev", "_blank")
                  }
                  glowColor={primaryColor}
                />
                <SocialCircleButton
                  icon={FaLinkedin}
                  onClick={() =>
                    window.open("https://linkedin.com/in/nazmulxdev", "_blank")
                  }
                  glowColor={primaryColor}
                />
                <SocialCircleButton
                  icon={FaWhatsapp}
                  onClick={() =>
                    window.open("https://wa.me/+8801600106065", "_blank")
                  }
                  glowColor={primaryColor}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column (1/3 width) - Profile Image (Hidden on mobile) */}
          <div className="lg:col-span-1 order-1 lg:order-2 hidden lg:flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "spring", damping: 10 },
              }}
              className="flex justify-center mb-16"
            >
              {/* Desktop container: w-96 h-96 = 384px */}
              <div className="relative w-96 h-96">
                <img
                  src={profileImage}
                  alt="Md Nazmul Hossen"
                  className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-2xl z-10 relative"
                />
                <OrbitIcons containerSize={384} radius={210} iconSize={50} />
                <GlowRing />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 lg:mt-20 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: primaryColor }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView()}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
