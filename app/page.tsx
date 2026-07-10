import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Andy Sinker Driving School — expert driving lessons, instructor training, and franchise opportunities.",
};

const whyChooseUs = [
  {
    title: "Friendly and Reliable Instructors",
    body: "Our professional instructors create a calm, supportive environment where every learner feels comfortable and can progress with confidence.",
  },
  {
    title: "Flexible Lesson Times",
    body: "Lessons available to suit your schedule, making it easier to fit learning around work, study, or family commitments.",
  },
  {
    title: "Tailored to Your Pace",
    body: "Structured lessons designed around your individual ability and learning style, so you always progress at the right speed.",
  },
  {
    title: "High First-Time Pass Rate",
    body: "Our thorough test preparation and structured approach have helped many learners achieve their licence first time.",
  },
  {
    title: "Competitive Pricing",
    body: "Affordable lessons with support for theory test preparation and fully funded online driving anxiety courses.",
  },
  {
    title: "Multi-Award Winning Lead Trainer",
    body: "Learn from an industry-recognised trainer, with regular open Zoom sessions where you can ask questions and discuss any concerns.",
  },
];

const services = [
  {
    title: "Learner Driving Lessons",
    href: "/driving-lessons",
    desc: "From complete beginner to test-ready, with structured plans built around your progress.",
  },
  {
    title: "Refresher Lessons",
    href: "/driving-lessons",
    desc: "Rebuild your confidence and sharpen your skills after a break from driving.",
  },
  {
    title: "Motorway Driving Training",
    href: "/driving-lessons",
    desc: "Guided motorway sessions to develop the skills needed for high-speed road confidence.",
  },
  {
    title: "Mock Driving Tests",
    href: "/driving-lessons",
    desc: "Realistic test-condition practice to prepare you fully for the real thing.",
  },
  {
    title: "Pass Plus Courses",
    href: "/driving-lessons",
    desc: "Post-test training to broaden your experience and potentially reduce insurance premiums.",
  },
  {
    title: "Instructor Training",
    href: "/instructor-training",
    desc: "Full ADI Part 1–3 preparation with in-car mentoring and business launch support.",
  },
  {
    title: "The Honest Truth Programme",
    href: "/contact",
    desc: "Promoting safer driving habits for new drivers in the critical period after passing their test.",
  },
  {
    title: "Online Anxiety Courses",
    href: "/contact",
    desc: "Support for driving anxiety, available online and fully funded by the school.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-band">
          <div className="site-shell hero-grid">
            <div className="stagger-rise">
              <p className="eyebrow">Andy Sinker Driving School</p>
              <h1>Your journey to safe and confident driving — or a career change — starts here.</h1>
              <p className="hero-lede">
                Welcome to Andy Sinker Driving School, where we are committed to helping learners
                become safe, skilled, and confident drivers. Whether you&apos;re a complete beginner,
                preparing for your driving test, looking to improve your driving skills, or considering
                a career in driver education, our team is here to support you every step of the way.
              </p>
              <div className="hero-focus-grid" aria-label="Service priorities">
                <article className="hero-focus-card">
                  <h2>For Learners</h2>
                  <p>Structured lessons, mock tests, motorway training, and anxiety support.</p>
                </article>
                <article className="hero-focus-card">
                  <h2>For Instructors</h2>
                  <p>ADI training, business launch support, and franchise growth systems.</p>
                </article>
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
                src="/andy-sinker.png"
                alt="Andy Sinker"
                width={640}
                height={640}
                priority
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-title">Six reasons learners and instructors choose Andy Sinker</h2>
          <div className="card-grid">
            {whyChooseUs.map((item, index) => (
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
          <p className="eyebrow">Our Mission</p>
          <h2 className="section-title">Not just a driving test — a lifetime of safer driving</h2>
          <p>
            Our goal is not only to help you pass your driving test but to develop the knowledge,
            skills, and confidence needed for a lifetime of safer driving. We create a positive
            learning environment where every student can progress comfortably at their own pace
            and achieve their driving goals.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <p className="eyebrow">Services We Offer</p>
          <h2 className="section-title">Everything you need, from first lesson to career</h2>
          <div className="card-grid">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="path-card">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="site-shell center-panel">
          <p className="eyebrow">Book Your First Lesson Today</p>
          <h2 className="section-title">Take the first step towards your driving licence</h2>
          <p>
            Contact us today to discuss your requirements and book your first lesson.
            We look forward to helping you achieve your goals.
          </p>
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
