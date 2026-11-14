import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Instagram,
  MapPin,
  Send,
} from "lucide-react";
import { profile } from "../data/portfolioData";
import useReveal from "../hooks/useReveal";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: "puputirasetyawati@gmail.com", href: `mailto:${"puputirasetyawati@gmail.com"}` },
  { icon: MessageCircle, label: "WhatsApp", value: "085727125350", href: "https://wa.me/qr/WPWJ6X424FSBK1" },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@ira_zip",
    href: "https://www.instagram.com/miegraine_zip?igsi=ZTIyN2NoMmJndWNo&utm_source=qr",
  },
  { icon: MapPin, label: "Location", value: profile.location, href: null },
];

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  try {
    await emailjs.send(
      "service_o4vrf7l",
      "template_5ojtixk",
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "0I7zzMTAdgagdbaJa"
    );

    setStatus("sent");
    setForm(initialForm);
  } catch (error) {
    console.error("Email gagal dikirim:", error);
    setStatus("error");
  }
};

  return (
    <section
      id="contact"
      className="py-24 sm:py-28 bg-[#f3eadb]"
      ref={ref}
    >
      <div className="container-px max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal max-w-2xl">
          <span className="text-sm font-semibold text-[#9a6f43] tracking-wide uppercase">
            Contact
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-[#3f2f20]">
            Let's build something together
          </h2>

          <p className="mt-4 text-[#6b5845] leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">

          {/* Left: info + map */}
          <div className="reveal reveal-delay-1 space-y-3">

            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-4 rounded-xl2 bg-[#fffaf2] border border-[#e5d5bd] p-4 hover:border-[#c9a66b] hover:bg-[#ead9bd]/50 transition-colors duration-200">

                  <span className="w-11 h-11 shrink-0 rounded-lg bg-[#ead9bd] text-[#8b633d] flex items-center justify-center shadow-softer">
                    <Icon size={19} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#8a7561] uppercase tracking-wide">
                      {label}
                    </p>

                    <p className="text-sm font-medium text-[#3f2f20] truncate">
                      {value}
                    </p>
                  </div>

                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}

            {/* Map */}
            <div className="rounded-xl2 overflow-hidden border border-[#e5d5bd] shadow-softer h-56 mt-2">
              <iframe
                title="Map showing general location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=110.30%2C-7.75%2C110.45%2C-7.65&layer=mapnik"
                className="w-full h-full grayscale-[15%]"
                loading="lazy"
              />
            </div>

          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="reveal reveal-delay-2 rounded-xl2 bg-[#fffaf2] border border-[#e5d5bd] p-6 sm:p-8 shadow-softer"
          >

            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />

              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="puputirasetyawati@gmail.com"
                required
              />
            </div>

            <div className="mt-5">
              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[#5c4632] mb-1.5"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about your project..."
                className="w-full rounded-lg border border-[#e5d5bd] bg-[#f8f1e6] px-4 py-3 text-sm text-[#3f2f20] placeholder:text-[#9a8977] focus:border-[#c9a66b] focus:bg-[#fffaf2] outline-none transition-colors resize-none"
              />
            </div>

            {/* Send button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#9a6f43] hover:bg-[#7f5938] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 shadow-soft transition-colors duration-200"
            >
              <Send size={17} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p
                role="status"
                className="mt-4 text-sm font-medium text-[#8b633d]"
              >
                Thanks — your message has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="mt-4 text-sm font-medium text-red-600"
              >
                Sorry, your message could not be sent. Please try again.
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-[#5c4632] mb-1.5"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-[#e5d5bd] bg-[#f8f1e6] px-4 py-3 text-sm text-[#3f2f20] placeholder:text-[#9a8977] focus:border-[#c9a66b] focus:bg-[#fffaf2] outline-none transition-colors"
      />
    </div>
  );
}