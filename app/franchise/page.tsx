import type { Metadata } from "next";
import Link from "next/link";
import FranchiseForm from "../components/FranchiseForm";
import content from "../../content/franchise.json";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: { canonical: "https://andysinkerdriving.co.uk/franchise" },
};

export default function FranchisePage() {
  return (
    <div>
      <section className="hero service-hero">
        <div className="hero-band">
          <div className="site-shell service-hero-grid">
            <div className="stagger-rise">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1>{content.hero.title}</h1>
              <p className="hero-lede">{content.hero.lede}</p>
              <ul className="service-points">
                {content.hero.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="cta-row">
                <Link href="/contact" className="button-primary">
                  Request a Call Back
                </Link>
                <Link href="/contact" className="button-ghost">
                  Ask a Question
                </Link>
              </div>
            </div>
            <aside className="hero-funnel-card stagger-rise delay-1">
              <h2>{content.hero.formTitle}</h2>
              <p>{content.hero.formDescription}</p>
              <FranchiseForm />
            </aside>
          </div>
        </div>
      </section>

      <section className="content-section section">
        <div className="site-shell">
          <p className="eyebrow" style={{ color: "var(--foreground)" }}>{content.opportunities.introLabel}</p>
          <div className="opp-grid">
            {content.opportunities.items.map((opp) => (
              <article key={opp.title} className="opp-card">
                <h3>{opp.title}</h3>
                <p>{opp.body}</p>
              </article>
            ))}
          </div>
          <p className="opp-intro">{content.opportunities.body}</p>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell">
          <h2 className="section-title">{content.whyChoose.title}</h2>
          <div className="content-grid">
            {content.whyChoose.items.map((item) => (
              <article key={item.title} className="content-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section">
        <div className="site-shell">
          <h2 className="section-title">{content.package.title}</h2>
          <p className="section-lede">{content.package.intro}</p>
          <ul className="check-grid">
            {content.package.items.map((item) => (
              <li key={item} className="check-item">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell split">
          <div>
            <h2 className="section-title">{content.whoWeWant.title}</h2>
            <p className="section-lede">{content.whoWeWant.intro}</p>
            <ul className="check-grid">
              {content.whoWeWant.items.map((item) => (
                <li key={item} className="check-item">{item}</li>
              ))}
            </ul>
          </div>
          <aside className="content-card" style={{ alignSelf: "center" }}>
            <h3>{content.whoWeWant.cardTitle}</h3>
            <p>{content.whoWeWant.cardBody}</p>
            <Link className="button-secondary" style={{ marginTop: "0.75rem", display: "inline-flex" }} href="/contact">
              Talk to Us
            </Link>
          </aside>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell split">
          <div>
            <h2 className="section-title">{content.financial.title}</h2>
            {content.financial.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="content-card">
            <h3>{content.financial.cardTitle}</h3>
            <p>{content.financial.cardBody}</p>
            <Link className="button-secondary" href="/contact">
              Get in Touch
            </Link>
          </aside>
        </div>
      </section>

      <section className="content-section section">
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

