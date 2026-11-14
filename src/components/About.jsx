import { GraduationCap, Target } from "lucide-react";
import { about, stats } from "../data/portfolioData";
import useReveal from "../hooks/useReveal";
import foto1 from "../assets/irasmk.jpeg";

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      className="py-24 sm:py-28 bg-[#f8f1e6]"
      ref={ref}
    >
      <div className="container-px max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-center">

          {/* Left: photo */}
          <div className="reveal mx-auto lg:mx-0 relative max-w-sm w-full">

            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#ead9bd] to-[#d8c2a4] -z-10" />

            <div className="aspect-[4/5] rounded-[24px] overflow-hidden shadow-card bg-[#eadfce]">
              <img
                src={foto1}
                alt="Foto profil Puput Ira Setyawati"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

          </div>

          {/* Right: content */}
          <div>

            {/* Label */}
            <span className="reveal inline-block text-sm font-semibold text-[#9a6f43] tracking-wide uppercase">
              About Me
            </span>

            {/* Title */}
            <h2 className="reveal reveal-delay-1 mt-3 text-3xl sm:text-4xl font-display font-semibold text-[#3f2f20]">
              Puput Ira Setyawati
            </h2>

            {/* Description */}
            <p className="reveal reveal-delay-2 mt-5 text-[#6b5845] leading-relaxed">
              {about.description}
            </p>

            {/* Education & Focus */}
            <div className="reveal reveal-delay-2 mt-6 space-y-3">

              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-9 h-9 shrink-0 rounded-lg bg-[#ead9bd] text-[#8b633d] flex items-center justify-center">
                  <GraduationCap size={18} />
                </span>

                <p className="text-[#5c4632] text-sm sm:text-base pt-1.5">
                  {about.education}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-9 h-9 shrink-0 rounded-lg bg-[#ead9bd] text-[#8b633d] flex items-center justify-center">
                  <GraduationCap size={18} />
                </span>

                <p className="text-[#5c4632] text-sm sm:text-base pt-1.5">
                  {about.education2}
                </p>
              </div>



              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-9 h-9 shrink-0 rounded-lg bg-[#ead9bd] text-[#8b633d] flex items-center justify-center">
                  <Target size={18} />
                </span>

                <p className="text-[#5c4632] text-sm sm:text-base pt-1.5">
                  {about.focus}
                </p>
              </div>

            </div>

            {/* Stats */}
            <div className="reveal reveal-delay-3 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl2 bg-[#fffaf2] border border-[#e5d5bd] px-4 py-5 text-center shadow-softer hover:shadow-soft hover:-translate-y-1 transition-all duration-200"
                >
                  <p className="text-2xl sm:text-3xl font-display font-bold text-[#9a6f43]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs sm:text-sm text-[#6b5845]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}