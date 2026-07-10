import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Driving Lessons",
  description:
    "Personalised driving lessons tailored to you. Build confidence, develop safe driving habits and get the skills you need — supported every step of the way.",
  alternates: { canonical: "https://andysinkerdriving.co.uk/driving-lessons" },
};

const appFeatures = [
  "Track your progress through the driving syllabus",
  "Complete reflective learning logs",
  "Book and manage lessons",
  "Receive lesson reminders",
  "Make secure in-app payments",
  "Share progress with parents or guardians through dedicated parental access",
];

const resources = [
  "Learner Driver Introduction Booklet",
  "Theory Test Support Materials",
  "Learning Log",
  "Show Me, Tell Me Flashcards",
];

const additionalSupport = [
  "YouTube videos covering theory test topics and driving advice",
  "Access to The Honest Truth programme — helping new drivers stay safer after passing their test",
  "Access to the Nervous Drivers Calming Kit course through Confident Drivers",
  "Access to Driving Test Nerves Pro through L of a Way 2 Pass",
  "Regular online support sessions via Zoom for extra guidance, motivation, and Q&As",
];

const drivingFaqs = [
  {
    q: "How old do I need to be to start driving lessons?",
    a: "You can start learning to drive a car in the UK when you are 17 years old and have a valid provisional driving licence.",
  },
  {
    q: "Do I need a provisional licence before taking lessons?",
    a: "Yes. You must have a valid provisional driving licence before you can take lessons on public roads.",
  },
  {
    q: "How many driving lessons will I need before my test?",
    a: "Every learner is different. The average learner requires around 45 hours of professional tuition alongside additional private practice, according to the DVSA (Driver and Vehicle Standards Agency).",
  },
  {
    q: "Can I choose between manual and automatic lessons?",
    a: "Currently at Andy Sinker Driving we are only in a position to offer manual lessons, but we will soon be starting automatic lessons.",
  },
  {
    q: "How much do driving lessons cost?",
    a: "Lesson prices vary depending on the status and experience of your driving instructor. Contact us for our latest pricing.",
  },
  {
    q: "Can I book intensive driving courses?",
    a: "Yes. Intensive and semi-intensive courses are available subject to availability for learners who want to progress quickly. Please note that due to government legislation the school or instructor is unable to provide or book tests on your behalf. Contact us for availability.",
  },
  {
    q: "What happens if I need to cancel a lesson?",
    a: "48 hours' notice must be provided when cancelling a lesson as per our cancellation policy. This gives our instructors time to offer the slot to another learner. The more notice you give, the better — most instructors' income relies solely on providing lessons. Please contact us as soon as possible if you need to reschedule.",
  },
  {
    q: "Can I use my instructor's car for the driving test?",
    a: "Yes. Subject to availability and your instructor's approval, you can usually use the training vehicle for your practical test.",
  },
  {
    q: "Do you offer motorway lessons?",
    a: "Yes. Motorway lessons are available for qualified drivers and learners as regulations permit.",
  },
  {
    q: "What areas do you cover?",
    a: "We provide lessons across most Leeds postcodes. Contact us to check availability in your postcode.",
  },
];

export default function DrivingLessonsPage() {
  return (
    <div>
      <section className="hero service-hero">
        <div className="hero-band">
          <div className="site-shell service-hero-grid">
            <div className="stagger-rise">
              <p className="eyebrow">Driving Lessons</p>
              <h1>Driving Lessons Tailored to You</h1>
              <p className="hero-lede">
                At Andy Sinker Driving School, we understand that every learner has different
                needs. That&rsquo;s why we provide personalised driving lessons designed around
                your individual needs, learning style and goals.
              </p>
              <ul className="service-points">
                <li>Build confidence and develop safer driving habits.</li>
                <li>From first lesson to test-ready — at a pace that suits you.</li>
                <li>Supported every step of the way, on and off the road.</li>
              </ul>
              <div className="cta-row">
                <Link href="/ppc/driving-lessons" className="button-primary">
                  Book Your First Lesson
                </Link>
                <Link href="/contact" className="button-ghost">
                  Ask About Availability
                </Link>
              </div>
            </div>
            <aside className="hero-funnel-card stagger-rise delay-1">
              <h2>Get started today</h2>
              <p>Tell us a little about yourself and we&rsquo;ll get back to you with availability.</p>
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
          <p className="eyebrow" style={{ color: "var(--foreground)" }}>More Than Just Driving Lessons</p>
          <h2 className="section-title">What You&rsquo;ll Get When You Learn With Us</h2>
          <p className="opp-intro">
            When you learn with Andy Sinker Driving School, you&rsquo;ll benefit from a
            comprehensive support package designed to help you succeed both on and off the road.
          </p>
          <div className="opp-grid" style={{ marginTop: "1.6rem" }}>
            <article className="opp-card">
              <h3>Dedicated Support</h3>
              <p>A reliable, supportive driving instructor as your main point of contact, with access to the wider Andy Sinker Driving School team for additional guidance.</p>
            </article>
            <article className="opp-card">
              <h3>Total Drive App</h3>
              <p>All learners receive access to the Total Drive app to track progress, log reflections, book lessons, receive reminders, pay securely, and share updates with parents.</p>
            </article>
            <article className="opp-card">
              <h3>Learning Resources</h3>
              <p>Downloadable materials including the Learner Driver Introduction Booklet, Theory Test Support, Learning Log, and Show Me Tell Me Flashcards.</p>
            </article>
            <article className="opp-card">
              <h3>Additional Learning Support</h3>
              <p>YouTube theory videos, The Honest Truth programme, Confident Drivers calming kit, Driving Test Nerves Pro, and regular Zoom support sessions.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell split">
          <div>
            <h2 className="section-title">Total Drive App Features</h2>
            <p className="section-lede">Included free for all learners:</p>
            <ul className="check-grid">
              {appFeatures.map((f) => (
                <li key={f} className="check-item">{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-title">Learning Resources</h2>
            <p className="section-lede">Downloadable materials you&rsquo;ll receive:</p>
            <ul className="check-grid" style={{ gridTemplateColumns: "1fr" }}>
              {resources.map((r) => (
                <li key={r} className="check-item">{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section section">
        <div className="site-shell split">
          <div>
            <h2 className="section-title">Additional Learning Support</h2>
            <ul className="check-grid" style={{ gridTemplateColumns: "1fr" }}>
              {additionalSupport.map((s) => (
                <li key={s} className="check-item">{s}</li>
              ))}
            </ul>
          </div>
          <aside className="content-card" style={{ alignSelf: "center" }}>
            <h3>Helping You Become a Safer, Confident Driver</h3>
            <p>
              Our goal isn&rsquo;t just to help you pass your driving test — it&rsquo;s to help you become
              a confident, responsible, and independent driver. With expert tuition, modern
              learning tools, and ongoing support, we&rsquo;re committed to helping you achieve
              your driving goals.
            </p>
            <Link className="button-secondary" style={{ marginTop: "0.75rem", display: "inline-flex" }} href="/ppc/driving-lessons">
              Book Your First Lesson
            </Link>
          </aside>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell">
          <h2 className="section-title">Driving Lessons FAQs</h2>
          <div className="faq-list">
            {drivingFaqs.map((faq) => (
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
