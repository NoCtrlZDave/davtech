import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-emerald-500/10"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-slate-300">
          Name
          <input
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm text-slate-300">
          Email
          <input
            required
            type="email"
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm text-slate-300">
        Subject
        <input
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0"
          placeholder="Project inquiry"
        />
      </label>
      <label className="mt-4 block text-sm text-slate-300">
        Message
        <textarea
          required
          rows={5}
          className="mt-2 min-h-28 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0"
          placeholder="Tell me about your idea"
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-emerald-300"
      >
        {submitted ? <CheckCircle2 size={18} /> : <Send size={18} />}{" "}
        {submitted ? "Message sent" : "Send message"}
      </button>
    </form>
  );
}
