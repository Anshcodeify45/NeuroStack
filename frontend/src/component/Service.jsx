import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description:
      "Professional business websites that establish credibility, generate leads, and provide exceptional user experiences.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Tailwind", "SEO", "Responsive"],
  },

  {
    title: "E-Commerce Development",
    description:
      "Scalable online stores with secure payments, inventory management, and conversion-focused experiences.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },

  {
    title: "Dashboard Development",
    description:
      "Interactive dashboards with analytics, reports, KPIs, charts, and real-time business intelligence.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["Charts", "Analytics", "Admin", "Realtime"],
  },

  {
    title: "MERN Stack Applications",
    description:
      "Custom full-stack applications built using MongoDB, Express.js, React, and Node.js.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },

  {
    title: "API Integration",
    description:
      "Third-party API integrations, payment gateways, authentication systems, cloud services, and automation.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    tags: ["REST API", "Auth", "Payments", "Cloud"],
  },

  {
    title: "AI-Powered Web Apps",
    description:
      "Modern AI solutions including chatbots, automation, AI assistants, analytics, and OpenAI integrations.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    tags: ["OpenAI", "Chatbots", "Automation", "AI"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 bg-[#030712] overflow-hidden"
    >
      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* GLOWS */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px]" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              text-cyan-300
              text-sm
              font-medium
            "
          >
            SERVICES
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-bold text-white">
            Solutions For
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
            Helping startups, businesses, and entrepreneurs build scalable,
            modern, and AI-powered digital products that drive growth.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />

              <div
                className="
                  relative
                  h-full
                  min-h-[620px]

                  overflow-hidden

                  rounded-[32px]

                  border
                  border-white/10

                  bg-white/[0.04]

                  backdrop-blur-2xl

                  transition-all
                  duration-500

                  group-hover:border-cyan-500/20
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-56 md:h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-full
                      h-full
                      object-cover

                      transition
                      duration-700

                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span
                      className="
                        px-4
                        py-2

                        rounded-full

                        border
                        border-cyan-500/20

                        bg-cyan-500/10

                        text-cyan-300
                        text-xs
                        font-medium
                      "
                    >
                      Premium Solution
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-4">
                    {service.title}
                  </h3>

                  <p
                    className="
                      text-gray-400
                      text-sm
                      md:text-base
                      leading-7
                      flex-1
                    "
                  >
                    {service.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          px-3
                          py-1.5

                          rounded-full

                          border
                          border-cyan-500/20

                          bg-cyan-500/10

                          text-cyan-300
                          text-xs
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="
                        inline-flex
                        items-center
                        gap-2

                        px-5
                        py-3

                        rounded-xl

                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600

                        text-white
                        font-semibold

                        shadow-lg
                        shadow-cyan-500/20

                        hover:scale-105

                        transition-all
                        duration-300
                      "
                    >
                      Request Quote
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Number */}
                <div className="absolute top-5 right-5 text-5xl font-bold text-white/5">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 text-center"
        >
          <h3 className="text-4xl font-bold text-white">
            Ready To Build Something Amazing?
          </h3>

          <p className="max-w-2xl mx-auto mt-5 text-gray-400">
            Let's transform your idea into a modern, scalable, and
            high-performing digital product.
          </p>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-3

              mt-8

              px-8
              py-4

              rounded-full

              bg-gradient-to-r
              from-cyan-500
              to-blue-600

              text-white
              font-semibold

              hover:scale-105

              transition-all
              duration-300
            "
          >
            Start Your Project
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}