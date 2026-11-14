import {
  Code2,
  GraduationCap,
  PenLine,
  GitBranch,
  Boxes,
  Users,
} from "lucide-react";
import { activities } from "../data/portfolioData";
import useReveal from "../hooks/useReveal";

const ICONS = {
  Code2,
  GraduationCap,
  PenLine,
  GitBranch,
  Boxes,
  Users,
};

export default function Activity() {
  const ref = useReveal();

  return (
    <section
        id="activity"
        className="py-24 sm:py-28 bg-[#f3eadb]"
        ref={ref}
      >
      <div className="container-px max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal max-w-2xl">
          <span className="text-sm font-semibold text-[#9a6f43] tracking-wide uppercase">
            My Activity
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-[#3f2f20]">
            What I'm up to
          </h2>

          <p className="mt-4 text-[#6b5845] leading-relaxed">
            Beyond client projects, here’s how I spend most of my time.
          </p>
        </div>

        {/* Activity cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, i) => {
            const Icon = ICONS[activity.icon] ?? Code2;

            return (
              <div
                key={activity.title}
                className={`reveal reveal-delay-${(i % 4) + 1} group rounded-xl2 bg-[#fffaf2] border border-[#e5d5bd] p-6 shadow-softer hover:shadow-soft hover:-translate-y-1 transition-all duration-200`}
              >

                {/* Icon */}
                <span className="inline-flex w-11 h-11 rounded-lg bg-[#ead9bd] text-[#8b633d] items-center justify-center group-hover:bg-[#9a6f43] group-hover:text-white transition-colors duration-200">
                  <Icon size={20} />
                </span>

                {/* Title */}
                <h3 className="mt-4 font-display font-semibold text-lg text-[#3f2f20]">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-[#6b5845] leading-relaxed">
                  {activity.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}