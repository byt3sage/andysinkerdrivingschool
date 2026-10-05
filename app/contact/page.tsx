import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import content from "../../content/contact.json";
import siteContent from "../../content/site.json";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: { canonical: "https://andysinkerdriving.co.uk/contact" },
};

export default function ContactPage() {
  return (
    <section className="hero service-hero">
      <div className="hero-band">
        <div className="site-shell service-hero-grid">
          <div className="stagger-rise">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="hero-lede">{content.hero.lede}</p>
          </div>
          <aside className="hero-funnel-card stagger-rise delay-1">
            <h2>{content.hero.formTitle}</h2>
            <p>{content.hero.formDescription}</p>
            <ContactForm />
            <div style={{ marginTop: "1.5rem" }}>
              <p>{content.hero.directContactLabel}</p>
              <p>
                {siteContent.footer.phoneLabel}: <a href={`tel:${siteContent.footer.phoneDisplay.replace(/\s/g, "")}`}>
                  {siteContent.footer.phoneDisplay}
                </a>
              </p>
              <p>
                Email: <a href={`mailto:${siteContent.footer.email}`}>{siteContent.footer.email}</a>
              </p>
              <p>Hours: {content.hero.hours}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
