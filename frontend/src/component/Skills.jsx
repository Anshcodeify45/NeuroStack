import Reveal from "../component/Reveal";

export default function Skills() {
  const skills = [
    {
      category: "Data & Analytics",
      items: [
        { name: "Excel", level: 85 },
        { name: "SQL", level: 75 },
        { name: "Power BI", level: 70 },
        { name: "Data Cleaning", level: 80 },
      ],
    },
    {
      category: "Full Stack Development",
      items: [
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      category: "Tools & Engineering",
      items: [
        { name: "Git & GitHub", level: 80 },
        { name: "Postman", level: 75 },
        { name: "REST APIs", level: 80 },
        { name: "Problem Solving", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-indigo-600/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
            Skills & Expertise
          </h2>
        </Reveal>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          Practical, project-based skills across data analytics, full-stack development, and modern engineering tools.
        </p>

        {/* Grid */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">

          {skills.map((group, index) => (
            <Reveal key={index}>

              <div className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/40 transition">

                {/* Category */}
                <h3 className="text-white font-semibold text-lg mb-6 group-hover:text-blue-400 transition">
                  {group.category}
                </h3>

                {/* Skills */}
                <div className="space-y-6">

                  {group.items.map((skill, i) => (
                    <div key={i}>

                      {/* Label */}
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}