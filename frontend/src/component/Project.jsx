import Reveal from "../component/Reveal";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";


export default function Projects() {
  const projects = [
    {
      title: "Neuro-SaaS",
      subtitle: "AI Analytics Dashboard",
      description:
        "Modern AI-powered SaaS dashboard with authentication, analytics, charts, activity tracking, and beautiful responsive UI.",
      image: "/Saas.png",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Framer Motion",
      ],
      live: "https://neuro-saas.vercel.app/",
      github: "https://github.com/Anshcodeify45/Neuro_Saas",
      gradient: "from-blue-500 to-cyan-500",
    },

    {
      title: "ChatSphere",
      subtitle: "AI Chat Application",
      description:
        "Real-time AI chat application with intelligent conversations, smooth messaging experience, and modern interface.",
      image: "/ChatSphere.png",
      tech: ["React", "Socket.io", "Node.js", "AI Integration"],
      live: "https://chat-sphere-iota-sepia.vercel.app/",
      github: "https://github.com/Anshcodeify45/ChatSphere",
      gradient: "from-violet-500 to-fuchsia-500",
    },

    {
      title: "Client Feedback Dashboard",
      subtitle: "Analytics Platform",
      description:
        "Full-stack feedback analytics platform where users can register, submit reviews, and visualize insights through dashboards.",
      image: "/clientfeedback.png",
      tech: ["React", "Express", "MongoDB", "Dashboard UI"],
      live: "https://clientfeed-analytics.onrender.com/",
      github: "https://github.com/Anshcodeify45/Client_feedback-and-Analytic-system",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-violet-600/10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADING */}
        <Reveal>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm mb-6"
            >
              <Sparkles size={16} />
              Featured Work
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Selected
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Projects
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
              A showcase of modern AI, full-stack, and analytics applications
              focused on clean design, performance, and real-world usability.
            </p>
          </div>
        </Reveal>

{/* PROJECT GRID */}
<div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
  {projects.map((project, index) => (
    <Reveal key={index}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35 }}
        className="
          group
          relative
          h-full
          min-h-[720px]
          flex
          flex-col
          rounded-[30px]
          overflow-hidden
          border
          border-white/10
          bg-gradient-to-b
          from-white/[0.08]
          to-white/[0.03]
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(255,255,255,0.03)]
        "
      >
        {/* Gradient Glow */}
        <div
          className={`
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition duration-700
            bg-gradient-to-br ${project.gradient}
            blur-3xl
          `}
        ></div>

        {/* IMAGE */}
        <div className="relative overflow-hidden h-[260px]">
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          {/* Floating Badge */}
          <div className="absolute top-5 left-5">
            <span
              className={`
                px-4 py-1.5
                rounded-full
                text-xs
                font-semibold
                tracking-wide
                text-white
                bg-gradient-to-r ${project.gradient}
                shadow-lg
              `}
            >
              Featured Project
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col flex-1 p-7">
          {/* Subtitle */}
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium">
            {project.subtitle}
          </p>

          {/* Title */}
          <h3
            className="
              text-3xl
              font-bold
              text-white
              mt-3
              leading-tight
              transition
              group-hover:text-blue-400
            "
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="
              text-gray-400
              text-[15px]
              leading-relaxed
              mt-5
              flex-grow
            "
          >
            {project.description}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 mt-7">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="
                  px-3 py-1.5
                  rounded-full
                  text-xs
                  border
                  border-white/10
                  bg-white/[0.05]
                  text-gray-300
                  hover:border-blue-500/40
                  hover:text-white
                  transition
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex items-center justify-between mt-8">
            {/* LIVE BUTTON */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-2xl
                text-sm
                font-semibold
                text-white
                bg-gradient-to-r ${project.gradient}
                hover:scale-105
                transition-all
                duration-300
                shadow-lg
              `}
            >
              Live Demo
              <ArrowUpRight size={18} />
            </a>

            {/* GITHUB BUTTON */}
            <a
              href={project.github}
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
                hover:bg-white/[0.08]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.93c.58.1.79-.25.79-.56v-2.02c-3.26.71-3.95-1.57-3.95-1.57-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.77 2.72 1.26 3.38.97.1-.75.41-1.26.74-1.55-2.6-.3-5.33-1.3-5.33-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.5.11-3.13 0 0 .98-.31 3.2 1.2a11.2 11.2 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.63.23 2.83.11 3.13.75.82 1.2 1.87 1.2 3.15 0 4.51-2.73 5.5-5.34 5.79.42.36.8 1.09.8 2.2v3.27c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Animated Border */}
        <div
          className="
            absolute inset-0
            rounded-[30px]
            border border-transparent
            group-hover:border-blue-500/30
            transition-all duration-500
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