import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-24
        px-6
        bg-[#050816]
      "
    >
      {/* BACKGROUND GLOWS */}
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

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]

          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >
          <h2
            className="
              text-4xl
              md:text-5xl

              font-bold

              text-white
            "
          >
            About Me
          </h2>

          <p
            className="
              mt-4

              text-gray-400

              max-w-2xl
              mx-auto

              leading-relaxed
            "
          >
            Passionate about building scalable digital
            products powered by AI, automation, and
            modern web technologies.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div
          className="
            mt-20

            grid
            lg:grid-cols-2

            gap-16
            items-center
          "
        >
          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative

              flex
              justify-center
            "
          >
            {/* MAIN GLOW */}
            <div
              className="
                absolute

                w-[340px]
                h-[340px]

                rounded-full

                bg-blue-500/20

                blur-[100px]

                animate-pulse
              "
            />

            {/* ROTATING RING */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute

                w-[380px]
                h-[380px]

                rounded-full

                border
                border-dashed
                border-blue-500/20
              "
            />

            {/* SECOND RING */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute

                w-[430px]
                h-[430px]

                rounded-full

                border
                border-white/5
              "
            />

            {/* IMAGE CARD */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative

                w-[300px]
                sm:w-[360px]

                rounded-[40px]

                border
                border-white/10

                bg-white/[0.03]

                backdrop-blur-2xl

                overflow-hidden

                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              "
            >
              {/* TOP LIGHT */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-b
                  from-white/10
                  to-transparent

                  pointer-events-none
                "
              />

              {/* IMAGE */}
              <motion.img
                src="/Anish.png"
                alt="Anish Patnaik"
                animate={{
                  y: [0, -10, 0],
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

                  object-cover
                "
              />

              {/* BOTTOM BADGE */}
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

                  shadow-lg
                "
              >
                Full Stack Developer • Data Analyst
              </div>
            </motion.div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                top-10
                -left-6

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
                  Available for Work
                </p>

                <p
                  className="
                    text-xs
                    text-gray-400
                  "
                >
                  Freelance & Remote
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="space-y-8"
          >
            {/* STORY */}
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
                I am a{" "}
                <span className="text-white font-semibold">
                  Data Analyst & Full Stack Developer
                </span>{" "}
                focused on building scalable,
                real-world web applications powered
                by data and automation.
              </p>

              <p>
                With{" "}
                <span className="text-white font-semibold">
                  8+ years of teaching experience
                </span>{" "}
                and running my own institute, I
                developed strong communication,
                leadership, and problem-solving
                skills that now power my development
                journey.
              </p>

              <p>
                I transitioned into tech and
                specialized in the{" "}
                <span className="text-white font-semibold">
                  MERN stack, data analysis, and AI
                  tools
                </span>
                , building applications that combine
                logic, design, and intelligence.
              </p>

              <p>
                My goal is to create systems that
                merge{" "}
                <span className="text-white font-semibold">
                  data + AI + web development
                </span>{" "}
                to deliver real business value and
                automation.
              </p>
            </div>

            {/* SKILLS */}
            <div className="space-y-5">
              {/* CARD */}
              {[
                {
                  title: "📊 Data Analyst",
                  desc:
                    "Excel • SQL • Power BI • Data Visualization • EDA • Reporting",
                },

                {
                  title:
                    "💻 Full Stack Developer",
                  desc:
                    "React • Node.js • Express • MongoDB • REST APIs • Auth Systems",
                },

                {
                  title: "🤖 AI Integration",
                  desc:
                    "OpenAI API • Prompt Engineering • AI Tools • Automation Systems",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    relative
                    overflow-hidden

                    p-6

                    rounded-[28px]

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

                  <div className="relative z-10">
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
                        text-gray-400
                        text-sm

                        mt-3
                        leading-7
                      "
                    >
                      {item.desc}
                    </p>
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