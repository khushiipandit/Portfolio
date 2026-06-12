import React, { useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView";

const skillGroups = [
  {
    category: "Frontend",
    gradient: "from-violet-500 to-purple-400",
    labelColor: "text-violet-400",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React Native", level: 70 },
    ],
  },
  {
    category: "Design",
    gradient: "from-pink-500 to-rose-400",
    labelColor: "text-pink-400",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Adobe XD", level: 80 },
      { name: "UI/UX Principles", level: 88 },
      { name: "Prototyping", level: 85 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    category: "Backend & Tools",
    gradient: "from-blue-500 to-cyan-400",
    labelColor: "text-cyan-400",
    skills: [
      { name: "Node.js / Express", level: 72 },
      { name: "MongoDB / Firebase", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "Python", level: 70 },
      { name: "Git / GitHub", level: 88 },
    ],
  },
];

const techTags = [
  "HTML5", "CSS3", "Redux", "REST APIs", "MERN Stack", "C",
  "Linux (Ubuntu)", "Notion", "GitHub Copilot", "Cursor", "Agile", "CI/CD",
  "DSA", "Firebase", "Flask", "MongoDB", "IoT", "Machine Learning",
];

function SkillBar({ name, level, gradient, animate }) {
  const fillRef = useRef(null);
  useEffect(() => {
    if (animate && fillRef.current) {
      setTimeout(() => { fillRef.current.style.width = level + "%"; }, 200);
    }
  }, [animate, level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-cream/70 font-medium">{name}</span>
        <span className="font-mono text-xs text-cream/30">{level}%</span>
      </div>
      <div className="skill-bar">
        <div ref={fillRef} className={`skill-bar-fill bg-gradient-to-r ${gradient}`} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_right,rgba(168,85,247,0.06),transparent)]" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-pink-500" />
          <span className="font-mono text-xs tracking-widest uppercase bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
        </div>
        <h2 className={`font-display text-5xl font-bold mb-16 leading-tight transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Tools of the <span className="text-gradient italic">trade.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`bg-white/[0.03] border border-purple-500/10 rounded-2xl p-7 transition-all duration-700 hover:border-purple-500/20 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${gi * 150}ms` }}
            >
              <div className={`font-mono text-xs tracking-widest uppercase mb-6 ${group.labelColor}`}>
                {group.category}
              </div>
              {group.skills.map((s) => (
                <SkillBar key={s.name} {...s} gradient={group.gradient} animate={inView} />
              ))}
            </div>
          ))}
        </div>

        <div className={`transition-all duration-1000 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-mono text-xs text-cream/30 tracking-widest uppercase mb-5">Also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span key={tag}
                className="px-3 py-1.5 text-xs font-mono text-cream/50 border border-white/8 rounded-full hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
