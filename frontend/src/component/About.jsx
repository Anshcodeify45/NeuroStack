import { motion } from "framer-motion";
import {
  Code2,
  Database,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  const skills = [
    {
      title: "Full Stack Development",
      icon: <Code2 size={24} />,
      desc:
        "Building scalable web applications using React, Node.js, Express, MongoDB, APIs & Authentication.",
    },

    {
      title: "Data Analytics",
      icon: <Database size={24} />,
      desc:
        "Creating data-driven insights with SQL, Excel, Power BI, dashboards & visualization systems.",
    },

    {
      title: "AI Integration",
      icon: <BrainCircuit size={24} />,
      desc:
        "Integrating OpenAI APIs, AI automation, prompt engineering & intelligent workflows.",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#030712]
        py-24
        lg:py-32
        px-6
      "
    >
      {/* ================= BACKGROUND ================= */}

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

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-blue-600/20
          blur-[180px]
          rounded-full
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-cyan-500/10
          blur-[180px]
          rounded-full
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= MAIN GRID ================= */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* ===================================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* SMALL TAG */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/5
                backdrop-blur-xl
              "
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />

              <p className="text-sm tracking-[3px] text-gray-300 uppercase">
                About Me
              </p>
            </div>

            {/* HEADING */}
            <h2
              className="
                mt-8
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-[1.05]
                text-white
              "
            >
              Building Digital
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  via-cyan-300
                  to-blue-600
                  text-transparent
                  bg-clip-text
                "
              >
                Products
              </span>

              <br />

              That Make Impact
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-xl
                text-gray-400
                text-lg
                leading-relaxed
              "
            >
              I’m a Full Stack Developer and Data
              Analyst focused on building scalable,
              modern, and AI-powered digital
              experiences with clean UI and powerful
              backend systems.
            </p>

            {/* STATS */}
            <div
              className="
                mt-10
                grid
                grid-cols-3
                gap-5
              "
            >
              {[
                {
                  value: "20+",
                  label: "Projects",
                },

                {
                  value: "MERN",
                  label: "Stack",
                },

                {
                  value: "AI",
                  label: "Solutions",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-6
                    text-center
                    transition-all
                    duration-300
                  "
                >
                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-white
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-400
                    "
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* SKILLS */}
            <div className="mt-10 space-y-5">
              {skills.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 10,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-6
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                  "
                >
                  {/* GLOW */}
                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      w-40
                      h-40
                      bg-blue-500/10
                      blur-[100px]
                      rounded-full
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div className="flex gap-4">
                      {/* ICON */}
                      <div
                        className="
                          w-14
                          h-14
                          rounded-2xl
                          bg-gradient-to-br
                          from-blue-500
                          to-cyan-400
                          flex
                          items-center
                          justify-center
                          text-white
                          shadow-lg
                          shadow-blue-500/20
                        "
                      >
                        {item.icon}
                      </div>

                      {/* TEXT */}
                      <div>
                        <h3
                          className="
                            text-xl
                            font-semibold
                            text-white
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-2
                            text-gray-400
                            leading-7
                            text-sm
                            max-w-lg
                          "
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* ARROW */}
                    <div
                      className="
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-300
                        text-white
                      "
                    >
                      <ArrowUpRight size={22} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="
                mt-10
                flex
                items-center
                gap-6
                flex-wrap
              "
            >
              <button
                className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  font-semibold
                  shadow-lg
                  shadow-blue-500/20
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Let’s Connect
              </button>

              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                <p className="text-gray-400">
                  Available for Freelance & Full Time
                </p>
              </div>
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* RIGHT IMAGE SECTION */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* OUTER CARD */}
            <div
              className="
                relative
                w-full
                max-w-[620px]
                h-[820px]
                rounded-[40px]
                border
                border-white/10
                bg-gradient-to-b
                from-white/[0.06]
                to-white/[0.02]
                backdrop-blur-2xl
                overflow-hidden
                shadow-[0_30px_120px_rgba(0,0,0,0.6)]
              "
            >
              {/* INNER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_70%)]
                "
              />

              {/* CIRCLE RINGS */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    w-[500px]
                    h-[500px]
                    rounded-full
                    border
                    border-dashed
                    border-blue-500/20
                  "
                />
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    w-[650px]
                    h-[650px]
                    rounded-full
                    border
                    border-white/5
                  "
                />
              </motion.div>

              {/* STATUS CARD */}
              <div
                className="
                  absolute
                  top-8
                  right-8
                  z-20
                  flex
                  items-center
                  gap-3
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0b1220]/80
                  backdrop-blur-xl
                "
              >
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Open to Opportunities
                  </h4>

                  <p className="text-xs text-gray-400">
                    Full Time • Freelance
                  </p>
                </div>
              </div>

              {/* IMAGE */}
              <motion.img
                src="/Anish.png"
                alt="Anish"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  h-[92%]
                  object-contain
                  z-10
                  drop-shadow-[0_20px_80px_rgba(59,130,246,0.35)]
                "
              />

              {/* BOTTOM INFO CARD */}
              <div
                className="
                  absolute
                  bottom-8
                  left-1/2
                  -translate-x-1/2
                  w-[85%]
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#0b1220]/70
                  backdrop-blur-2xl
                  p-6
                  flex
                  items-center
                  gap-5
                  z-20
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    text-blue-400
                  "
                >
                  <Code2 size={28} />
                </div>

                <div>
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-white
                    "
                  >
                    Full Stack Developer
                  </h3>

                  <p
                    className="
                      mt-1
                      text-gray-400
                    "
                  >
                    Data Analyst • AI Enthusiast
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}