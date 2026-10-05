import type { Metadata } from "next";
import Image from "next/image";
import content from "../../content/about.json";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: { canonical: "https://andysinkerdriving.co.uk/about" },
};

export default function AboutPage() {
  return (
    <div>
      <section className="hero service-hero">
        <div className="hero-band">
          <div className="site-shell stagger-rise">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="hero-lede">{content.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Bio + portrait */}
      <section className="content-section">
        <div className="site-shell">
          <div className="about-bio-grid">
            <div className="about-bio-text">
              {content.biography.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <figure className="about-portrait">
              <Image
                src={content.biography.image}
                alt={content.biography.imageAlt}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      {/* GoRoadie Award */}
      <section className="section alt">
        <div className="site-shell">
          <div className="about-award-feature">
            <div className="about-award-text">
              <p className="eyebrow">{content.featuredAward.eyebrow}</p>
              <h2>{content.featuredAward.title}</h2>
              <p>{content.featuredAward.body}</p>
            </div>
            <figure className="about-award-image">
              <Image
                src={content.featuredAward.image}
                alt={content.featuredAward.imageAlt}
                width={400}
                height={496}
                style={{ objectFit: "contain", borderRadius: "0.75rem" }}
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Intelligent Instructor Awards */}
      <section className="content-section">
        <div className="site-shell">
          <p className="eyebrow">{content.recognition.eyebrow}</p>
          <h2 className="section-title">{content.recognition.title}</h2>
          <p style={{ maxWidth: "60ch", marginBottom: "2rem" }}>{content.recognition.body}</p>
          <div className="about-awards-grid">
            {content.recognition.awards.map((award) => (
              <figure key={award.caption} className="about-plaque">
                <Image
                  src={award.image}
                  alt={award.imageAlt}
                  width={380}
                  height={380}
                  style={{ objectFit: "cover", borderRadius: "0.75rem" }}
                />
                <figcaption>{award.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
