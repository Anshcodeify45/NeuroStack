import Reveal from "../component/Reveal";
import { motion } from "framer-motion";

import {
  Database,
  BarChart3,
  FileSpreadsheet,
  BrushCleaning,
  Code2,
  Server,
  Globe,
  Cpu,
  Wrench,
  Network,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Data & Analytics",
      icon: <BarChart3 size={22} />,
      gradient: "from-blue-500 to-cyan-500",
      items: [
        {
          name: "Excel",
          level: 85,
          icon: <FileSpreadsheet size={18} />,
        },
        {
          name: "SQL",
          level: 75,
          icon: <Database size={18} />,
        },
        {
          name: "Power BI",
          level: 70,
          icon: <BarChart3 size={18} />,
        },
        {
          name: "Data Cleaning",
          level: 80,
          icon: <BrushCleaning size={18} />,
        },
      ],
    },

    {
      category: "Full Stack Development",
      icon: <Code2 size={22} />,
      gradient: "from-violet-500 to-fuchsia-500",
      items: [
        {
          name: "React",
          level: 80,
          icon: <Globe size={18} />,
        },
        {
          name: "Node.js",
          level: 75,
          icon: <Server size={18} />,
        },
        {
          name: "Express",
          level: 70,
          icon: <Cpu size={18} />,
        },
        {
          name: "MongoDB",
          level: 70,
          icon: <Database size={18} />,
        },
      ],
    },

    {
      category: "Tools & Engineering",
      icon: <Sparkles size={22} />,
      gradient: "from-emerald-500 to-teal-500",
      items: [
        {
          name: "Git & GitHub",
          level: 80,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.93c.58.1.79-.25.79-.56v-2.02c-3.26.71-3.95-1.57-3.95-1.57-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.77 2.72 1.26 3.38.97.1-.75.41-1.26.74-1.55-2.6-.3-5.33-1.3-5.33-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.5.11-3.13 0 0 .98-.31 3.2 1.2a11.2 11.2 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.63.23 2.83.11 3.13.75.82 1.2 1.87 1.2 3.15 0 4.51-2.73 5.5-5.34 5.79.42.36.8 1.09.8 2.2v3.27c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          ),
        },
        {
          name: "Postman",
          level: 75,
          icon: <Wrench size={18} />,
        },
        {
          name: "REST APIs",
          level: 80,
          icon: <Network size={18} />,
        },
        {
          name: "Problem Solving",
          level: 85,
          icon: <BrainCircuit size={18} />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-150px] left-[-120px] w-[420px] h-[420px] bg-blue-600/10 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-violet-600/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <Reveal>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                text-blue-400
                text-sm
                mb-6
              "
            >
              <Sparkles size={16} />
              Technical Skills
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Skills &
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Expertise
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
              A combination of full-stack development, analytics, APIs, and
              modern engineering tools used to build scalable applications.
            </p>
          </div>
        </Reveal>

        {/* SKILL GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <Reveal key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
                className="
                  group
                  relative
                  rounded-[30px]
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-white/[0.08]
                  to-white/[0.03]
                  backdrop-blur-2xl
                  overflow-hidden
                  p-8
                  hover:border-blue-500/20
                  transition-all
                  duration-500
                "
              >
                {/* Glow */}
                <div
                  className={`
                    absolute inset-0 opacity-0
                    group-hover:opacity-20
                    transition duration-700
                    bg-gradient-to-br ${group.gradient}
                    blur-3xl
                  `}
                ></div>

                {/* TOP */}
                <div className="relative z-10 flex items-center gap-4 mb-10">
                  <div
                    className={`
                      w-14 h-14 rounded-2xl
                      flex items-center justify-center
                      text-white
                      bg-gradient-to-r ${group.gradient}
                      shadow-lg
                    `}
                  >
                    {group.icon}
                  </div>

                  <div>
                    <h3 className="text-white text-xl font-semibold">
                      {group.category}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Professional Toolset
                    </p>
                  </div>
                </div>

                {/* SKILLS */}
                <div className="space-y-7 relative z-10">
                  {group.items.map((skill, i) => (
                    <div key={i}>
                      {/* LABEL */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              w-10 h-10 rounded-xl
                              bg-white/[0.05]
                              border border-white/10
                              flex items-center justify-center
                              text-blue-400
                            "
                          >
                            {skill.icon}
                          </div>

                          <span className="text-gray-200 font-medium">
                            {skill.name}
                          </span>
                        </div>

                        <span className="text-sm text-gray-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      {/* PROGRESS BAR */}
                      <div className="relative w-full h-3 bg-white/[0.05] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                          className={`
                            absolute left-0 top-0 h-full rounded-full
                            bg-gradient-to-r ${group.gradient}
                          `}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* BORDER EFFECT */}
                <div
                  className="
                    absolute inset-0 rounded-[30px]
                    border border-transparent
                    group-hover:border-blue-500/20
                    transition duration-500
                  "
                ></div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}