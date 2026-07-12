import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Andy Sinker",
  description:
    "Meet Andy Sinker ADI, M Imst MTD — Managing Director and Lead Trainer at Andy Sinker Driving School. Multi-award winning driving instructor and GoRoadie's Driving Instructor of the Year for England 2026.",
  alternates: { canonical: "https://andysinkerdriving.co.uk/about" },
};

export default function AboutPage() {
  return (
    <div>
      <section className="hero service-hero">
        <div className="hero-band">
          <div className="site-shell stagger-rise">
            <p className="eyebrow">About</p>
            <h1>Andy Sinker ADI, <span style={{ whiteSpace: "nowrap" }}>M Imst MTD</span></h1>
            <p className="hero-lede">Managing Director and Lead Trainer</p>
          </div>
        </div>
      </section>

      {/* Bio + portrait */}
      <section className="content-section">
        <div className="site-shell">
          <div className="about-bio-grid">
            <div className="about-bio-text">
              <p>
                Andy is passionate about helping learner drivers, experienced motorists looking to
                improve their skills and trainee driving instructors achieve their goals.
              </p>
              <p>
                As a proud member of the Institute of Master Tutors of Driving and holder of
                Tri-Coaching BTEC level 4 in Coaching for Driver Development, Andy is currently
                partaking in Bright Coaching&apos;s Professional Diploma in Coaching for Driving
                Instructors. Andy is dedicated to continuous personal and professional development. He
                regularly updates his knowledge and skills to ensure that every learner and instructor receives the
                highest standard of training and support throughout their driving journey.
              </p>
            </div>
            <figure className="about-portrait">
              <Image
                src="/about/andy-sinker.jpeg"
                alt="Andy Sinker leaning on his driving school car"
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
              <p className="eyebrow">Featured Award</p>
              <h2>GoRoadie Driving Instructor of the Year — England 2026</h2>
              <p>
                Recognised as one of the UK&apos;s top driving instructors, Andy was honoured to
                receive the GoRoadie&apos;s Driving Instructor of the Year Award for England in 2026,
                recognising his commitment to excellence in driver training.
              </p>
            </div>
            <figure className="about-award-image">
              <Image
                src="/about/go-roadie-award.jpeg"
                alt="GoRoadie Awards 2026 — Driving Instructor of the Year England — Andy Sinker"
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
          <p className="eyebrow">Recognition</p>
          <h2 className="section-title">Intelligent Instructor Awards</h2>
          <p style={{ maxWidth: "60ch", marginBottom: "2rem" }}>
            Andy has been ranked among the Top 100 Driving Instructors in the country for the
            Intelligent Instructor Awards. In 2023, he received a Highly Commended award for the
            Yorkshire and Humber region, followed by Silver Awards in both 2025 and 2026.
          </p>
          <div className="about-awards-grid">
            <figure className="about-plaque">
              <Image
                src="/about/ii-award-2025.jpeg"
                alt="Intelligent Instructor Awards 2025 — Silver, Driving Instructor of the Year Yorkshire and The Humber — Andy Sinker"
                width={380}
                height={380}
                style={{ objectFit: "cover", borderRadius: "0.75rem" }}
              />
              <figcaption>Intelligent Instructor Awards 2025 — Silver</figcaption>
            </figure>
            <figure className="about-plaque">
              <Image
                src="/about/ii-award-2026.jpeg"
                alt="Intelligent Instructor Awards 2026 — Silver, Driving Instructor of the Year Yorkshire and The Humber — Andy Sinker"
                width={380}
                height={380}
                style={{ objectFit: "cover", borderRadius: "0.75rem" }}
              />
              <figcaption>Intelligent Instructor Awards 2026 — Silver</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
