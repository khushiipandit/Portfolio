import React, { useState } from "react";
import { useInView } from "../hooks/useInView";
import { ExternalLink, GitFork, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "Sudhar",
    subtitle: "Carbon Footprint Monitoring Dashboard",
    description: "A centralized dashboard with backend data processing, analytics capabilities, and predictive models. Built to track and analyze carbon footprint data with real-time insights and optimization suggestions.",
    tech: ["Python", "Machine Learning", "Dashboard Design", "Data Analytics"],
    color: "#7DD3FC",
    highlights: [
      "Centralized dashboard with backend data processing & analytics",
      "Designed data pipelines and handled structured datasets",
      "Implemented predictive models for performance optimization",
    ],
    category: "UI/UX",
    emoji: "🌱",
    figmaLink: "https://www.figma.com/design/LPfNuyxfptvTnyunlHJI5H/Sudhar-%E2%80%93-Data-Dashboard?node-id=0-1&t=mp0qOzA0mPByFDs0-1",
  },
  {
    title: "Ease My Delivery",
    subtitle: "Smart India Hackathon SIH'24",
    description: "Smart delivery logistics platform built for SIH'24. Features route optimization algorithms, real-time tracking, QR-based check-in/out, and RESTful APIs for delivery management.",
    tech: ["MERN Stack", "Algorithm Design", "QR Integration", "REST APIs"],
    color: "#4F8EF7",
    highlights: [
      "Backend logic for route optimization & real-time tracking",
      "RESTful APIs for delivery data & QR-based check-in/out",
      "Algorithm-based system efficiency improvements",
    ],
    category: "UI/UX",
    emoji: "🚚",
    badge: "SIH Finalist",
    figmaLink: "https://www.figma.com/design/HtxfZHi4UX07uJVw3rnJKY/EaseMyDelivery-%E2%80%93-Dashboard-UI?t=mp0qOzA0mPByFDs0-1",
  },
  {
    title: "HomeMeal",
    subtitle: "Home-Cooked Meal Delivery Platform · Hacknovate 6.0",
    description: "A responsive food delivery platform connecting home chefs with customers. Built with React.js + React Native for cross-platform experience. Won Best Girls Team at Hacknovate 6.0.",
    tech: ["React.js", "React Native", "JavaScript", "Firebase"],
    color: "#38BDF8",
    highlights: [
      "Responsive frontend using React.js for food delivery",
      "Reusable UI components with seamless user flows",
      "REST API integration for real-time data handling",
      "Cross-device compatibility optimized",
    ],
    category: "Frontend",
    emoji: "🍱",
    badge: "Best Girls Team 🏆",
    liveLink: "https://homemeal-phi.vercel.app/",
    githubLink: "https://github.com/khushiipandit/homemeal.git",
  },
  {
    title: "KidRoots",
    subtitle: "AI-Powered Child Care & Parenting Platform · Final Year Project",
    description: "A full-stack AI-powered child care and parenting platform integrating child health tracking, vaccination monitoring, emotional well-being analysis, age-adaptive learning, parental dashboards, counsellor support, and safety features into a single ecosystem for holistic child development.",
    tech: ["React", "Vite", "Firebase", "JavaScript", "AI Analytics"],
    color: "#A5C4FD",
    highlights: [
      "Child health tracking & vaccination monitoring system",
      "AI-driven emotional well-being analysis",
      "Age-adaptive learning modules for children",
      "Parental dashboards with counsellor support integration",
      "Safety features built into a unified ecosystem",
    ],
    category: "Fullstack",
    emoji: "👶",
    badge: "Major Project",
    liveLink: "https://chilsd-s-root-7dn4.vercel.app/",
    githubLink: "https://github.com/khushiipandit/Chilsd-s_Root.git",
  },
  {
    title: "AgroSmart",
    subtitle: "Smart Agriculture Solution · SIH'25",
    description: "A responsive frontend dashboard for smart irrigation management. Visualizes real-time sensor data, crop health metrics, and water usage analytics with an intuitive UI built for farmers.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Chart.js", "REST APIs"],
    color: "#34D399",
    highlights: [
      "Interactive dashboard with real-time sensor data visualization",
      "Responsive UI with crop health and water usage analytics",
      "REST API integration for live irrigation data",
    ],
    category: "Frontend",
    emoji: "🌾",
    badge: "SIH Finalist",
    githubLink: "https://github.com/khushiipandit/agro-rain-smart.git",
  },
];

const FILTERS = ["All", "UI/UX", "Frontend", "Fullstack"];

function ProjectCard({ project, index, inView }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-rose/30 hover:shadow-[0_0_30px_rgba(79,142,247,0.08)] transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="h-1 w-full" style={{ background: project.color }} />

      <div className="p-7">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-2xl">{project.emoji}</span>
              <span className="font-mono text-xs text-cream/30 tracking-wider">{project.category}</span>
              {project.badge && (
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: project.color + "22", color: project.color }}>
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl font-bold text-cream">{project.title}</h3>
            <p className="text-sm text-cream/40 mt-0.5">{project.subtitle}</p>
          </div>

          {/* Live / Figma / GitHub links */}
          <div className="flex gap-2 ml-2 flex-shrink-0">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cream/40 hover:text-violet-400 hover:border-violet-500/50 transition-all duration-300"
                title="Live Demo">
                <ExternalLink size={13} />
              </a>
            )}
            {project.figmaLink && (
              <a href={project.figmaLink} target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cream/40 hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300"
                title="View on Figma">
                <svg width="13" height="13" viewBox="0 0 38 57" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.51 9.51 0 0 1 19 28.5z"/>
                  <path d="M9.5 57A9.5 9.5 0 0 0 19 47.5V38H9.5a9.5 9.5 0 0 0 0 19z"/>
                  <path d="M0 19a9.5 9.5 0 0 0 9.5 9.5H19V9.5H9.5A9.5 9.5 0 0 0 0 19z"/>
                  <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
                  <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19z"/>
                </svg>
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-cream/40 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                title="GitHub Repo">
                <GitFork size={13} />
              </a>
            )}
          </div>
        </div>

        <p className="text-cream/60 text-sm leading-relaxed mb-5">{project.description}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs font-mono text-cream/30 hover:text-cream/60 mb-4 transition-colors"
        >
          {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          {expanded ? "Hide" : "Show"} highlights
        </button>

        {expanded && (
          <ul className="mb-5 space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-cream/60">
                <span className="text-rose mt-1">▸</span> {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-lg border text-cream/50"
              style={{ borderColor: project.color + "44", color: project.color + "CC" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 top-1/4 w-64 h-64 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-pink-500" />
          <span className="font-mono text-xs tracking-widest uppercase bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </div>
        <div className="flex items-end justify-between mb-8">
          <h2 className={`font-display text-5xl font-bold leading-tight transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Things I've <span className="italic" style={{ background: "linear-gradient(135deg,#a855f7,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>shipped.</span>
          </h2>
          <a href="https://github.com/khushiipandit" target="_blank" rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-cream/40 hover:text-cream transition-colors">
            <GitFork size={16} /> All projects
          </a>
        </div>

        {/* Category filter tabs */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider border transition-all duration-300 ${
                activeFilter === f
                  ? "text-white border-transparent bg-gradient-to-r from-violet-600 to-pink-500"
                  : "border-white/10 text-cream/40 hover:border-purple-500/40 hover:text-cream"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>

        {/* Figma portfolio CTA */}
        <div className={`mt-10 p-6 bg-violet-500/5 border border-violet-500/20 rounded-2xl flex items-center justify-between transition-all duration-1000 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <div>
            <p className="font-medium mb-1 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">See the Design Work ✦</p>
            <p className="text-cream/40 text-sm">Explore UI/UX case studies and prototypes on Figma</p>
          </div>
          <a
            href="https://www.figma.com/proto/EpxcaXcwFrMCfLlaDdJL5n/Khushi-Pandit-%E2%80%93-Product-Design-Portfolio?node-id=16-6&scaling=min-zoom"
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-white text-sm rounded-full transition-all duration-300 bg-gradient-to-r from-violet-600 to-pink-500 hover:opacity-90 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] whitespace-nowrap ml-4">
            View on Figma <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
