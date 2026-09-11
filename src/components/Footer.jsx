import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Islam<span className="text-white">.</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Software Engineer | Frontend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/Islam-mohamed-Saad-El-Din"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaGithub className="text-2xl" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>

            <a
              href="mailto:your-email@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaEnvelope className="text-2xl" />
            </a>

          </div>

          {/* Back To Top */}
          <a
            href="#home"
            className="flex items-center gap-2 bg-cyan-500 text-slate-950 px-5 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:scale-105 transition"
          >
            <FaArrowUp />
            Top
          </a>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Islam Mohamed Saad El-Din.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;