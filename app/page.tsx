import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import content from "../content/home.json";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-band">
          <div className="site-shell hero-grid">
            <div className="stagger-rise">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1>{content.hero.title}</h1>
              <p className="hero-lede">{content.hero.lede}</p>
              <div className="hero-focus-grid" aria-label="Service priorities">
                {content.audiences.map((audience) => (
                  <article key={audience.title} className="hero-focus-card">
                    <h2>{audience.title}</h2>
                    <p>{audience.body}</p>
                  </article>
                ))}
              </div>
              <div className="cta-row">
                <Link href="/driving-lessons" className="button-primary">
                  Book Driving Lessons
                </Link>
                <Link href="/instructor-training" className="button-ghost">
                  Become an Instructor
                </Link>
                <Link href="/contact" className="button-primary">
                  Contact Us
                </Link>
              </div>
            </div>
            <aside className="hero-card hero-portrait stagger-rise delay-1" aria-label="Andy Sinker">
              <Image
                src={content.hero.image}
                alt={content.hero.imageAlt}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <p className="eyebrow">{content.whyChooseUs.eyebrow}</p>
          <h2 className="section-title">{content.whyChooseUs.title}</h2>
          <div className="card-grid">
            {content.whyChooseUs.items.map((item, index) => (
              <article key={item.title} className={`feature-card stagger-rise delay-${index + 1}`}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="site-shell center-panel">
          <p className="eyebrow">{content.mission.eyebrow}</p>
          <h2 className="section-title">{content.mission.title}</h2>
          <p>{content.mission.body}</p>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <p className="eyebrow">{content.services.eyebrow}</p>
          <h2 className="section-title">{content.services.title}</h2>
          <div className="card-grid">
            {content.services.items.map((service) => (
              <Link key={service.title} href={service.href} className="path-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="site-shell center-panel">
          <p className="eyebrow">{content.closing.eyebrow}</p>
          <h2 className="section-title">{content.closing.title}</h2>
          <p>{content.closing.body}</p>
          <div className="cta-row">
            <Link href="/driving-lessons" className="button-primary">
              Book a Lesson
            </Link>
            <Link href="/contact" className="button-primary">
              Contact Us
            </Link>
            <Link href="/franchise" className="button-ghost">
              Explore Franchising
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
