import type { Metadata } from "next";
import Link from "next/link";
import InstructorTrainingForm from "../components/InstructorTrainingForm";
import content from "../../content/instructor-training.json";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: { canonical: "https://andysinkerdriving.co.uk/instructor-training" },
};

export default function InstructorTrainingPage() {
  return (
    <div>
      <section className="hero service-hero">
        <div className="hero-band">
          <div className="site-shell service-hero-grid">
            <div className="stagger-rise">
                <p className="eyebrow">{content.hero.eyebrow}</p>
                <h1>{content.hero.title}</h1>
              <p className="hero-lede">
                  {content.hero.lede}
              </p>
              <ul className="service-points">
                  {content.hero.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="cta-row">
                <Link href="/contact" className="button-primary">
                  Arrange a Meeting
                </Link>
                <Link href="/contact" className="button-ghost">
                  Talk to Andy
                </Link>
              </div>
            </div>
            <aside className="hero-funnel-card stagger-rise delay-1">
                <h2>{content.hero.formTitle}</h2>
                <p>{content.hero.formDescription}</p>
              <InstructorTrainingForm />
            </aside>
          </div>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell">
            <h2 className="section-title">{content.benefits.title}</h2>
          <div className="content-grid">
              {content.benefits.items.map((benefit) => (
              <article key={benefit.title} className="content-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="site-shell split">
          <div>
              <h2 className="section-title">{content.career.title}</h2>
              {content.career.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="content-card">
              <h3>{content.career.cardTitle}</h3>
              <p>{content.career.cardBody}</p>
            <Link className="button-secondary" href="/contact">
              Get in Touch
            </Link>
          </aside>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell">
            <h2 className="section-title">{content.faqs.title}</h2>
          <div className="faq-list">
              {content.faqs.items.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
