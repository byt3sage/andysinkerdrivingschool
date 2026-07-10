import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instructor Training",
  description:
    "Become an Approved Driving Instructor (ADI) with Andy Sinker. Enjoy flexible hours, job satisfaction, and the chance to make a real difference on the road.",
  alternates: { canonical: "https://andysinkerdriving.co.uk/instructor-training" },
};

const faqs = [
  {
    q: "What is an ADI?",
    a: 'ADI stands for "Approved Driving Instructor". ADIs are qualified instructors registered with the Driver and Vehicle Standards Agency (DVSA).',
  },
  {
    q: "What are the requirements to become a driving instructor?",
    a: "You must meet the DVSA eligibility requirements. This includes age restrictions, driving experience and background checks.",
  },
  {
    q: "How long does ADI training take?",
    a: "Training times vary, depending on their availability and progress and test availability.",
  },
  {
    q: "What are the ADI Part 1, Part 2 and Part 3 tests?",
    a: "Part 1 is the theory test, Part 2 assesses your driving ability, and Part 3 evaluates your instructional skills.",
  },
  {
    q: "Do you provide support for all three ADI tests?",
    a: "Yes. Our training programme covers all stages of the qualification process.",
  },
  {
    q: "Can I train part-time while working?",
    a: "Yes. Many trainees complete their instructor training around existing work and family commitments.",
  },
  {
    q: "What happens if I fail an ADI test?",
    a: "You can sit the Part 1 test as many times as you need, but for the Part 2 and Part 3 tests you will get a maximum of 3 attempts. If you are unsuccessful after your 3rd attempt, you need to wait until your Part 1 test runs out of date before starting the process again.",
  },
  {
    q: "How much can a qualified driving instructor earn?",
    a: "Income varies depending on location, hours worked, and whether you are self-employed or working under a franchise.",
  },
  {
    q: "Will I receive help finding pupils once qualified?",
    a: "Yes. We can discuss franchise and pupil supply options available to newly qualified instructors.",
  },
  {
    q: "Is there ongoing support after qualification?",
    a: "Yes. We provide continuing support, mentoring, and professional development opportunities to all franchisees.",
  },
];

const benefits = [
  {
    title: "Enjoy Flexible Working Hours",
    body: "Whether you prefer to work full-time, part-time, weekdays, evenings, weekends or even wind down into retirement, you can structure your schedule around your lifestyle and personal commitments. This flexibility makes driving instruction an attractive career for parents, career changers and those seeking a better work-life balance.",
  },
  {
    title: "Make a Positive Difference",
    body: "Learning to drive is a significant milestone in a person's life. As an ADI, you'll play an important role in helping learners gain independence, access new employment opportunities and achieve personal goals. Few careers offer the same level of personal satisfaction as seeing a student pass their driving test.",
  },
  {
    title: "Continuous Professional Development",
    body: "Becoming an ADI is just the beginning. Many instructors continue to develop their skills through additional training, specialist qualifications and coaching techniques — from advanced driving and fleet training to motorway lessons and instructor training.",
  },
];

export default function InstructorTrainingPage() {
  return (
    <div>
      <section className="hero service-hero">
        <div className="hero-band">
          <div className="site-shell service-hero-grid">
            <div className="stagger-rise">
              <p className="eyebrow">Instructor Training</p>
              <h1>Why become an Approved Driving Instructor (ADI)?</h1>
              <p className="hero-lede">
                If you&rsquo;re looking for a career that offers full flexibility, job satisfaction
                and the opportunity to make a real difference in people&rsquo;s lives, becoming an
                ADI could be the perfect choice.
              </p>
              <ul className="service-points">
                <li>Flexible hours — full-time, part-time, evenings or weekends.</li>
                <li>Client-centred teaching that keeps every lesson different.</li>
                <li>Help learners gain confidence, independence and safer roads.</li>
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
              <h2>Find out if ADI training is right for you</h2>
              <p>Get in touch and we can arrange a meeting in person, via Zoom or over the phone.</p>
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
                  Preferred contact method
                  <select name="contact_method" defaultValue="phone">
                    <option value="phone">Phone call</option>
                    <option value="zoom">Zoom</option>
                    <option value="in_person">In person</option>
                  </select>
                </label>
                <button type="submit" className="button-primary">
                  Request Information
                </button>
              </form>
              {/* <p className="hero-funnel-note">No obligation.</p> */}
            </aside>
          </div>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell">
          <h2 className="section-title">The Benefits of a Rewarding Career as an ADI</h2>
          <div className="content-grid">
            {benefits.map((benefit) => (
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
            <h2 className="section-title">Is Becoming an ADI Right for You?</h2>
            <p>
              Successful driving instructors are patient, professional, reliable and passionate
              about helping others learn. If you enjoy working with people, have excellent
              communication skills, are passionate about road safety and want a career that
              offers flexibility and personal fulfilment, becoming an ADI could be the ideal
              next step.
            </p>
            <p>
              As an ADI you&rsquo;ll use client-centred methods to help each learner at their own
              pace, meeting their individual needs. Every lesson is different, which keeps the
              role engaging and rewarding.
            </p>
          </div>
          <aside className="content-card">
            <h3>Ready to find out more?</h3>
            <p>
              Contact us to arrange a meeting either in person, via Zoom or over the phone.
              We&rsquo;ll answer all your questions and help you decide if becoming an ADI is
              the right move for you.
            </p>
            <Link className="button-secondary" href="/contact">
              Get in Touch
            </Link>
          </aside>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell">
          <h2 className="section-title">Driving Instructor Training FAQs</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
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
