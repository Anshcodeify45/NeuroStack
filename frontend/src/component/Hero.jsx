import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-indigo-600/20 blur-[140px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">

        {/* Brand */}
        <div className="mb-6 text-sm tracking-[0.3em] text-gray-400 uppercase">
          NeuroStack
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 border border-white/10 bg-white/5 rounded-full text-sm text-gray-300 backdrop-blur-md">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Open for Freelance & Remote Opportunities
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">
          Building{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            AI-powered
          </span>
          <br />
          digital products that scale
        </h1>

        {/* Typewriter */}
        <div className="mt-6 text-lg md:text-2xl text-gray-300 h-10">
          <Typewriter
            options={{
              strings: [
                "Full Stack MERN Applications",
                "AI Resume Intelligence Systems",
                "Data Analytics Dashboards",
                "Automation & Workflow Tools",
                "Scalable SaaS Platforms",
              ],
              autoStart: true,
              loop: true,
              delay: 45,
            }}
          />
        </div>

        {/* Description */}
        <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          NeuroStack is a modern development brand focused on building AI-powered
          web systems, scalable applications, and data-driven digital solutions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-lg shadow-blue-600/20"
          >
            Explore Work
          </a>

          <a
            href="/ANISH_PATNAIK_RESUME.pdf"
            className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            Download Resume
          </a>

        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-8 text-gray-400 text-sm">

          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:anishpatnaik45@gmail.com"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </div>

      </div>
    </section>
  );
}