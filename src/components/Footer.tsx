import { Github, Linkedin, Mail, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="min-w-0 break-words">
          <p className="font-semibold text-white">Okoro Chukwuebuka</p>
          <p>
            Building premium web experiences for businesses, founders, and
            modern teams.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/noctrlzdave"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <Github size={16} /> GitHub
          </a>
         
          <a
            href="mailto:okorochukwuebuka34@gmail.com"
            className="flex items-center gap-2 hover:text-white"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://wa.me/2349025068558"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <Send size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
