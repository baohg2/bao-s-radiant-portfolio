/**
 * Contact — glass form (client-side only) with social links.
 */
import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Front-end demo: simulate send. Wire to your backend / mail service later.
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent ✨",
        description: "Thanks for reaching out — I'll get back to you within 48 hours.",
      });
    }, 900);
  };

  return (
    <section id="contact" className="section-padding relative">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something useful."
        description="Got a problem worth solving, a dataset worth exploring, or just want to chat about analytics over coffee? My inbox is open."
      />

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5">
        {/* Info */}
        <aside className="lg:col-span-2">
          <div className="glass-card hover-lift rounded-[2rem] p-7">
            <h3 className="font-display text-2xl font-medium tracking-tight">Say hello</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I reply to most messages within two business days. For longer conversations, a
              quick call usually beats email.
            </p>

            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="mailto:hello@baohoang.com"
                  className="group flex items-center gap-3 rounded-2xl bg-foreground/5 p-3 transition-colors hover:bg-primary/10"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                    hello@baohoang.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-3 rounded-2xl bg-foreground/5 p-3 transition-colors hover:bg-primary/10"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground">
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                    linkedin.com/in/baohoang
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-3 rounded-2xl bg-foreground/5 p-3 transition-colors hover:bg-primary/10"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-warm text-secondary-foreground">
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                    github.com/baohoang
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Form */}
        <form onSubmit={onSubmit} className="lg:col-span-3" noValidate>
          <div className="glass-card hover-lift rounded-[2rem] p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Name" type="text" placeholder="Your full name" required />
              <Field id="email" label="Email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="mt-4">
              <Field id="subject" label="Subject" type="text" placeholder="What's it about?" />
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me a little about what you're working on…"
                className="w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:scale-105 hover:shadow-glow disabled:opacity-70"
            >
              {sending ? "Sending…" : "Send message"}
              <Send
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Field = ({
  id,
  label,
  type,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70"
    >
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
    />
  </div>
);

export default Contact;
