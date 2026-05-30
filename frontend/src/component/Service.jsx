import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Services = [
  {
    title: "Business Websites",
    description:
      "Professional business websites that establish credibility, generate leads, and provide an exceptional user experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Tailwind", "SEO", "Responsive"],
  },
  {
    title: "E-Commerce Development",
    description:
      "Scalable online stores with secure payments, product management, and optimized customer journeys.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Dashboard Development",
    description:
      "Modern dashboards with analytics, reports, charts, and real-time business intelligence.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["Charts", "Analytics", "Admin", "Realtime"],
  },
  {
    title: "MERN Stack Applications",
    description:
      "Full-stack applications built with MongoDB, Express.js, React, and Node.js for performance and scalability.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "API Integration",
    description:
      "Seamless integration of payment gateways, third-party APIs, cloud services, and authentication systems.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    tags: ["REST API", "Auth", "Payments", "Cloud"],
  },
  {
    title: "AI-Powered Web Apps",
    description:
      "Smart applications powered by AI, chatbots, automation, analytics, and modern LLM technologies.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    tags: ["OpenAI", "Chatbots", "Automation", "AI"],
  },
];

export default function Service() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            SERVICES
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
            Solutions Built For
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
            I help startups, businesses, and entrepreneurs build high-quality
            digital products that deliver performance, scalability, and growth.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                {/* Image */}
                <div className="relative overflow-hidden h-60">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 border border-cyan-500/20 text-cyan-300">
                      Premium Solution
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col h-[290px]">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs border border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300"
                    >
                      Request Quote
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Card Number */}
                <div className="absolute top-5 right-5 text-5xl font-bold text-white/5">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h3>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's work together to transform your ideas into a modern,
            scalable, and impactful digital product.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300"
          >
            Let's Talk
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}