import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "JavaScript"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-10">
          My Projects
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                filter === category
                  ? "bg-cyan-500 text-black"
                  : "bg-slate-800 text-white hover:bg-cyan-500 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;