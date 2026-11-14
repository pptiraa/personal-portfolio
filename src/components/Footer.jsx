import { Github, Linkedin, Instagram, Mail, Braces } from "lucide-react";
import { profile } from "../data/portfolioData";

const SOCIALS = [
  
  { icon: Instagram, href: "https://www.instagram.com/miegraine_zip?igsi=ZTIyN2NoMmJndWNo&utm_source=qr", label: "Instagram" },
  { icon: Mail, href: `mailto:${"puputirasetyawati@gmail.com"}`, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80">
      <div className="container-px max-w-7xl mx-auto py-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div className="max-w-sm">
            <a href="#home" className="inline-flex items-center gap-2 font-display font-semibold text-lg text-white">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center">
                <Braces size={18} strokeWidth={2.5} />
              </span>
              {profile.name}
            </a>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              {profile.role} building clean, reliable web products — from first pixel to
              production deploy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary-500 flex items-center justify-center transition-colors duration-200"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/40">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with React &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
