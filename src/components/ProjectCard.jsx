import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  if (!project) {
    return null;
  }

  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 hover:-translate-y-2 hover:shadow-cyan-500/30 transition-all duration-300">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-cyan-400 mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-7 mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800 hover:bg-cyan-500 hover:text-black px-4 py-2 rounded-lg transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-500 text-black hover:bg-cyan-400 px-4 py-2 rounded-lg transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>
    </div>
  );
}

export default ProjectCard;