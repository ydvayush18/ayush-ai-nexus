import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";

const channels = [
  { icon: Mail, label: "Email", value: "ydvayush512@gmail.com", href: "mailto:ydvayush512@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/username", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/ydvayush18", href: "https://github.com/ydvayush18" },
];

const fieldClass =
  "w-full rounded-xl border border-glass-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all duration-300 outline-none focus:border-primary/60 focus:glow-ring";

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something intelligent."
        description="Open to internships, collaborations and conversations about AI and frontend engineering."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="glass-panel rounded-2xl p-8">
          <h3 className="font-display text-xl">Ayush Yadav</h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" /> Chhata, Mathura, India
          </p>
          <div className="hairline my-7" />
          <ul className="space-y-5">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-glass-border text-primary transition-colors group-hover:border-primary/50">
                    <channel.icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                      {channel.label}
                    </span>
                    <span className="block truncate text-sm text-silver transition-colors group-hover:text-primary">
                      {channel.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="glass-panel rounded-2xl p-8">
          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              setSending(true);
              const form = event.currentTarget;
              window.setTimeout(() => {
                setSending(false);
                form.reset();
                toast.success("Message noted", {
                  description: "Connect a mail service to deliver messages to your inbox.",
                });
              }, 700);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Name
                </span>
                <input required name="name" placeholder="Your name" className={`mt-2 ${fieldClass}`} />
              </label>
              <label className="block">
                <span className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className={`mt-2 ${fieldClass}`}
                />
              </label>
            </div>
            <label className="block">
              <span className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your idea or opportunity"
                className={`mt-2 resize-none ${fieldClass}`}
              />
            </label>
            <Button type="submit" variant="hero" size="lg" disabled={sending}>
              {sending ? "Sending…" : "Send Message"} <Send />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
