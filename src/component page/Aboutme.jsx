import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen bg-slate-800 flex flex-col justify-center items-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-200 mb-6"
        >
          About <span className="text-blue-600">Me</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10 text-lg"
        >
          Hello! I'm{" "}
          <span className="font-semibold text-blue-600">Sochea Seyha</span>, a
          passionate Frontend Developer who loves building beautiful and
          responsive web applications. I specialize in
          <span className="font-medium text-yellow-400"> React.js</span> and
          <span className="font-medium text-yellow-400"> Tailwind CSS</span>,
          and I enjoy turning creative ideas into clean, functional user
          interfaces.
        </motion.p>

        {/* Skill highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: "Frontend Development",
              desc: "Building responsive and interactive UI using React.js, Tailwind CSS, and modern JavaScript.",
            },
            {
              title: "Problem Solving",
              desc: "Able to analyze and solve challenges in projects efficiently and creatively.",
            },
            {
              title: "Continuous Learning",
              desc: "Always improving my skills and learning new technologies like Redux, Next.js, and Framer Motion.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-yellow-400 shadow-md p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xls">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10"
        >
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
export default About;
