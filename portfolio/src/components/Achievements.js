import React from "react";
import { useInView } from "../hooks/useInView";
import { Trophy, Award, Star, Users, BookOpen, Zap } from "lucide-react";

const achievements = [
  { icon: Trophy, label: "Smart India Hackathon", desc: "SIH 2024 & 2025 Finalist", color: "#A855F7" },
  { icon: Star,   label: "TechExhibit 2.0 Winner", desc: "IIC ABESIT",              color: "#EC4899" },
  { icon: Award,  label: "B-Plan Box",             desc: "3rd Position · IIC ABESIT", color: "#F9A8D4" },
  { icon: Trophy, label: "Best Girls Team",         desc: "Hacknovate 6.0 🏆",       color: "#EC4899" },
  { icon: Users,  label: "GSSoC '25 Contributor",  desc: "Open Source",             color: "#3B82F6" },
  { icon: Zap,    label: "Web3 Fellow",             desc: "DoraDao · GirlsWhoYap",  color: "#06B6D4" },
  { icon: BookOpen, label: "Core Java Certificate", desc: "Softpro India & AICTE",  color: "#7C3AED" },
  { icon: Award,  label: "UI/UX Certificate",       desc: "Indibus Pvt. Ltd.",       color: "#A855F7" },
  { icon: Star,   label: "AI for All",              desc: "Intel India Certification", color: "#EC4899" },
  { icon: Trophy, label: "National Badminton",      desc: "KVS National Player 🏸",  color: "#F9A8D4" },
];

export default function Achievements() {
  const [ref, inView] = useInView();

  return (
    <section id="achievements" className="py-32 relative" ref={ref}>
      <div className="absolute right-0 bottom-0 w-1/2 h-2/3 bg-[radial-gradient(ellipse_at_right,rgba(168,85,247,0.06),transparent)]" />
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-pink-500" />
          <span className="font-mono text-xs tracking-widest uppercase bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
        </div>
        <h2 className={`font-display text-5xl font-bold mb-4 leading-tight transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          A few proud <span className="text-gradient italic">moments.</span>
        </h2>
        <p className={`text-cream/40 mb-16 max-w-lg transition-all duration-1000 delay-200 ${inView ? "opacity-100" : "opacity-0"}`}>
          From hackathon wins to open source contributions and certifications — here's what keeps me going.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.label}
                className={`group bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.05] hover:border-purple-500/20 transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: a.color + "18" }}>
                  <Icon size={15} style={{ color: a.color }} />
                </div>
                <p className="text-cream text-xs font-medium leading-snug mb-1">{a.label}</p>
                <p className="text-cream/40 text-xs">{a.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Education */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-violet-500/40 to-transparent" />
            <span className="font-mono text-cream/30 text-xs tracking-widest uppercase">Education</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { degree: "B.Tech CSE (Data Science)", school: "ABES Institute of Technology", board: "AKTU · UP", year: "2022 – 2026", score: "8.0 CGPA", scoreColor: "text-violet-400" },
              { degree: "12th Science", school: "Kendriya Vidyalaya Mathura Refinery", board: "CBSE", year: "2021 – 2022", score: "82.2%", scoreColor: "text-pink-400" },
              { degree: "10th Science", school: "Kendriya Vidyalaya Mathura Refinery", board: "CBSE", year: "2019 – 2020", score: "8.37 CGPA", scoreColor: "text-cyan-400" },
            ].map((e) => (
              <div key={e.degree} className="bg-white/[0.02] border border-purple-500/10 rounded-xl p-5 flex items-start gap-4 hover:border-purple-500/20 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-gradient-to-b from-violet-500 to-pink-500 mt-2 flex-shrink-0" />
                <div>
                  <div className="text-cream font-medium text-sm mb-0.5">{e.degree}</div>
                  <div className="text-cream/40 text-xs mb-0.5">{e.school}</div>
                  <div className="text-cream/30 text-xs">{e.board} · {e.year}</div>
                  <div className={`text-xs font-mono mt-2 ${e.scoreColor}`}>{e.score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
