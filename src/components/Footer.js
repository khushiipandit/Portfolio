import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-bold text-gradient">KP</span>
          <span className="text-cream/20 text-sm">· Khushi Pandit</span>
        </div>
        <p className="text-cream/25 text-xs font-mono text-center">
          Built with React.js & Tailwind CSS · B.Tech CSE 2026 · ABES Institute of Technology
        </p>
        <Link to="/" className="text-cream/30 text-xs hover:text-purple-400 transition-colors font-mono">
          back to top ↑
        </Link>
      </div>
    </footer>
  );
}
