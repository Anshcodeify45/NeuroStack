import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Reveal from "../component/Reveal";

import {
  Mail,
  Phone,
  Send,
  Sparkles,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lv16s0w",
        "template_eidyw9e",
        form.current,
        "Lu4zJRs9mKAsLzy1m"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-180px] left-[-120px] w-[450px] h-[450px] bg-blue-600/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-violet-600/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <Reveal>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                text-blue-400
                text-sm
                mb-6
              "
            >
              <Sparkles size={16} />
              Contact Me
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Let’s Build
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Something Great
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
              Open to freelance projects, internships, collaborations, and
              full-stack or AI-related opportunities.
            </p>
          </div>
        </Reveal>

        {/* MAIN GRID */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <Reveal>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="
                relative
                rounded-[32px]
                border
                border-white/10
                bg-gradient-to-b
                from-white/[0.08]
                to-white/[0.03]
                backdrop-blur-2xl
                overflow-hidden
                p-8 md:p-10
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 opacity-0 hover:opacity-100 transition duration-700"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white leading-tight">
                  Ready to work together?
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  Feel free to reach out for collaborations, freelance
                  opportunities, or just to connect and discuss ideas.
                </p>

                {/* CONTACT CARDS */}
                <div className="mt-10 space-y-5">
                  {/* EMAIL */}
                  <div
                    className="
                      flex items-center gap-4
                      p-5 rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                    "
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Mail size={24} />
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Email</p>

                      <a
                        href="mailto:anishpatnaik45@gmail.com"
                        className="text-white hover:text-blue-400 transition"
                      >
                        anishpatnaik45@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div
                    className="
                      flex items-center gap-4
                      p-5 rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                    "
                  >
                    <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                      <Phone size={24} />
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Phone</p>

                      <p className="text-white">
                        Available on request
                      </p>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div
                    className="
                      flex items-center gap-4
                      p-5 rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                    "
                  >
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <MapPin size={24} />
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">Location</p>

                      <p className="text-white">
                        Bhubaneswar, Odisha, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* RIGHT SIDE - FORM */}
          <Reveal>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="
                relative
                rounded-[32px]
                border
                border-white/10
                bg-gradient-to-b
                from-white/[0.08]
                to-white/[0.03]
                backdrop-blur-2xl
                overflow-hidden
                p-8 md:p-10
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/5 opacity-0 hover:opacity-100 transition duration-700"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white">
                  Send a Message
                </h3>

                <p className="text-gray-400 mt-3">
                  I’ll get back to you as soon as possible.
                </p>

                {/* FORM */}
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="space-y-6 mt-8"
                >
                  {/* NAME */}
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="user_name"
                      placeholder="Enter your name"
                      required
                      className="
                        w-full
                        bg-white/[0.03]
                        border border-white/10
                        rounded-2xl
                        px-5 py-4
                        text-white
                        outline-none
                        focus:border-blue-500/40
                        focus:bg-white/[0.05]
                        transition
                      "
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="user_email"
                      placeholder="Enter your email"
                      required
                      className="
                        w-full
                        bg-white/[0.03]
                        border border-white/10
                        rounded-2xl
                        px-5 py-4
                        text-white
                        outline-none
                        focus:border-blue-500/40
                        focus:bg-white/[0.05]
                        transition
                      "
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Write your message..."
                      required
                      className="
                        w-full
                        bg-white/[0.03]
                        border border-white/10
                        rounded-2xl
                        px-5 py-4
                        text-white
                        outline-none
                        focus:border-blue-500/40
                        focus:bg-white/[0.05]
                        transition
                        resize-none
                      "
                    ></textarea>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-8
                      py-4
                      rounded-2xl
                      bg-gradient-to-r
                      from-blue-500
                      to-cyan-500
                      text-white
                      font-semibold
                      hover:scale-105
                      transition-all
                      duration-300
                      shadow-lg
                    "
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-600 text-sm mt-16">
          Built with React • Tailwind CSS • Framer Motion
        </p>
      </div>
    </section>
  );
}