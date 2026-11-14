import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolioData";
import useReveal from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section
      id="experience"
      className="py-24 sm:py-28 bg-[#f3eadb]"
      ref={ref}
    >
      <div className="container-px max-w-7xl mx-auto">

        <div className="reveal max-w-2xl">
          <span className="text-sm font-semibold text-[#9a6f43] tracking-wide uppercase">
            Experience
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-[#3f2f20]">
            Where I've worked
          </h2>

          <p className="mt-4 text-[#6b5845] leading-relaxed">
            A timeline of roles that shaped how I build.
          </p>
        </div>

        <div className="mt-14 relative">

          {/* Vertical line */}
          <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-[#e5d5bd] sm:-translate-x-1/2" />

          <ol className="space-y-10">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <li
                  key={item.year}
                  className={`reveal reveal-delay-${index + 1} relative sm:grid sm:grid-cols-2 sm:gap-x-14`}
                >

                  {isEven && (
                    <div className="hidden sm:block col-start-1 text-right">
                      <ExperienceCard item={item} />
                    </div>
                  )}

                  {!isEven && (
                    <div className="hidden sm:block col-start-2">
                      <ExperienceCard item={item} />
                    </div>
                  )}

                  {/* Timeline dot */}
                  <span className="absolute left-[7px] sm:left-1/2 top-1.5 sm:-translate-x-1/2 w-6 h-6 rounded-full bg-[#9a6f43] text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-[#f8f1e6] shadow-soft">
                    <Briefcase size={12} />
                  </span>

                  {/* Mobile card */}
                  <div className="sm:hidden pl-11">
                    <ExperienceCard item={item} />
                  </div>

                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ item }) {
  return (
    <div className="inline-block w-full max-w-md rounded-xl2 bg-[#fffaf2] border border-[#e5d5bd] p-6 shadow-softer hover:shadow-soft transition-shadow duration-200 text-left">

      {/* Year */}
      <span className="text-xs font-mono font-semibold text-[#8b633d] bg-[#ead9bd] rounded-full px-3 py-1">
        {item.year}
      </span>

      {/* Role */}
      <h3 className="mt-3 font-display font-semibold text-lg text-[#3f2f20]">
        {item.role}
      </h3>

      {/* Place */}
      <p className="text-sm font-medium text-[#6b5845]">
        {item.place}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm text-[#6b5845] leading-relaxed">
        {item.description}
      </p>

      {/* Technologies */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {item.tech.map((t) => (
          <li
            key={t}
            className="text-xs font-mono text-[#7a6754] bg-[#eadfce] border border-[#e5d5bd] rounded-md px-2.5 py-1"
          >
            {t}
          </li>
        ))}
      </ul>

    </div>
  );
}