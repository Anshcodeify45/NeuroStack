import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  ArrowRight,
  GithubIcon,
  LinkedinIcon,
  Download,
  Sparkles,
  MousePointer2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#020617]
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

      {/* MAIN GLOW */}
      <div
        className="
          absolute
          top-[-250px]
          left-1/2
          -translate-x-1/2
          w-[800px]
          h-[800px]
          rounded-full
          bg-blue-600/20
          blur-[180px]
        "
      />

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          left-[-120px]
          top-[20%]
          w-[350px]
          h-[350px]
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          right-[-120px]
          bottom-[5%]
          w-[400px]
          h-[400px]
          rounded-full
          bg-indigo-500/20
          blur-[180px]
        "
      />

      {/* ================================================= */}
      {/* FLOATING BLURS */}
      {/* ================================================= */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[18%]
          left-[10%]
          hidden
          lg:block
          w-28
          h-28
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[15%]
          right-[10%]
          hidden
          lg:block
          w-36
          h-36
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP BADGE */}
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
            duration: 0.8,
          }}
          className="flex justify-center"
        >
          <div
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
              shadow-[0_8px_30px_rgba(59,130,246,0.08)]
            "
          >
            <span
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
              Available for Freelance • Remote • Full-Time
            </span>
          </div>
        </motion.div>

        {/* HERO TEXT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center"
        >
          {/* SMALL TITLE */}
          <p
            className="
              mt-10
              text-sm
              uppercase
              tracking-[0.35em]
              text-blue-400
              font-medium
            "
          >
            Full Stack Developer • AI Enthusiast
          </p>

          {/* MAIN HEADING */}
          <h1
            className="
              mt-6
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[92px]
              font-black
              leading-[0.95]
              tracking-tight
              text-white
            "
          >
            Crafting{" "}

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
              Modern
            </span>

            <br />

            Digital Products
          </h1>

          {/* TYPEWRITER */}
          <div
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
                  "Analytics Dashboards",
                  "Automation & Smart Systems",
                ],
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 25,
              }}
            />
          </div>

          {/* DESCRIPTION */}
          <p
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
            I build scalable web applications, AI-integrated
            platforms, and premium digital experiences with
            modern technologies, clean architecture, and
            performance-focused design.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="
            mt-12
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-5
          "
        >
          {/* PRIMARY */}
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
              via-cyan-500
              to-blue-600
              text-white
              font-semibold
              shadow-[0_15px_50px_rgba(59,130,246,0.35)]
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
                bg-white/10
                transition-all
                duration-300
              "
            />
          </a>

          {/* RESUME */}
          <a
            href="/Anish_Patnaik.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
              hover:border-blue-500/30
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

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="
            mt-20
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-6
            max-w-5xl
            mx-auto
          "
        >
          {[
            {
              value: "20+",
              label: "Projects Completed",
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
            <motion.div
              key={index}
              whileHover={{
                y: -6,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
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
                    text-5xl
                    font-black
                    text-white
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-3
                    text-gray-400
                    text-sm
                    tracking-wide
                  "
                >
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================================================= */}
        {/* SOCIALS */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="
            mt-14
            flex
            flex-wrap
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
            <GithubIcon size={22} />
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
            <LinkedinIcon size={22} />
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
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

        {/* ================================================= */}
        {/* SCROLL INDICATOR */}
        {/* ================================================= */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            mt-20
            flex
            flex-col
            items-center
            justify-center
            text-gray-500
          "
        >
          <MousePointer2 size={18} />

          <p
            className="
              mt-2
              text-xs
              tracking-[0.25em]
              uppercase
            "
          >
            Scroll Down
          </p>
        </motion.div>
      </div>
    </section>
  );
}