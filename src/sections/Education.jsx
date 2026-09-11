import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Education
        </h2>

        <div className="bg-slate-900 rounded-3xl p-10 shadow-lg hover:shadow-cyan-500/30 transition">

          <div className="flex items-center gap-4 mb-6">

            <FaUniversity className="text-cyan-400 text-4xl" />

            <div>
              <h3 className="text-3xl font-bold">
                Assiut University
              </h3>

              <p className="text-gray-400">
                Faculty of Computers & Information
              </p>
            </div>

          </div>

          <div className="space-y-5 text-lg">

            <div className="flex items-center gap-3">

              <FaGraduationCap className="text-cyan-400" />

              <span>
                Third-Year Student
              </span>

            </div>

            <div className="flex items-center gap-3">

              <FaCalendarAlt className="text-cyan-400" />

              <span>
                Expected Graduation: 2027
              </span>

            </div>

            <p className="text-gray-400 leading-8 mt-6">
              Studying Software Engineering, Information Systems,
              Database Systems, Algorithms, Data Structures,
              Object-Oriented Programming, and Web Development.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;