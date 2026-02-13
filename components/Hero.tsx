"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Code2, Download, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center relative bg-background pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative mb-8 group"
        >
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />

          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Yonas Zekarias"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-2 bg-black/80 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono text-green-400 flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available
          </div>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-white/60 font-medium text-lg md:text-xl mb-2">
            Hello, I am
          </h2>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Yonas Zekarias
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8">
            A{" "}
            <span className="text-white font-semibold">
              Full Stack Engineer
            </span>{" "}
            transforming complex requirements into high-performance digital
            architectures.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <a
              href="/resume.pdf"
              download
              className="group relative px-6 py-3 font-mono text-sm font-bold text-cyan-400 bg-black border border-cyan-500/50 rounded hover:bg-cyan-950/30 transition-all active:scale-95"
            >
              {" "}
              <span className="absolute inset-0 rounded border border-cyan-500/50 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />{" "}
              <span className="relative flex items-center gap-2">
                {" "}
                <Download className="w-4 h-4" /> DOWNLOAD_CV.pdf{" "}
              </span>{" "}
            </a>

            <a
              href="#contact"
              className="px-6 py-3 font-mono text-sm font-bold text-white/70 hover:text-white flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* ✅ Scroll Indicator OUTSIDE main content */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 text-white/40 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest">
          Scroll to Explore
        </span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};
