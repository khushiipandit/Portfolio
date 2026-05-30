import React from "react";
import { useInView } from "../hooks/useInView";
import { Code2, Palette, Zap, Users } from "lucide-react";

const facts = [
  { icon: Code2, label: "Frontend Focus", value: "React & JS" },
  { icon: Palette, label: "Design Tool", value: "Figma Expert" },
  { icon: Zap, label: "Hackathons", value: "SIH '24 & '25" },
  { icon: Users, label: "Internships", value: "2 Companies" },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-[radial-gradient(ellipse_at_left,rgba(124,58,237,0.07),transparent)]" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left: visual block */}
          <div className={`transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              <div className="bg-white/[0.03] border border-purple-500/10 rounded-3xl p-10 noise-bg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/15 rounded-full blur-3xl" />
                <div className="font-display text-8xl font-black text-cream/5 mb-4 leading-none">KP</div>
                <div className="font-display text-3xl font-bold mb-2">
                  Hi, I'm Khushi <span>👋</span>
                </div>
                <p className="text-cream/50 text-sm leading-relaxed mb-6">
                  BTech CSE (Data Science) graduate from ABES Institute of Technology, 2026 batch.
                  I love turning complex problems into elegant, intuitive digital experiences.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {facts.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="bg-white/[0.04] rounded-xl p-3 border border-purple-500/10">
                      <Icon size={16} className="text-purple-400 mb-2" />
                      <div className="text-xs text-cream/40 mb-0.5">{label}</div>
                      <div className="text-sm font-medium text-cream">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 text-white text-xs font-mono px-4 py-2 rounded-full font-medium bg-gradient-to-r from-violet-600 to-pink-500">
                8.0 CGPA
              </div>
              <div className="absolute -bottom-4 -left-4 bg-ink border border-cyan-400/30 text-cyan-300 text-xs font-mono px-4 py-2 rounded-full">
                Web3 Fellow ✦
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className={`transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-pink-500" />
              <span className="font-mono text-xs tracking-widest uppercase bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">About Me</span>
            </div>
            <h2 className="font-display text-5xl font-bold mb-6 leading-tight">
              Building things people <span className="text-gradient italic">love to use.</span>
            </h2>
            <div className="space-y-4 text-cream/60 text-base leading-relaxed">
              <p>
                I'm a <span className="text-cream font-medium">Frontend Developer and UI/UX Designer</span> with a strong
                foundation in React.js, JavaScript, and modern web technologies. I recently graduated from ABES Institute
                of Technology in the 2026 batch with a B.Tech in CSE (Data Science).
              </p>
              <p>
                From interning at <span className="text-purple-300">Indibus Software Solutions</span> as a UI/UX designer to working
                as a Developer Intern at <span className="text-purple-300">Campaigning Source Pvt Ltd</span>, I've worked across
                design and development — giving me a rare ability to bridge both worlds.
              </p>
              <p>
                I'm a two-time <span className="text-pink-300 font-medium">Smart India Hackathon Finalist</span>,
                a GSSoC contributor, a DoraDao *GirlsWhoYap Web3 Fellow, and a national badminton player.
                I bring the same competitive drive to code as I do to sports.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="https://linkedin.com/in/khushi-pandit-594819302/" target="_blank" rel="noreferrer"
                className="text-sm font-medium text-purple-400 hover:underline underline-offset-4">
                LinkedIn →
              </a>
              <a href="https://github.com/khushiipandit" target="_blank" rel="noreferrer"
                className="text-sm font-medium text-cream/50 hover:text-cream hover:underline underline-offset-4">
                GitHub →
              </a>
              <a href="https://leetcode.com/u/khushi_panditt/" target="_blank" rel="noreferrer"
                className="text-sm font-medium text-cream/50 hover:text-cream hover:underline underline-offset-4">
                LeetCode →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
