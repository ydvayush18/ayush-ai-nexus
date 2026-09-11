import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import projectImage from "@/assets/project-esim.jpg";

const features = [
  "5G campus internet solution",
  "Student-focused connectivity plans",
  "Digital eSIM access",
  "Modern user-friendly interface",
  "Scalable technology concept",
];

const tags = ["5G", "eSIM", "Campus Tech", "React", "Responsive UI", "AI-assisted Build"];

export function Project() {
  return (
    <section id="project" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Featured Project" title="5G eSIM Campus Connectivity Platform" />

      <Reveal className="glass-panel mt-14 overflow-hidden rounded-3xl">
        <div className="relative border-b border-glass-border bg-background/40 p-6 sm:p-10">
          <div className="overflow-hidden rounded-2xl border border-glass-border">
            <img
              src={projectImage}
              alt="Dark interface of the 5G eSIM campus connectivity platform showing student data plans"
              width={1280}
              height={832}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-base leading-relaxed text-silver">
              A smart campus connectivity solution designed to provide university students with
              high-speed 5G internet access through eSIM technology. The platform allows students to
              select suitable data plans according to their requirements and provides convenient
              digital connectivity within university campuses.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-glass-border px-3 py-1 text-[0.7rem] tracking-wide text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg" className="mt-10">
              <a
                href="https://campus-data-6.preview.emergentagent.com/?utm_source=share"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo <ArrowUpRight />
              </a>
            </Button>
          </div>

          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-silver">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
