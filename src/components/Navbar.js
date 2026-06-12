import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Achievements", path: "/achievements" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "py-3 bg-[#07050F]/85 backdrop-blur-xl border-b border-white/5" : "py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          <span className="text-gradient">KP</span>
          <span className="text-cream/30 text-sm font-sans font-normal ml-2">portfolio</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, path }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                  active ? "text-cream" : "text-cream/50 hover:text-cream"
                }`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 bg-gradient-to-r from-violet-500 via-purple-400 to-pink-400 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
          <a
            href="mailto:panditkhushi485@gmail.com"
            className="ml-4 px-5 py-2 text-sm rounded-full font-medium text-white transition-all duration-300 bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 hover:opacity-90 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#07050F]/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-5 border-t border-white/5">
          {links.map(({ label, path }) => (
            <Link key={label} to={path}
              className="text-cream/70 hover:text-cream text-lg font-medium">
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
