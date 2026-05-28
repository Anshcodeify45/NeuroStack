import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      title: "Full Stack Development",
      icon: "💻",
      desc:
        "React • Node.js • Express • MongoDB • REST APIs • Authentication",
    },

    {
      title: "Data Analytics",
      icon: "📊",
      desc:
        "Excel • SQL • Power BI • Data Visualization • Reporting • Insights",
    },

    {
      title: "AI Integration",
      icon: "🤖",
      desc:
        "OpenAI API • AI Automation • Prompt Engineering • SaaS Systems",
    },
  ];

  const stats = [
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
      label: "Powered Solutions",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
        px-6
        bg-[#050816]
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      <div
        className="
          absolute
          top-[-120px]
          left-[-100px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-blue-600/10
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-[-140px]
          right-[-120px]
          w-[380px]
          h-[380px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      {/* ================= MAIN ================= */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              text-sm
              text-gray-300
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-cyan-400
                animate-pulse
              "
            />

            About Me
          </div>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              text-white
            "
          >
            Building Modern &
            <br />

            <span
              className="
                bg-gradient-to-r
                from-blue-400
                via-cyan-300
                to-indigo-400
                text-transparent
                bg-clip-text
              "
            >
              Intelligent Digital Products
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-gray-400
              leading-relaxed
              text-base
              md:text-lg
            "
          >
            Passionate about building scalable web
            applications, AI-powered systems, and
            modern digital experiences using the
            latest technologies.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div
          className="
            mt-20
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              flex
              justify-center
            "
          >
            {/* GLOW */}
            <div
              className="
                absolute
                w-[260px]
                h-[260px]
                rounded-full
                bg-blue-500/20
                blur-[90px]
              "
            />

            {/* RING 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[320px]
                h-[320px]
                rounded-full
                border
                border-dashed
                border-blue-500/20
              "
            />

            {/* RING 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[370px]
                h-[370px]
                rounded-full
                border
                border-white/5
              "
            />

            {/* IMAGE CARD */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="
                relative
                w-[260px]
                sm:w-[300px]
                md:w-[340px]
                rounded-[38px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                overflow-hidden
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              "
            >
              {/* LIGHT */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-white/10
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />

              {/* IMAGE */}
              <motion.img
                src="/Anish.png"
                alt="Anish Patnaik"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10
                  w-full
                  h-full
                  object-contain
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#050816]
                  via-transparent
                  to-transparent
                  opacity-70
                "
              />

              {/* BADGE */}
              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  px-5
                  py-2.5
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  backdrop-blur-xl
                  text-white
                  text-sm
                  font-medium
                  whitespace-nowrap
                "
              >
                Full Stack Developer • AI Enthusiast
              </div>
            </motion.div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                top-6
                -left-2
                md:-left-10
                hidden
                md:flex
                items-center
                gap-3
                px-5
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                backdrop-blur-xl
                shadow-xl
              "
            >
              <div
                className="
                  w-3
                  h-3
                  rounded-full
                  bg-green-400
                  animate-pulse
                "
              />

              <div>
                <p
                  className="
                    text-white
                    text-sm
                    font-semibold
                  "
                >
                  Open to Opportunities
                </p>

                <p
                  className="
                    text-xs
                    text-gray-400
                  "
                >
                  Full Time • Freelance
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* INTRO */}
            <div
              className="
                space-y-5
                text-gray-400
                leading-relaxed
                text-[15px]
                md:text-base
              "
            >
              <p>
                I’m a{" "}
                <span className="text-white font-semibold">
                  Full Stack Developer
                </span>{" "}
                passionate about creating modern,
                scalable, and user-focused digital
                products.
              </p>

              <p>
                My expertise includes{" "}
                <span className="text-white font-semibold">
                  MERN Stack Development,
                  Data Analytics, and AI Integration
                </span>
                , allowing me to build smart and
                efficient systems.
              </p>

              <p>
                I enjoy transforming ideas into
                impactful applications with clean UI,
                powerful backend systems, and seamless
                user experiences.
              </p>

              <p>
                Focused on continuous learning,
                innovation, and building products that
                solve real-world problems.
              </p>
            </div>

            {/* STATS */}
            <div
              className="
                grid
                grid-cols-3
                gap-4
              "
            >
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    p-5
                    text-center
                  "
                >
                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-white
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      md:text-sm
                      text-gray-400
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* SKILLS */}
            <div className="space-y-5">
              {skills.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.01,
                  }}
                  transition={{ duration: 0.25 }}
                  className="
                    relative
                    overflow-hidden
                    p-6
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    hover:border-blue-500/30
                    transition-all
                    duration-300
                  "
                >
                  {/* CARD GLOW */}
                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      w-40
                      h-40
                      bg-blue-500/10
                      blur-[90px]
                      rounded-full
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-start
                      gap-4
                    "
                  >
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-blue-500/10
                        flex
                        items-center
                        justify-center
                        text-2xl
                        shrink-0
                      "
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h3
                        className="
                          text-white
                          font-semibold
                          text-lg
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-7
                          text-gray-400
                        "
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}