import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import AchievementsPage from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";

function Layout() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 6 + "px";
        cursorRef.current.style.top = e.clientY - 6 + "px";
      }
      if (followerRef.current) {
        setTimeout(() => {
          followerRef.current.style.left = e.clientX - 18 + "px";
          followerRef.current.style.top = e.clientY - 18 + "px";
        }, 80);
      }
    };
    const grow = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(2)";
      if (followerRef.current) followerRef.current.style.transform = "scale(1.5)";
    };
    const shrink = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
      if (followerRef.current) followerRef.current.style.transform = "scale(1)";
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    return () => window.removeEventListener("mousemove", move);
  }, [isLoaded]);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={followerRef} className="cursor-follower hidden md:block" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
