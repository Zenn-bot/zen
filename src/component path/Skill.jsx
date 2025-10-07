import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/Javascript.png";
import star from "../assets/star.png";
import React from "../assets/react.png";
import Tailwind from "../assets/Tailwind.png";
import Bootstrap from "../assets/Bootstrap.png";
import Node from "../assets/node.png";
import Express from "../assets/Express.png";
import PHP from "../assets/php.png";
function Skill() {
  const Skills = [
    {
      id: 1,
      icon: html,
      title: "HTML",
      level: "90%",
    },
    {
      id: 2,
      icon: css,
      title: "CSS",
      level: "95%",
    },
    {
      id: 3,
      icon: js,
      title: "JAVASCRIPT",
      level: "80%",
    },
    {
      id: 4,
      icon: React,
      title: "React JS",
      level: "80%",
    },
    {
      id: 5,
      icon: Tailwind,
      title: "Tailwind CSS",
      level: "85%",
    },
    {
      id: 6,
      icon: Bootstrap,
      title: "Bootstrap",
      level: "65%",
    },
    {
      id: 7,
      icon: Node,
      title: "Node JS",
      level: "65%",
    },
    {
      id: 8,
      icon: Express,
      title: "Express JS",
      level: "65%",
    },
    {
      id: 9,
      icon: PHP,
      title: "PHP",
      level: "65%",
    },
  ];
  return (
    <div
      className="bg-gradient-to-b from-slate-800 to-blue-400 py-16"
      id="skills"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl container mx-auto px-16 font-bold text-center text-white mb-12"
      >
        My Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-left text-white mb-12 md:text-2xl text-xl  container mx-auto px-6"
      >
        Discover the powerful tools and technologies I use to create exceptional
        digital experiences. From cutting-edge frameworks to industry-standard
        software, these skills enable me to bring your vision to life with
        precision and creativity.
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl container mx-auto flex items-center px-6 font-bold text-left text-yellow-300 mb-12"
      >
        Essential Tools I Use
        <img src={star} alt="" className="w-7 h-7 ml-2" />
      </motion.h2>
      <div className=" container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Skills.map((skill) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            key={skill.id}
            className=" bg-slate-700 border border-slate-200 rounded-2xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl text-blue-600 text-2xl">
              <img src={skill.icon} alt="" />
            </div>

            {/* Skill Info */}
            <h3 className="text-xl font-semibold text-white mb-1">
              {skill.title}
            </h3>
            <p className="text-sm text-slate-500 mb-3">{skill.description}</p>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 rounded-full h-2 mb-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: skill.level }}
                transition={{ duration: 0.5 }}
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: skill.level }}
              ></motion.div>
            </div>

            <p className="text-xs text-right text-slate-500">Level</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Skill;
