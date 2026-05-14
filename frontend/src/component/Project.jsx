import Reveal from "../component/Reveal";

export default function Projects() {
  const projects = [
    {
      title: "AI Resume Analyzer",
      description:
        "AI-powered tool that analyzes resumes, scores skills, and suggests improvements based on job roles.",
      tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
      type: "AI Product",
      featured: true,
      live: "https://resume-screening-app-ttvu.onrender.com/",
      github: "",
    },
    {
      title: "ChatSphere – AI Chat App",
      description:
        "Real-time chat application with AI-powered responses for intelligent conversations and assistance.",
      tech: ["React", "Node.js", "Socket.io", "AI Integration"],
      type: "AI Communication",
      featured: true,
      live: "https://chat-sphere-iota-sepia.vercel.app/",
      github: "",
    },
    {
      title: "Client Feedback Analytics",
      description:
        "Full-stack analytics platform where clients can register, submit feedback, and view insights through dashboards.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      type: "Full Stack App",
      featured: true,
      live: "https://clientfeed-analytics.onrender.com/register",
      github: "",
    },
    {
      title: "HR Attrition Dashboard",
      description:
        "Data analytics dashboard to visualize employee attrition trends and business insights.",
      tech: ["Power BI", "Excel", "Data Analysis"],
      type: "Data Analytics",
      featured: false,
      live: "",
      github: "https://github.com/Anshcodeify45/Hr_Attrition_PowerBi",
    },
    {
      title: "Pokémon Explorer",
      description:
        "Interactive Pokémon explorer using API integration with search, filters, and dynamic UI.",
      tech: ["React", "API Integration", "CSS"],
      type: "Frontend App",
      featured: false,
      live: "https://pokemonexplore.onrender.com/",
      github: "",
    },
    {
      title: "Quote Generator App",
      description:
        "A modern web app that generates inspirational quotes with clean UI and smooth experience.",
      tech: ["React", "API Integration", "Tailwind CSS"],
      type: "Frontend App",
      featured: false,
      live: "https://quote-app-soullines.onrender.com/",
      github: "",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 px-6 relative bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-600/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-[-160px] right-[-120px] w-[500px] h-[500px] bg-indigo-600/10 blur-[160px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center tracking-tight">
            Featured Projects
          </h2>
        </Reveal>

        <p className="text-gray-400 text-center mt-5 max-w-2xl mx-auto text-base md:text-lg">
          A collection of real-world AI, data, and full-stack applications built to solve meaningful problems.
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <Reveal key={index}>

              <div
                className={`group relative p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  project.featured
                    ? "border-blue-500/40 bg-white/5"
                    : "border-white/10 bg-white/5"
                }`}
              >

                {/* Glow hover effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-600/10 to-transparent blur-2xl"></div>

                <div className="relative z-10">

                  {/* Type + Badge */}
                  <div className="flex items-center justify-between">

                    <span className="text-xs uppercase tracking-widest text-blue-400">
                      {project.type}
                    </span>

                    {project.featured && (
                      <span className="text-xs px-2 py-1 rounded-full border border-green-400/30 text-green-400">
                        Featured
                      </span>
                    )}

                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl font-semibold mt-4 group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full border border-white/10 text-gray-300 hover:border-blue-500/40 transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-6 flex items-center justify-between">

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 transition font-medium"
                      >
                        Live Demo →
                      </a>
                    ) : (
                      <span className="text-sm text-gray-600">No Live</span>
                    )}

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition"
                      >
                        Code →
                      </a>
                    ) : (
                      <span className="text-sm text-gray-600">Private</span>
                    )}

                  </div>

                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}