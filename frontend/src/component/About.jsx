import { motion } from "framer-motion";
import {
  Code2,
  Database,
  BrainCircuit,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

export default function About() {
  const skills = [
    {
      title: "Web Application Development",
      icon: <Code2 size={24} />,
      desc: "Building modern business websites, SaaS platforms, admin dashboards, and custom web applications.",
    },
    {
      title: "Backend & API Solutions",
      icon: <Database size={24} />,
      desc: "Developing secure APIs, authentication systems, cloud integrations, and scalable backend architecture.",
    },
    {
      title: "AI-Powered Solutions",
      icon: <BrainCircuit size={24} />,
      desc: "Integrating AI chatbots, automation, intelligent search, and OpenAI-powered experiences.",
    },
  ];

  const stats = [
    { value: "20+", label: "Projects Delivered" },
    { value: "100%", label: "Responsive Design" },
    { value: "24/7", label: "Communication" },
  ];

  const services = [
    "Business Websites",
    "SaaS Dashboards",
    "E-Commerce",
    "Admin Panels",
    "REST APIs",
    "AI Integration",
  ];

  const handleConnect = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030712] py-24 px-6"
    >
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/15 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-600/15 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm uppercase tracking-[3px] text-cyan-300">
                About Me
              </span>
            </div>

            <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Turning Ideas Into
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Scalable Digital
              </span>
              Products
            </h2>

            <p className="mt-8 text-lg text-gray-400 max-w-2xl leading-relaxed">
              I help startups, businesses, and entrepreneurs build modern web
              applications, SaaS platforms, dashboards, and AI-powered
              solutions using React, Node.js, and MongoDB.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {services.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 text-center"
                >
                  <h3 className="text-3xl font-bold text-white">{item.value}</h3>
                  <p className="mt-2 text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-5">
              {skills.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-gray-400 text-sm leading-7">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition text-white" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                onClick={handleConnect}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition"
              >
                Start a Project
              </button>

              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gray-400">
                  Available for Freelance Projects
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[500px] h-[650px] rounded-[40px] border border-white/10 bg-gradient-to-b from-slate-900 to-[#030712] overflow-hidden">

              <div className="absolute top-6 right-6 px-5 py-3 rounded-2xl bg-[#0B1120]/80 border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="text-green-400" size={18} />
                  <span className="text-white text-sm font-medium">
                    Open for Work
                  </span>
                </div>
              </div>

              <div className="absolute top-28 left-6 px-5 py-3 rounded-2xl bg-[#0B1120]/80 border border-cyan-500/20 backdrop-blur-xl">
                <p className="text-cyan-300 text-sm font-medium">
                  Web Apps • SaaS • AI
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Building Modern Solutions
                </p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-cyan-500/20"
                />
              </div>

              <div className="absolute inset-0 flex items-end justify-center">
                <motion.img
                  src="/Ansh.png"
                  alt="Anish"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="h-[560px] object-contain"
                />
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[88%] rounded-[28px] border border-white/10 bg-[#0B1120]/80 backdrop-blur-3xl p-5">
                <h3 className="text-2xl font-semibold text-white">
                  Full Stack Developer
                </h3>
                <p className="mt-2 text-gray-400 text-sm">
                  React • Node.js • MongoDB • AI Integration
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
