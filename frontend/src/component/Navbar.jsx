import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* Glass Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl border-b border-white/10"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <div className="text-xl font-bold tracking-wide text-white">
        Neuro<span className="text-blue-500">Stack</span>
      </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-white transition"
            >
              {item}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>

            </a>
          ))}

        </div>

        {/* CTA Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="hidden md:inline-flex px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-lg shadow-blue-500/20 hover:scale-105 transition"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >

        <div className="px-6 py-5 bg-black/80 backdrop-blur-xl border-t border-white/10 flex flex-col gap-5 text-gray-300">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:text-white transition text-lg"
            >
              {item}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="/ANISH PATNAIK.pdf"
            className="mt-2 px-5 py-2 rounded-xl bg-blue-600 text-white text-center font-medium"
          >
            Download Resume
          </a>

        </div>

      </div>
    </nav>
  );
}