import React from "react";
import { useInView } from "../hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Campaigning Source Pvt Ltd",
    role: "Developer Intern",
    period: "Oct 2024 – Jan 2025",
    type: "Full-Stack Development",
    color: "#A855F7",
    borderGlow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]",
    borderActive: "border-l-violet-500",
    stack: ["MERN Stack", "RESTful APIs", "GitHub", "AI Integration"],
    points: [
      "Developed responsive frontend components using React.js and modern JavaScript",
      "Built reusable UI components and integrated REST APIs for dynamic data handling",
      "Debugged and tested application features ensuring smooth functionality and performance",
      "Collaborated with team members in an Agile environment to deliver project requirements",
      "Optimized frontend performance and improved user experience across devices",
      "Participated in code reviews and followed best practices for clean, maintainable code",
    ],
  },
  {
    company: "Indibus Software Solutions",
    role: "UI/UX Design Intern",
    period: "May 2024 – Aug 2024",
    type: "Product Design",
    color: "#EC4899",
    borderGlow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.12)]",
    borderActive: "border-l-pink-500",
    stack: ["Figma", "Adobe XD", "UI/UX Principles", "Prototyping"],
    points: [
      "Designed and implemented user interfaces with focus on usability and responsiveness",
      "Collaborated with developers to translate design into functional frontend components",
      "Created high-fidelity prototypes and design systems for production-ready apps",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(124,58,237,0.04),transparent)]" />
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-pink-500" />
          <span className="font-mono text-xs tracking-widest uppercase bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
        </div>
        <h2 className={`font-display text-5xl font-bold mb-16 leading-tight transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Where I've <span className="text-gradient italic">worked.</span>
        </h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-pink-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="hidden md:block absolute left-6 top-8 w-2.5 h-2.5 rounded-full -translate-x-1/2 mt-1 ring-2 ring-ink"
                  style={{ background: exp.color }} />

                <div className={`md:ml-16 bg-white/[0.02] border border-white/[0.07] rounded-2xl overflow-hidden transition-all duration-300 ${exp.borderGlow}`}>
                  <div className="p-6 border-b border-white/5 border-l-2" style={{ borderLeftColor: exp.color }}>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} style={{ color: exp.color }} />
                          <span className="font-mono text-xs tracking-wider" style={{ color: exp.color }}>
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-cream">{exp.role}</h3>
                        <p className="text-cream/50 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                        <Calendar size={12} className="text-cream/30" />
                        <span className="font-mono text-xs text-cream/50">{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.stack.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-lg border"
                          style={{ borderColor: exp.color + "33", color: exp.color + "CC" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2.5">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-cream/60 leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
