import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black"></div>

      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 mt-4">
          Open to remote opportunities, freelance work, and
          collaboration in Data & Full Stack roles.
        </p>

        {/* Contact Card */}
        <div className="mt-12 border border-gray-800 rounded-2xl p-8 md:p-10 bg-black/40 backdrop-blur-md shadow-2xl">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            {/* Name */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition"
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition"
            />

            {/* Message */}
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full bg-[#111] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition resize-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-medium shadow-lg"
            >
              Send Message
            </button>

          </form>

          {/* Direct Email */}
          <div className="mt-10 border-t border-gray-800 pt-6">

            <p className="text-gray-400">
              Or directly email me at
            </p>

            <a
              href="mailto:anishpatnaik45@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition text-lg"
            >
              anishpatnaik45@gmail.com
            </a>

          </div>

        </div>

        {/* Footer */}
        <p className="text-gray-600 text-sm mt-10">
          Built with React • Tailwind • Framer Motion
        </p>

      </div>
    </section>
  );
}