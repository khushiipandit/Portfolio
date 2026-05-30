import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GitFork, Link2, Mail, ExternalLink } from "lucide-react";

// Vibrant particle colors: violet, purple, pink, blue
const PARTICLE_COLORS = [
  "124,58,237",   // violet
  "168,85,247",   // purple
  "236,72,153",   // pink
  "59,130,246",   // blue
  "6,182,212",    // cyan
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.6 + 0.15,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }));

    let frame;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168,85,247,${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      frame = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Multi-color ambient glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-orange-500/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT: text */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <span className="h-px w-12 bg-gradient-to-r from-violet-500 to-pink-500" />
              <span className="font-mono text-xs tracking-widest uppercase bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                BTech Fresher · 2026
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9] mb-6 overflow-hidden tracking-tight">
              <span className="block animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "both", background: "linear-gradient(90deg,#F0EAFF,#c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Khushi
              </span>
              <span className="block animate-fade-up" style={{ animationDelay: "0.25s", animationFillMode: "both", background: "linear-gradient(135deg,#a855f7,#ec4899,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Pandit
              </span>
            </h1>

            {/* Marquee */}
            <div className="marquee-container my-6 border-y border-white/5 py-3 overflow-hidden">
              <div className="marquee-content font-mono text-sm text-cream/40 tracking-wider">
                {["Frontend Developer", "UI/UX Designer", "React Developer", "MERN Stack", "SIH Finalist", "Web3 Fellow",
                  "Frontend Developer", "UI/UX Designer", "React Developer", "MERN Stack", "SIH Finalist", "Web3 Fellow"]
                  .map((r, i) => (
                    <span key={i} className="mx-6">
                      {r} <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">·</span>
                    </span>
                  ))}
              </div>
            </div>

            <p className="text-cream/70 text-lg leading-relaxed max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
              Frontend Developer passionate about crafting scalable, pixel-perfect web applications.
              React.js specialist, UI/UX enthusiast, and Smart India Hackathon finalist building
              products where <span className="italic font-semibold" style={{ background: "linear-gradient(90deg,#f9a8d4,#fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>design meets functionality.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.55s", animationFillMode: "both" }}>
              <Link to="/projects"
                className="group px-7 py-3.5 font-medium rounded-full text-white flex items-center gap-2 transition-all duration-300 bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 hover:opacity-90 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                View My Work
                <ExternalLink size={15} className="group-hover:rotate-12 transition-transform" />
              </Link>
              <a href="mailto:panditkhushi485@gmail.com"
                className="px-7 py-3.5 border border-purple-500/30 text-cream/70 hover:text-cream hover:border-purple-400/60 hover:bg-purple-500/10 font-medium rounded-full transition-all duration-300">
                Get In Touch
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5 mt-10 animate-fade-up" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
              {[
                { icon: GitFork, href: "https://github.com/khushiipandit", label: "GitHub" },
                { icon: Link2, href: "https://www.linkedin.com/in/khushi-pandit-594819302/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:panditkhushi485@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/40 hover:text-white hover:border-purple-500/60 hover:bg-purple-500/15 transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
              <span className="h-px flex-1 max-w-[80px] bg-white/10" />
              <span className="font-mono text-xs text-cream/30">panditkhushi485@gmail.com</span>
            </div>
          </div>

          {/* RIGHT: photo */}
          <div className="flex-shrink-0 flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
            <div className="relative">
              {/* Layered glow blobs */}
              <div className="absolute -inset-6 bg-violet-600/25 rounded-full blur-3xl" />
              <div className="absolute -inset-4 bg-pink-500/15 rounded-full blur-2xl" />

              {/* Gradient border ring */}
              <div className="relative p-[3px] rounded-full bg-gradient-to-br from-violet-500 via-pink-500 to-blue-500">
                <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden bg-ink">
                  <img
                    src="/photo.jpeg"
                    alt="Khushi Pandit"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -right-4 text-white text-xs font-mono px-4 py-2 rounded-full font-medium shadow-lg bg-gradient-to-r from-violet-600 to-pink-500">
                8.0 CGPA ✦
              </div>
              <div className="absolute -top-4 -left-4 bg-ink border border-purple-500/40 text-purple-300 text-xs font-mono px-3 py-1.5 rounded-full">
                SIH Finalist
              </div>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
}
