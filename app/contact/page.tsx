import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with Andy Sinker Driving School about driving lessons, instructor training, and franchise options.",
  alternates: { canonical: "https://andysinkerdriving.co.uk/contact" },
};

export default function ContactPage() {
  return (
    <section className="hero service-hero">
      <div className="hero-band">
        <div className="site-shell service-hero-grid">
          <div className="stagger-rise">
            <p className="eyebrow">Contact</p>
            <h1>Let us map your next step.</h1>
            <p className="hero-lede">
              Share your current stage and goals. We will recommend the right route for learner
              lessons, ADI training, franchise growth, or a combined pathway.
            </p>
            <div className="cta-row">
              <Link className="button-primary" href="/driving-lessons">
                Book Lessons
              </Link>
              <Link className="button-ghost" href="/instructor-training">
                Start Instructor Application
              </Link>
            </div>
          </div>
          <aside className="hero-funnel-card stagger-rise delay-1">
            <h2>Send a message</h2>
            <p>Fill in the form below and we&rsquo;ll get back to you as soon as possible.</p>
            <ContactForm />
            <div style={{ marginTop: "1.5rem" }}>
              <p>Or reach us directly:</p>
              <p>
                Phone: <a href="tel:+447745671702">07745 671702</a>
              </p>
              <p>
                Email: <a href="mailto:hello@andysinkerdriving.co.uk">hello@andysinkerdriving.co.uk</a>
              </p>
              <p>Hours: Monday to Saturday, 08:00 to 19:00</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
