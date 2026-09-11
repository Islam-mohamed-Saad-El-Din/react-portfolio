function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          About Me
        </h2>

        <div className="bg-slate-800 rounded-3xl p-10 shadow-xl">

          <p className="text-lg leading-9 text-gray-300">
            I'm <span className="text-cyan-400 font-semibold">
            Islam Mohamed Saad El-Din
            </span>, a third-year student at the Faculty of Computers and Information,
            Assiut University.

            I specialize in Frontend Development and enjoy creating modern,
            responsive, and interactive websites using the latest web
            technologies.

            I always strive to improve my programming skills, learn new
            technologies, and build projects that solve real-world problems.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;