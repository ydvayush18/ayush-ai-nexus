import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import heroOrb from "@/assets/hero-orb.jpg";

const highlights = ["AI / ML Enthusiast", "Frontend Developer", "Future Technology Explorer"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 aurora" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-40" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Sanskriti University
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-5xl leading-[1.05] font-medium sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Ayush Yadav</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 font-display text-sm uppercase tracking-[0.22em] text-silver sm:text-base">
              B.Tech Computer Science Engineering
            </p>
            <p className="mt-2 font-display text-sm uppercase tracking-[0.22em] text-primary sm:text-base">
              Artificial Intelligence &amp; Machine Learning Student
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Building intelligent solutions and modern digital experiences through artificial
              intelligence, machine learning, and innovative web development.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="glass-panel rounded-full px-4 py-1.5 text-xs tracking-wide text-silver"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#project">
                  Explore Projects <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="/resume.pdf" download>
                  Download Resume <Download />
                </a>
              </Button>
              <Button asChild variant="quiet" size="lg">
                <a href="#contact">
                  Contact Me <Mail />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
            <div className="absolute inset-4 rounded-full border border-glass-border spin-slow" aria-hidden="true" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-glass-border float-slow">
              <img
                src={heroOrb}
                alt="Abstract neural network sphere representing Ayush Yadav's focus on AI and machine learning"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="glass-panel mt-8 rounded-2xl px-5 py-4">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
              Currently
            </p>
            <p className="mt-2 text-sm text-silver">
              First year B.Tech student exploring AI systems and frontend engineering.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
