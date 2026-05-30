import React, { useState } from "react";
import { useInView } from "../hooks/useInView";
import { GitFork, Link2, Mail, ExternalLink, Send, MapPin } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("panditkhushi485@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="absolute left-1/4 top-1/3 w-[500px] h-[400px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[300px] bg-pink-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-pink-500" />
          <span className="font-mono text-xs tracking-widest uppercase bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Contact</span>
        </div>
        <h2 className={`font-display text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Let's build something<br />
          <span className="text-gradient italic">together.</span>
        </h2>
        <p className={`text-cream/50 text-lg max-w-xl mb-16 transition-all duration-1000 delay-200 ${inView ? "opacity-100" : "opacity-0"}`}>
          I'm actively looking for full-time frontend developer or design roles. Open to freelance, collabs, and interesting problems. Let's talk!
        </p>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Email card */}
          <div className="bg-white/[0.03] border border-purple-500/15 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/20 to-pink-500/20 flex items-center justify-center">
                <Mail size={18} className="text-purple-400" />
              </div>
              <div>
                <p className="text-cream/30 text-xs font-mono uppercase tracking-wider">Preferred Contact</p>
                <p className="text-cream font-medium">Email</p>
              </div>
            </div>
            <p className="font-mono text-sm text-cream/60 mb-5">panditkhushi485@gmail.com</p>
            <div className="flex gap-3">
              <a href="mailto:panditkhushi485@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 text-white text-sm rounded-full transition-all duration-300 bg-gradient-to-r from-violet-600 to-pink-500 hover:opacity-90 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <Send size={13} /> Send Email
              </a>
              <button onClick={copyEmail}
                className="px-5 py-2.5 border border-purple-500/20 text-cream/60 text-sm rounded-full hover:border-purple-500/50 hover:text-cream transition-all duration-300">
                {copied ? "Copied! ✓" : "Copy"}
              </button>
            </div>
          </div>

          {/* Links card */}
          <div className="bg-white/[0.03] border border-purple-500/15 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
            <p className="text-cream/30 text-xs font-mono uppercase tracking-wider mb-5">Find me elsewhere</p>
            <div className="space-y-3">
              {[
                { icon: Link2,        label: "LinkedIn",       href: "https://www.linkedin.com/in/khushi-pandit-594819302/", value: "/khushi-pandit-594819302", hoverColor: "group-hover:text-violet-400" },
                { icon: GitFork,      label: "GitHub",         href: "https://github.com/khushiipandit",                    value: "/khushiipandit",            hoverColor: "group-hover:text-purple-400" },
                { icon: ExternalLink, label: "LeetCode",       href: "https://leetcode.com/u/khushi_panditt/",              value: "/khushi_panditt",           hoverColor: "group-hover:text-pink-400" },
                { icon: ExternalLink, label: "Figma Portfolio",href: "https://www.figma.com/proto/EpxcaXcwFrMCfLlaDdJL5n/Khushi-Pandit", value: "Product Design Portfolio", hoverColor: "group-hover:text-cyan-400" },
              ].map(({ icon: Icon, label, href, value, hoverColor }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <Icon size={15} className={`text-cream/40 transition-colors ${hoverColor}`} />
                    <span className="text-cream/60 text-sm group-hover:text-cream transition-colors">{label}</span>
                  </div>
                  <span className="text-xs font-mono text-cream/30 group-hover:text-cream/50 transition-colors">{value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-8 flex items-center gap-2 text-cream/30 text-sm transition-all duration-1000 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          <MapPin size={14} className="text-pink-400/50" />
          <span className="font-mono text-xs">Uttar Pradesh, India · Open to remote & relocation</span>
        </div>
      </div>
    </section>
  );
}
