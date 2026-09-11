import {
  Brain,
  Cpu,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Lightbulb,
  Mail,
  MapPin,
  Monitor,
  Sparkles,
  Telescope,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="About" title="A student engineer with a future-focused mindset." />
      <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass-panel rounded-2xl p-8">
          <p className="text-lg leading-relaxed text-silver">
            I am Ayush Yadav, a first-year B.Tech Computer Science Engineering student specializing
            in Artificial Intelligence and Machine Learning at Sanskriti University, Chhata,
            Mathura. I am passionate about exploring emerging technologies, creating AI-powered
            solutions, and developing modern web experiences using innovative tools.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ol className="relative space-y-8 border-l border-border/70 pl-8">
            {[
              {
                title: "Foundations in AI & ML",
                body: "Studying the fundamentals of intelligent systems, data and model behaviour.",
              },
              {
                title: "Frontend Craft",
                body: "Designing responsive, accessible interfaces with clean, maintainable structure.",
              },
              {
                title: "AI-assisted Building",
                body: "Using modern AI development tools to move faster from idea to shipped product.",
              },
            ].map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute top-1.5 -left-[2.15rem] h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
                <h3 className="font-display text-base text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Education" title="Academic path" />
      <Reveal className="mt-14">
        <article className="glass-panel grid gap-8 rounded-2xl p-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:p-10">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-primary/30 text-primary">
            <GraduationCap className="size-6" />
          </span>
          <div className="min-w-0">
            <h3 className="text-2xl font-medium">Sanskriti University</h3>
            <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0" /> Chhata, Mathura, Uttar Pradesh
            </p>
            <div className="hairline my-6" />
            <dl className="grid gap-6 sm:grid-cols-3">
              {[
                ["Degree", "Bachelor of Technology"],
                ["Branch", "Computer Science Engineering"],
                ["Specialization", "Artificial Intelligence & Machine Learning"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm text-silver">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-1.5 text-xs tracking-wide text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> First Year Student
            </p>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

const skillGroups = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    skills: [
      { name: "AI Fundamentals", level: 72 },
      { name: "Machine Learning Basics", level: 65 },
      { name: "AI Tools & Applications", level: 80 },
    ],
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 74 },
      { name: "Responsive Web Design", level: 88 },
      { name: "UI / UX Design", level: 78 },
      { name: "AI-assisted Development", level: 92 },
    ],
  },
  {
    icon: Lightbulb,
    title: "Other Skills",
    skills: [
      { name: "Problem Solving", level: 82 },
      { name: "Creative Thinking", level: 86 },
      { name: "Technology Research", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Capabilities in progress"
        description="A growing toolkit across intelligent systems and modern interface engineering."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 110}
            className="glass-panel group rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:glow-ring"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-glass-border text-primary transition-colors group-hover:border-primary/50">
              <group.icon className="size-5" />
            </span>
            <h3 className="mt-6 font-display text-lg">{group.title}</h3>
            <ul className="mt-6 space-y-5">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="min-w-0 truncate text-silver">{skill.name}</span>
                    <span className="shrink-0 text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-muted">
                    <span
                      className="block h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    icon: Layers,
    title: "Frontend Development",
    body: "Designing responsive and modern website interfaces using advanced AI-assisted development methods.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Development",
    body: "Using artificial intelligence tools to accelerate creativity, development, and digital innovation.",
  },
  {
    icon: Telescope,
    title: "Future Technology Exploration",
    body: "Learning and experimenting with emerging technologies in AI, ML, and software development.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="What I Do" title="How I work" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 110}
            className="group relative rounded-2xl border border-glass-border p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
          >
            <service.icon className="size-5 text-primary" />
            <h3 className="mt-6 font-display text-lg">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Vision() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 aurora opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-30" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <Cpu className="mx-auto size-6 text-primary" />
        <p className="mt-8 font-display text-2xl leading-relaxed sm:text-3xl">
          <span className="text-gradient">
            “My vision is to grow as an AI and technology professional by continuously learning,
            creating impactful projects, and contributing to innovative solutions.”
          </span>
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Future Vision
        </p>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs tracking-wide text-muted-foreground">
          © 2026 Ayush Yadav | Artificial Intelligence &amp; Machine Learning Student
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-primary">
            <Mail className="size-4" />
          </a>
          <a href="#contact" aria-label="LinkedIn" className="hover:text-primary">
            <Linkedin className="size-4" />
          </a>
          <a href="#contact" aria-label="GitHub" className="hover:text-primary">
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
