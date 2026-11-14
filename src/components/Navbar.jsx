import { useEffect, useState } from "react";
import { Menu, X, Braces } from "lucide-react";
import { profile } from "../data/portfolioData";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "activity", label: "Activity" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();

    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <header 
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? "bg-[#fff8ed]/95 backdrop-blur-md shadow-soft border-b border-[#ead9bd]" 
      : "bg-transparent" 
  }`} 
  style={{ height: "var(--nav-height)" }} >
      <nav className="container-px h-full flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className={`flex items-center gap-2 font-display font-semibold text-lg shrink-0 transition-colors ${
            isScrolled ? "text-ink" : "text-white"
          }`}
        >
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br bg-[#dcc4a0] to-accent flex items-center justify-center text-white">
            <Braces size={18} strokeWidth={2.5} />
          </span>

          <span>
            {profile.name.split(" ")[0]}
           <span className="text-[#c9a66b]">.</span>
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeId === item.id
                    ? "text-[#6b4f32] bg-[#b8b0a0]"
                    : isScrolled
                    ? "text-[#4f463d] hover:text-[#6b4f32] hover:bg-[#f3e3c5]/70"
                    : "text-white hover:text-[#6b4f32] hover:bg-[#f3e3c5]/90"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Let's Talk */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="hidden lg:inline-flex items-center rounded-full bg-[#f3e8d5] text-[#5c4632] text-sm font-semibold px-5 py-2.5 shadow-md hover:bg-[#ead9bd] transition-colors duration-200"
        >
          Let's Talk
        </a>

        {/* Mobile */}
        <button
          type="button"
          className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
            isScrolled
              ? "?text-[#5c4632] hover:bg-[#f3e8d5]/60"
              : "text-white hover:bg-white/20"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[var(--nav-height)] bg-white border-b border-surface-line shadow-card overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-[80vh] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeId === item.id
                  ? "text-[#5c4632] bg-[#f8ead2]"
                  : isScrolled
                  ? "text-[#5c4632] hover:text-[#3f2f20] hover:bg-[#f8ead2]"
                  : "text-white hover:text-white hover:bg-white/20"
                                }`}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="block text-center rounded-full bg-[#f3e8d5] text-[#5c4632] hover:bg-[#ead9bd] font-semibold px-5 py-3 hover:bg-[#ead9bd] transition-colors"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}