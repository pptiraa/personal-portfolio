import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolioData";
import useReveal from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal();

  return (
    <section
      id="projects"
      className="py-24 sm:py-28 bg-[#f8f1e6]"
      ref={ref}
    >
      <div className="container-px max-w-7xl mx-auto">

        <div className="reveal max-w-2xl">
          <span className="text-sm font-semibold text-[#9a6f43] tracking-wide uppercase">
            My Projects
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-[#3f2f20]">
            Selected work
          </h2>

          <p className="mt-4 text-[#6b5845] leading-relaxed">
            Current Projects
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          {projects.slice(0, 1).map((project, i) => (
            <article
              key={project.id}
              className={`reveal reveal-delay-${(i % 4) + 1} group w-full max-w-[950px] rounded-xl2 bg-[#fffaf2] border border-[#e5d5bd] overflow-hidden shadow-softer hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 md:flex`}
            >

              {/* Project Image */}
              <div className="relative w-full md:w-[45%] h-[220px] md:h-auto overflow-hidden bg-[#eadfce] shrink-0">
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#5c4632]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1">

                <h3 className="font-display font-semibold text-lg text-[#3f2f20]">
                  {project.name}
                </h3>

                <p className="mt-2 text-sm text-[#6b5845] leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="text-xs font-mono font-medium text-[#8b633d] bg-[#ead9bd] rounded-md px-2.5 py-1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-6 flex items-center gap-3">

                  {/* Live Demo */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold rounded-full bg-[#9a6f43] hover:bg-[#7f5938] text-white px-4 py-2 transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}