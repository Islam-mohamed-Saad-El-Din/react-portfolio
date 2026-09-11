import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center pt-20 pb-12 px-6 relative overflow-hidden"
    >
      {/* صورتك كخلفية خفيفة جداً ومدمجة */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm pointer-events-none"
        style={{ backgroundImage: "url('/images/profile.jpg')" }}
      />
      
      {/* طبقة تدرج لضمان وضوح النصوص */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Available for Freelance & New Opportunities
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Islam Mohamed
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-gray-300">
            Software Engineer | Frontend Developer
          </p>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
            3rd-year Information Systems student at Assiut University. Passionate about engineering sleek, responsive, and high-performance web applications using React.js and modern Web technologies.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/cv.pdf"
              download="Islam_Mohamed_CV.pdf"
              className="px-8 py-3.5 bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-400/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 border border-slate-700 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 font-semibold rounded-xl transition-all duration-300 bg-slate-900/50 hover:bg-slate-900"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* الصورة الرئيسية كـ Avatar هادي */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-2 bg-gradient-to-b from-cyan-400 via-slate-800 to-transparent shadow-[0_0_50px_rgba(34,211,238,0.2)]">
            <img
              src="/images/profile.jpg"
              alt="Islam Mohamed"
              className="w-full h-full object-cover rounded-full border-4 border-slate-950 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}