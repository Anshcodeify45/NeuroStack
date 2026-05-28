import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  ArrowRight,
  Github,
  Linkedin,
  Download,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#030712]
        flex
        items-center
        justify-center
        px-6
        pt-28
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* TOP GLOW */}
      <div
        className="
          absolute
          top-[-200px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-blue-600/20
          blur-[180px]
        "
      />

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          left-[-150px]
          top-[20%]
          w-[400px]
          h-[400px]
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          right-[-180px]
          bottom-[10%]
          w-[450px]
          h-[450px]
          rounded-full
          bg-indigo-600/20
          blur-[180px]
        "
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* BADGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            inline-flex
            items-center
            gap-3
            px-5
            py-2.5
            rounded-full
            border
            border-blue-500/20
            bg-white/[0.04]
            backdrop-blur-xl
          "
        >
          <div
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-green-400
              animate-pulse
            "
          />

          <span
            className="
              text-sm
              text-gray-300
              tracking-wide
            "
          >
            Open for Freelance & Full-Time Opportunities
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            mt-10
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-[88px]
            font-black
            leading-[1.05]
            tracking-tight
            text-white
          "
        >
          Building{" "}

          <span
            className="
              bg-gradient-to-r
              from-blue-400
              via-cyan-300
              to-indigo-400
              bg-clip-text
              text-transparent
            "
          >
            Intelligent
          </span>

          <br />

          Digital Experiences
        </motion.h1>

        {/* TYPEWRITER */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="
            mt-8
            h-[40px]
            text-lg
            md:text-2xl
            font-medium
            text-gray-300
          "
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack MERN Applications",
                "AI-Powered SaaS Platforms",
                "Modern UI/UX Experiences",
                "Analytics Dashboards & Automation",
                "Scalable Web Solutions",
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 25,
            }}
          />
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="
            mt-8
            max-w-3xl
            mx-auto
            text-gray-400
            text-lg
            md:text-xl
            leading-relaxed
          "
        >
          I design and develop modern web applications,
          AI-integrated systems, and scalable digital
          products focused on performance, clean design,
          and real-world impact.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="
            mt-12
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-5
          "
        >
          {/* PRIMARY BUTTON */}
          <a
            href="#projects"
            className="
              group
              relative
              overflow-hidden
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              font-semibold
              shadow-[0_10px_40px_rgba(59,130,246,0.35)]
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <span
              className="
                relative
                z-10
                flex
                items-center
                gap-2
              "
            >
              Explore Work

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </span>

            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                bg-white/10
              "
            />
          </a>

          {/* SECONDARY BUTTON */}
          <a
            href="/Anish_Patnaik.pdf"
            download
            className="
              group
              px-8
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              text-white
              font-medium
              hover:bg-white/[0.08]
              transition-all
              duration-300
            "
          >
            <span
              className="
                flex
                items-center
                gap-2
              "
            >
              <Download size={18} />

              Download Resume
            </span>
          </a>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
          className="
            mt-16
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-5
            max-w-4xl
            mx-auto
          "
        >
          {[
            {
              value: "20+",
              label: "Projects Built",
            },

            {
              value: "MERN",
              label: "Tech Stack",
            },

            {
              value: "AI",
              label: "Integrated Solutions",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-7
              "
            >
              {/* GLOW */}
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-32
                  h-32
                  rounded-full
                  bg-blue-500/10
                  blur-[80px]
                "
              />

              <div className="relative z-10">
                <h3
                  className="
                    text-4xl
                    font-bold
                    text-white
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-2
                    text-gray-400
                  "
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 1,
          }}
          className="
            mt-14
            flex
            items-center
            justify-center
            gap-5
          "
        >
          {/* GITHUB */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="
              w-14
              h-14
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-gray-300
              hover:text-white
              hover:border-blue-500/30
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <Github size={22} />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="
              w-14
              h-14
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-gray-300
              hover:text-white
              hover:border-blue-500/30
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <Linkedin size={22} />
          </a>

          {/* EMAIL */}
          <a
            href="mailto:anishpatnaik45@gmail.com"
            className="
              px-6
              h-14
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              flex
              items-center
              gap-3
              text-gray-300
              hover:text-white
              hover:border-blue-500/30
              transition-all
              duration-300
            "
          >
            <Sparkles size={18} />

            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}