import type { Metadata } from "next";
import Link from "next/link";
import content from "../../content/driving-lessons.json";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: { canonical: "https://andysinkerdriving.co.uk/driving-lessons" },
};

export default function DrivingLessonsPage() {
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
                  Book Your First Lesson
                </Link>
                <Link href="/contact" className="button-ghost">
                  Ask About Availability
                </Link>
              </div>
            </div>
            <aside className="hero-funnel-card stagger-rise delay-1">
              <h2>{content.hero.formTitle}</h2>
              <p>{content.hero.formDescription}</p>
              <form>
                <label>
                  Full name
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" autoComplete="email" required />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" autoComplete="tel" required />
                </label>
                <label>
                  Experience level
                  <select name="experience" defaultValue="none">
                    <option value="none">Complete beginner</option>
                    <option value="some">Some lessons previously</option>
                    <option value="refresher">Returning / refresher</option>
                    <option value="test">Ready to book test</option>
                  </select>
                </label>
                <button type="submit" className="button-primary">
                  Check Availability
                </button>
              </form>
            </aside>
          </div>
        </div>
      </section>

      <section className="content-section section">
        <div className="site-shell">
          <p className="eyebrow" style={{ color: "var(--foreground)" }}>{content.offer.eyebrow}</p>
          <h2 className="section-title">{content.offer.title}</h2>
          <p className="opp-intro">{content.offer.intro}</p>
          <div className="opp-grid" style={{ marginTop: "1.6rem" }}>
            {content.offer.items.map((item) => (
              <article key={item.title} className="opp-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell split">
          <div>
            <h2 className="section-title">{content.app.title}</h2>
            <p className="section-lede">{content.app.intro}</p>
            <ul className="check-grid">
              {content.app.items.map((item) => (
                <li key={item} className="check-item">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-title">{content.resources.title}</h2>
            <p className="section-lede">{content.resources.intro}</p>
            <ul className="check-grid" style={{ gridTemplateColumns: "1fr" }}>
              {content.resources.items.map((item) => (
                <li key={item} className="check-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section section">
        <div className="site-shell split">
          <div>
            <h2 className="section-title">{content.additionalSupport.title}</h2>
            <ul className="check-grid" style={{ gridTemplateColumns: "1fr" }}>
              {content.additionalSupport.items.map((item) => (
                <li key={item} className="check-item">{item}</li>
              ))}
            </ul>
          </div>
          <aside className="content-card" style={{ alignSelf: "center" }}>
            <h3>{content.additionalSupport.cardTitle}</h3>
            <p>{content.additionalSupport.cardBody}</p>
            <Link className="button-secondary" style={{ marginTop: "0.75rem", display: "inline-flex" }} href="/contact">
              Book Your First Lesson
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
