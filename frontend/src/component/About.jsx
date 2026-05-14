export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-indigo-600/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          About Me
        </h2>

        <p className="text-gray-400 text-center mt-3 max-w-2xl mx-auto">
          A brief introduction about my journey, skills, and what I build.
        </p>

        {/* Content Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT - STORY */}
          <div className="space-y-5 text-gray-400 leading-relaxed text-[15px] md:text-base">

            <p>
              I am a <span className="text-white font-medium">Data Analyst & Full Stack Developer</span> focused on building
              scalable, real-world web applications powered by data and automation.
            </p>

            <p>
              With <span className="text-white font-medium">8+ years of teaching experience</span> and running my own institute,
              I developed strong communication, leadership, and problem-solving skills that now power my development journey.
            </p>

            <p>
              I transitioned into tech and specialized in the <span className="text-white font-medium">MERN stack, data analysis, and AI tools</span>,
              building applications that combine logic, design, and intelligence.
            </p>

            <p>
              My goal is to create systems that merge <span className="text-white font-medium">data + AI + web development </span>
               to deliver real business value and automation.
            </p>

          </div>

          {/* RIGHT - SKILLS CARDS */}
          <div className="space-y-5">

            {/* Card 1 */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/40 transition">
              <h3 className="text-white font-semibold text-lg">📊 Data Analyst</h3>
              <p className="text-gray-400 text-sm mt-2">
                Excel • SQL • Power BI • Data Visualization • EDA • Reporting
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/40 transition">
              <h3 className="text-white font-semibold text-lg">💻 Full Stack Developer</h3>
              <p className="text-gray-400 text-sm mt-2">
                React • Node.js • Express • MongoDB • REST APIs • Auth Systems
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/40 transition">
              <h3 className="text-white font-semibold text-lg">🤖 AI Integration</h3>
              <p className="text-gray-400 text-sm mt-2">
                OpenAI API • Prompt Engineering • AI Tools • Automation Systems
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}