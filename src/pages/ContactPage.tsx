import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageHero } from "../components/PageHero";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/noctrlzdave",
    icon: <Github size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin size={18} />,
  },
  {
    label: "Email",
    href: "mailto:okorochukwuebuka34@gmail.com",
    icon: <Mail size={18} />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2349025068558",
    icon: <Send size={18} />,
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <PageHero
          eyebrow="Contact"
          title="Let’s build something thoughtful, modern, and effective."
          description="I’m available for freelance work, full-time roles, and product collaborations. Let’s talk about your next build."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8"
          >
            <h2 className="text-2xl font-semibold text-white">Reach out</h2>
            <p className="mt-4 text-slate-400">
              Have a product idea, a redesign request, or a role you’d like to
              discuss? I’m happy to connect.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
                >
                  {social.icon} {social.label}
                </a>
              ))}
            </div>
          </motion.div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
