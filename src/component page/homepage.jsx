import { motion } from "framer-motion";
import Profile from "../assets/profile.png";

function HomePage() {
  return (
    <div className="  min-h-screen bg-gradient-to-b from-slate-800 to-blue-400 flex flex-col justify-center items-center text-white text-center px-6">
      {/* Fade-in text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Welcome to <span className="text-yellow-300">My Portfolio</span>
      </motion.h1>

      {/* Fade-in subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl max-w-2xl"
      >
        Hi, I’m Sochea Seyha, a passionate Full Stack Web Developer who loves
        creating clean, modern, and responsive web applications. My goal is to
        keep improving every day by learning new tools, improving my code
        quality, and building real-world projects.
      </motion.p>

      {/* Animated Button */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-8 inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
      >
        View My Work
      </motion.a>

      {/* Floating Image / Illustration */}
      <motion.img
        src={Profile}
        alt="Developer"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: [0, -10, 0], opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="w-60 md:w-80 mt-10 rounded-full shadow-lg"
      />
    </div>
  );
}

export default HomePage;
