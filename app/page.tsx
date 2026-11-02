import { Portfolio } from "@/components/portfolio";
import { experiences, profile, site, skills } from "@/lib/content";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.headline,
  description: site.description,
  url: site.url,
  image: `${site.url}headshot.webp`,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "National Institute of Technology, Patna",
  },
  worksFor: experiences
    .filter((e) => e.kind !== "break" && e.period.includes("Present"))
    .map((e) => ({ "@type": "Organization", name: e.org })),
  knowsAbout: skills.flatMap((group) => group.items).slice(0, 25),
  sameAs: [profile.linkedin, profile.github],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Portfolio />
    </>
  );
}
