import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolioData";
import useReveal from "../hooks/useReveal";

function SkillBar({ name, level, delay }) {
  const barRef = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={barRef}
      className="rounded-xl2 bg-[#fffaf2] border border-[#e5d5bd] p-5 shadow-softer hover:shadow-soft hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex items-baseline justify-between mb-3">
        <span className="font-semibold text-[#3f2f20] font-mono text-sm sm:text-[15px]">
          {name}
        </span>

        <span className="text-xs font-mono text-[#7a6754]">
          {level}%
        </span>
      </div>

      <div className="h-2 rounded-full bg-[#eadfce] overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#9a6f43] to-[#c9a66b] transition-[width] duration-[1200ms] ease-out"
          style={{
            width: filled ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useReveal();

  return (
    <section
      id="skills"
      className="py-24 sm:py-28 bg-[#f3eadb]"
      ref={ref}
    >
      <div className="container-px max-w-7xl mx-auto">

        <div className="reveal max-w-2xl">

          <span className="text-sm font-semibold text-[#9a6f43] tracking-wide uppercase">
            My Skills
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-[#3f2f20]">
            Tools I build with
          </h2>

          <p className="mt-4 text-[#6b5845] leading-relaxed">
            A working toolkit shaped by real projects — front to back.
          </p>

        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={i * 60}
            />
          ))}
        </div>

      </div>
    </section>
  );
}