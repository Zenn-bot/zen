import React from "react";
import { Briefcase, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer (Personal Projects)",
      company: "Self-Learning & Practice",
      period: "2024 - Present",
      icon: <Code size={28} />,
      details: [
        "Developed responsive web apps using React.js and Tailwind CSS.",
        "Built portfolio, user list app, and todo app with CRUD features.",
        "Practiced Redux Toolkit, React Router, and API integration.",
      ],
    },
    {
      id: 2,
      role: "System  TTHotel (Freelance)",
      company: "Personal Projects",
      period: "2025",
      icon: <Rocket size={28} />,
      details: [
        "Worked with TT Hotel management software to handle room bookings and guest check-in/out.",
        "Managed room status, billing, and daily reports using hotel system dashboard.",
        "Supported front office operations by using the system efficiently and solving basic system errors.",
      ],
    },
    {
      id: 3,
      role: "System  Elock (Freelance)",
      company: "Personal Projects",
      period: "2025",
      icon: <Rocket size={28} />,
      details: [
        "Installed and configured smart door lock systems (Elock).",
        "Programmed key cards for guest and staff access.",
        "Ensured system synchronization between Elock and TT Hotel software.",
        "Troubleshot lock errors and supported hotel staff with training.",
      ],
    },
    {
      id: 4,
      role: "Learning Journey",
      company: "Frontend Development Path",
      period: "2022 - Present",
      icon: <Briefcase size={28} />,
      details: [
        "Studying HTML, CSS, JavaScript, React, and Tailwind.",
        "Building small projects to improve coding skills.",
        "Learning Git, GitHub, and deployment workflow.",
      ],
    },
    {
      id: 4,
      role: "Academic Support",
      company: "Phnome Penh International University (PPIU)",
      period: "2024 - Present",
      icon: <Briefcase size={28} />,
      details: [
        "Technical Support Set up, maintain and troubleshoot classroom , Support online and hybrid learnding",
        "Install and Configure academic software for teaching and reasearch ",
        "Set up and comfigure hardware and software for computer lab",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-400 to-slate-800 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-yellow-400 font-bold text-center mb-12"
        >
          My Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              className="bg-slate-600 border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              key={exp.id}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl text-yellow-400 font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-slate-50 font-medium text-sm">
                    {exp.company} • {exp.period}
                  </p>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-slate-100 text-sm md:text-base">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default Experience;
