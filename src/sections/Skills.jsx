import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", level: "95%" },
      { name: "CSS3", level: "90%" },
      { name: "JavaScript", level: "85%" },
      { name: "React.js", level: "80%" },
      { name: "Tailwind CSS", level: "85%" },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "C++", level: "90%" },
      { name: "OOP", level: "90%" },
      { name: "Data Structures", level: "85%" },
      { name: "Algorithms", level: "80%" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: "85%" },
      { name: "Microsoft Access", level: "80%" },
      { name: "SQL Server", level: "75%" },
    ],
  },
  {
    category: "Information Systems",
    items: [
      { name: "Information Systems", level: "80%" },
      { name: "Systems Analysis", level: "80%" },
      { name: "Software Engineering", level: "75%" },
      { name: "Agile / Scrum", level: "70%" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950 text-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-6">
          المهارات
        </h2>
        <p className="text-center text-gray-400 mb-16">
          التقنيات والأدوات التي أستخدمها لبناء تطبيقات ويب عالية الجودة.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-900/90 p-8 rounded-3xl border border-slate-800 shadow-xl hover:border-cyan-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                {group.category}
              </h3>
              <div className="space-y-6">
                {group.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-200 text-lg">
                        {skill.name}
                      </span>
                      <span className="text-sm text-cyan-400 font-bold">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-cyan-400 h-3 rounded-full shadow-sm shadow-cyan-400/50"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}