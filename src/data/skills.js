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

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-6">
          Skills
        </h2>
        <p className="text-center text-gray-400 mb-16">
          Technologies and tools I work with to build high-quality applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-cyan-400 font-bold">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-cyan-400 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}س

export default Skills;