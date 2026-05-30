import Reveal from "../component/Reveal";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Layers3,
  Activity,
  ShieldCheck,
  Rocket,
  ExternalLink,
  Brain,
  MessageSquare,
  BarChart3,
} from "lucide-react";

export default function Project() {
  const projects = [
    {
      title: "Neuro-SaaS",
      subtitle: "AI Analytics Dashboard",
      icon: <Brain size={24} />,
      category: "AI SaaS",
      description:
        "Enterprise-grade AI analytics dashboard featuring authentication, activity monitoring, advanced visualizations and premium SaaS architecture.",
      image: "/Saas.png",
      tech: ["Authentication", "Analytics", "Dashboard", "Responsive UI", "AI Features"],
      metrics: [
        { label: "Performance", value: "98%" },
        { label: "Responsive", value: "100%" },
        { label: "Pages", value: "15+" },
      ],
      stats: [
        { icon: <Layers3 size={16} />, label: "Type", value: "SaaS" },
        { icon: <Rocket size={16} />, label: "Status", value: "Live" },
      ],
      live: "https://neuro-saas.vercel.app/",
      github: "https://github.com/Anshcodeify45/Neuro_Saas",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    },
    {
      title: "ChatSphere",
      subtitle: "AI Chat Application",
      icon: <MessageSquare size={24} />,
      category: "AI Chat",
      description:
        "Modern AI-powered chat platform with real-time messaging, intelligent conversations and seamless user interactions.",
      image: "/ChatSphere.png",
      tech: ["Real Time Chat", "AI Assistant", "Responsive UI", "Messaging", "Socket.io"],
      metrics: [
        { label: "Realtime", value: "24/7" },
        { label: "Users", value: "1K+" },
        { label: "Speed", value: "Fast" },
      ],
      stats: [
        { icon: <Activity size={16} />, label: "Type", value: "Chat App" },
        { icon: <Rocket size={16} />, label: "Status", value: "Live" },
      ],
      live: "https://chat-sphere-iota-sepia.vercel.app/",
      github: "https://github.com/Anshcodeify45/ChatSphere",
      gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    },
    {
      title: "Client Feedback Dashboard",
      subtitle: "Analytics Platform",
      icon: <BarChart3 size={24} />,
      category: "Analytics",
      description:
        "Full-stack feedback analytics solution enabling businesses to collect, analyze and visualize customer satisfaction.",
      image: "/clientfeedback.png",
      tech: ["Analytics", "Feedback System", "Dashboard", "Authentication", "Data Visualization"],
      metrics: [
        { label: "Reports", value: "50+" },
        { label: "Insights", value: "Smart" },
        { label: "Growth", value: "+40%" },
      ],
      stats: [
        { icon: <ShieldCheck size={16} />, label: "Type", value: "Analytics" },
        { icon: <Rocket size={16} />, label: "Status", value: "Live" },
      ],
      live: "https://clientfeed-analytics.onrender.com/",
      github: "https://github.com/Anshcodeify45/Client_feedback-and-Analytic-system",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030712] py-32 px-6"
    >
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute top-[-250px] left-[-150px] w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-250px] right-[-150px] w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
              <Sparkles size={16} />
              Featured Projects
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Recent
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Work
              </span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-400">
              Premium full-stack applications, AI products, SaaS platforms and
              analytics solutions built with performance, scalability and modern UX.
            </p>
          </div>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92)_0%,rgba(3,7,18,0.98)_100%)] backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700 bg-gradient-to-br ${project.gradient} blur-3xl`} />

              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute top-5 left-5">
                  <span className={`px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.gradient}`}>
                    Featured Project
                  </span>
                </div>

                <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white font-bold">
                  0{index + 1}
                </div>

                <div className="absolute bottom-5 left-5 w-14 h-14 rounded-2xl bg-black/50 backdrop-blur-xl flex items-center justify-center border border-white/10 text-cyan-400">
                  {project.icon}
                </div>

                <div className="absolute bottom-5 right-5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-xl text-xs text-white">
                  {project.category}
                </div>
              </div>

              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                  {project.subtitle}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white group-hover:text-cyan-300 transition-all">
                  {project.title}
                </h3>

                <p className="mt-5 text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <h4 className="text-cyan-400 font-bold">{metric.value}</h4>
                      <p className="text-xs text-gray-500">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  {project.stats.map((item, i) => (
                    <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-cyan-400">{item.icon}</div>
                      <p className="mt-2 text-xs text-gray-500">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-white hover:border-cyan-500/40 transition-all"
                  >
                    Live Demo
                    <ArrowUpRight size={18} />
                  </a>

                  <div className="flex gap-3">
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

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-300 hover:text-cyan-400"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
