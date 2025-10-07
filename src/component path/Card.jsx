import React from "react";
import { motion } from "framer-motion";
import Portfolio from "../assets/portfolio.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React JS and Tailwind CSS.",
    image: Portfolio,
  },
  {
    title: "Todo App",
    description: "A task management app using Redux and local storage.",
    image: "https://source.unsplash.com/random/800x600?code",
  },
  {
    title: "Weather App",
    description: "A weather forecast app with real-time API integration.",
    image: "https://source.unsplash.com/random/800x600?weather",
  },
];

function CardSection() {
  return (
    <section
      className=" py-16 bg-gradient-to-b from-blue-400 to-slate-800 "
      id="projects"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-10"
        >
          My Projects
        </motion.h2>

        {/* Responsive Grid */}
        <div className="scroll-ps-6 snap-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-slate-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSection;
