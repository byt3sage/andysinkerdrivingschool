import type { Metadata } from "next";

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

      <section className="content-section">
        <div className="site-shell">
          <div style={{ maxWidth: "65ch", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <p>
              Andy is passionate about helping learner drivers, experienced motorists looking to
              improve their skills and trainee driving instructors achieve their goals.
            </p>

            <p>
              Recognised as one of the UK&apos;s top driving instructors, Andy was honoured to receive the GoRoadie&apos;s Driving Instructor of the
              Year Award for England in 2026, recognising his commitment to excellence in driver training.
            </p>

            <p>
              Andy has also been ranked among the Top 100 Driving Instructors in the country for the Intelligent Instructor Awards.
              In 2023, he received a Highly Commended award for the Yorkshire and Humber region,
              followed by Silver Awards in both 2025 and 2026.
            </p>

            <p>
              As a proud member of the Institute of Master Tutors of Driving and holder of
              Tri-Coaching BTEC level 4 in Coaching for Driver Development, Andy is currently
              partaking in Bright Coaching&apos;s Professional Diploma in Coaching for Driving
              Instructors. Andy is dedicated to continuous personal and professional development. He
              regularly updates his knowledge and skills to ensure that every learner receives the
              highest standard of training and support throughout their driving journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
