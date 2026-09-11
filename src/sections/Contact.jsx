import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-6">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Feel free to contact me for projects, opportunities or collaboration.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">

            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <a
                href="mailto:islam.mhamed.saad22@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition"
              >
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span>your-email@gmail.com</span>
              </a>

              <a
                href="https://github.com/Islam-mohamed-Saad-El-Din"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition"
              >
                <FaGithub className="text-cyan-400 text-2xl" />
                <span>GitHub</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition"
              >
                <FaLinkedin className="text-cyan-400 text-2xl" />
                <span>LinkedIn</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition"
              >
                <FaWhatsapp className="text-cyan-400 text-2xl" />
                <span>WhatsApp</span>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-4 rounded-xl transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;