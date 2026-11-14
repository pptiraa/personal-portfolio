import { ArrowRight } from "lucide-react";
import { profile } from "../data/portfolioData";
import heroBg from "../assets/ira.jpeg";

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="hero-section relative min-h-[90svh] overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay foto */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Isi Hero */}
      <div className="relative z-10 container-px max-w-7xl mx-auto w-full min-h-[100svh] flex items-center">
        <div className="hero-content max-w-xl">
          <p
            className="hero-greeting animate-fade-in-up"
            style={{ animationDelay: "0.06s" }}
          >
            Hello, I'm
          </p>

          <h1
            className="hero-name animate-fade-in-up"
            style={{ animationDelay: "0.14s" }}
          >
            {profile.name}
          </h1>

          <h2
            className="hero-role animate-fade-in-up"
            style={{ animationDelay: "0.22s" }}
          >
            {profile.role}
          </h2>

          <a
            href="#contact"
            onClick={scrollTo("contact")}
            className="hero-button animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Contact Me
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Wave bagian bawah */}
      <div className="hero-wave">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C240,130 400,155 600,145 C850,130 1020,70 1200,80 C1300,85 1370,95 1440,100 L1440,180 L0,180 Z"
            fill="#f8f1e6"
          />
        </svg>
      </div>
    </section>
  );
}