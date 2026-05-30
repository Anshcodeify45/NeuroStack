import Reveal from "../component/Reveal";
import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Database,
  BrainCircuit,
  Sparkles,
  Code2,
  Cpu,
  Network,
  Wrench,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe size={26} />,
      gradient: "from-cyan-500 to-blue-500",
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
        "Framer Motion",
      ],
    },

    {
      title: "Backend",
      icon: <Server size={26} />,
      gradient: "from-violet-500 to-fuchsia-500",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "JWT",
      ],
    },

    {
      title: "Database",
      icon: <Database size={26} />,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        "MongoDB",
        "Mongoose",
        "Database Design",
        "Aggregation",
        "Optimization",
      ],
    },

    {
      title: "AI & Automation",
      icon: <BrainCircuit size={26} />,
      gradient: "from-emerald-500 to-cyan-500",
      skills: [
        "OpenAI APIs",
        "Prompt Engineering",
        "Chatbots",
        "AI Workflows",
        "Automation",
      ],
    },

    {
      title: "Development Tools",
      icon: <Wrench size={26} />,
      gradient: "from-orange-500 to-amber-500",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Deployment",
      ],
    },

    {
      title: "Core Concepts",
      icon: <Cpu size={26} />,
      gradient: "from-pink-500 to-rose-500",
      skills: [
        "Problem Solving",
        "Data Structures",
        "API Integration",
        "System Design",
        "Debugging",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-[#030712] overflow-hidden"
    >
      {/* Background */}
      <div
          className="
            absolute
            inset-0

            opacity-[0.03]

            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

            bg-[size:70px_70px]
          "
        />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center">
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                text-cyan-300
                text-sm
                mb-6
              "
            >
              <Sparkles size={16} />
              Technical Skills
            </div>

           <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Building With Modern
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
              Modern technologies and tools used to build scalable web
              applications, SaaS products, APIs, and AI-powered solutions.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Reveal key={index}>
             <motion.div
  whileHover={{
    y: -15,
    scale: 1.03,
  }}
  transition={{ duration: 0.35 }}
  className="
    group
    relative
    overflow-hidden

    h-full
    min-h-[360px]

    rounded-[32px]

    border
    border-white/10

    bg-white/[0.04]

    backdrop-blur-3xl

    p-8

    hover:border-cyan-500/30

    transition-all
    duration-500
  "
>
  {/* Glow */}
  <div
    className={`
      absolute
      inset-0

      opacity-0
      group-hover:opacity-20

      transition-all
      duration-700

      bg-gradient-to-br
      ${category.gradient}

      blur-3xl
    `}
  />

  {/* Floating Orb */}
  <div
    className={`
      absolute
      -top-20
      -right-20

      w-40
      h-40

      rounded-full

      bg-gradient-to-r
      ${category.gradient}

      opacity-10

      blur-3xl
    `}
  />

  {/* Border Highlight */}
  <div
    className="
      absolute
      inset-0

      rounded-[32px]

      border

      border-transparent

      group-hover:border-cyan-500/20

      transition-all
      duration-500
    "
  />

  <div className="relative z-10 flex flex-col h-full">
    {/* ICON */}
    <div
      className={`
        w-16
        h-16

        rounded-2xl

        flex
        items-center
        justify-center

        text-white

        bg-gradient-to-r
        ${category.gradient}

        shadow-lg
      `}
    >
      {category.icon}
    </div>

    {/* TITLE */}
    <h3
      className="
        mt-6

        text-2xl
        font-semibold

        text-white
      "
    >
      {category.title}
    </h3>

    {/* BADGE */}
    <div
      className="
        mt-3

        inline-flex
        items-center

        w-fit

        px-3
        py-1

        rounded-full

        border
        border-cyan-500/20

        bg-cyan-500/10

        text-cyan-300
        text-xs
        font-medium
      "
    >
      Professional Expertise
    </div>

    {/* SKILLS */}
    <div className="mt-6 flex flex-wrap gap-3">
      {category.skills.map((skill) => (
        <span
          key={skill}
          className="
            px-4
            py-2

            rounded-full

            border
            border-white/10

            bg-white/[0.05]

            backdrop-blur-xl

            text-gray-300
            text-sm
            font-medium

            hover:border-cyan-500/30
            hover:text-cyan-300
            hover:bg-cyan-500/10

            transition-all
            duration-300
          "
        >
          {skill}
        </span>
      ))}
    </div>

    {/* FOOTER */}
    <div className="mt-auto pt-8">
      <div
        className="
          flex
          items-center
          gap-2

          text-cyan-300
          text-sm
          font-medium
        "
      >
        Production Ready Skills
      </div>
    </div>
  </div>
</motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "Tailwind",
            "OpenAI",
            "REST APIs",
            "GitHub",
          ].map((tech) => (
            <div
              key={tech}
              className="
                px-5 py-3
                rounded-2xl
                border border-cyan-500/20
                bg-cyan-500/10
                text-cyan-300
                font-medium
              "
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}