import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Project } from "@/components/portfolio/Project";
import { Contact } from "@/components/portfolio/Contact";
import { About, Education, Skills, Services, Vision, Footer } from "@/components/portfolio/Sections";

const title = "Ayush Yadav — AI/ML Student & Frontend Developer";
const description =
  "Portfolio of Ayush Yadav, B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning at Sanskriti University, Mathura.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ayush Yadav",
          jobTitle: "AI/ML Student & Frontend Developer",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chhata, Mathura",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Sanskriti University",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Project />
        <Services />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
