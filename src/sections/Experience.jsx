import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaUsers } from "react-icons/fa";

const experiences = [
  {
    icon: <FaCode className="text-cyan-400 text-2xl" />,
    title: "Frontend Development",
    subtitle: "Personal & Open Source Projects",
    description:
      "Engineered responsive, dynamic web applications using React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS focused on clean UI/UX and seamless performance.",
  },
  {
    icon: <FaDatabase className="text-cyan-400 text-2xl" />,
    title: "Information Systems & Databases",
    subtitle: "Academic Projects",
    description:
      "Designed database architectures using MySQL and SQL Server, performed system analysis, software engineering modelling, and built MS Access solutions.",
  },
  {
    icon: <FaUsers className="text-cyan-400 text-2xl" />,
    title: "Team Collaboration & Leadership",
    subtitle: "University Teamwork",
    description:
      "Collaborated effectively within university project teams, practicing Agile/Scrum methodologies, improving technical communication, and solving complex bugs.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My practical track record in web development and systems analysis.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-950/80 p-8 rounded-3xl border border-slate-800 shadow-xl hover:border-cyan-500/30 transition-all flex flex-col md:flex-row items-start gap-6"
            >
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl shrink-0">
                {exp.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-100">{exp.title}</h3>
                <span className="inline-block text-sm text-cyan-400 font-semibold mb-2">
                  {exp.subtitle}
                </span>
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}