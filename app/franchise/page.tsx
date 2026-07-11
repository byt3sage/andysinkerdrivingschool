import type { Metadata } from "next";
import Link from "next/link";
import FranchiseForm from "../components/FranchiseForm";

export const metadata: Metadata = {
  title: "Franchise Opportunities",
  description:
    "Join our driving school franchise network. Be your own boss with flexible hours, good earning potential, and full support from a trusted brand.",
  alternates: { canonical: "https://andysinkerdriving.co.uk/franchise" },
};

const opportunities = [
  { title: "Be Your Own Boss", body: "Run your business your way, with the backing of a proven brand and support network." },
  { title: "Flexible Work-Life Balance", body: "Work the hours you want. Take time off when you need it. Build a schedule around your life." },
  { title: "Good Earning Potential", body: "Strong base income with the flexibility to take on more work when you want something extra." },
  { title: "Real Job Satisfaction", body: "Help people gain an essential life skill every single day — a genuinely rewarding way to earn." },
];

const whyChoose = [
  {
    title: "Established Brand & Systems",
    body: "Benefit from an established brand, proven operating systems, and a successful business framework designed to help you grow quickly and efficiently.",
  },
  {
    title: "Training & Support",
    body: "Comprehensive training and support from the GoRodie Driving Instructor of the Year 2026, plus ongoing business support, marketing guidance, operational assistance, and instructor development.",
  },
  {
    title: "Pupils & Leads",
    body: "Supply of students from day one, backed by lead generation systems, marketing and advertising support, and booking and management tools.",
  },
  {
    title: "Flexible Lifestyle",
    body: "The freedom of running your own business with the backing of a support network — build a schedule that suits your personal and professional goals.",
  },
];

const whatYouGet = [
  "Business setup guidance",
  "Initial and ongoing training programmes",
  "Marketing and advertising support",
  "Lead generation systems",
  "Booking and management tools",
  "Operational resources",
  "Ongoing support",
  "Training material and resources for you and your students",
];

const whoWeWant = [
  "Passionate about helping others succeed",
  "Motivated and self-driven",
  "Customer-focused",
  "Strong communicators",
  "Interested in building a long-term business",
  "Committed to maintaining high service standards",
];

const franchiseFaqs = [
  {
    q: "What is included in the franchise package?",
    a: "Our franchise packages include pupil supply, marketing support, training, and business guidance.",
  },
  {
    q: "Do I need to be a qualified driving instructor to join the franchise?",
    a: "No. Franchises can be offered to a PDI who has passed Part 2 status and completed the 40 hours of mandatory training to be able to deliver driving lessons for financial gain.",
  },
  {
    q: "How many pupils can I expect?",
    a: "Pupil numbers vary by area and demand, but we work hard to provide a steady flow of enquiries. The larger the area you cover initially, the better the opportunities for provision of students.",
  },
  {
    q: "Is there a franchise fee?",
    a: "Yes. Franchise fees vary depending on the package and level of support provided.",
  },
  {
    q: "Can I keep my existing pupils?",
    a: "In most cases, yes. Existing pupils can usually remain part of your business arrangement.",
  },
  {
    q: "Am I self-employed?",
    a: "Yes. Franchise instructors are self-employed and operate their own business while benefiting from our support and branding.",
  },
  {
    q: "What marketing support do you provide?",
    a: "We invest in local and online marketing to help generate enquiries and increase visibility for franchise instructors.",
  },
  {
    q: "Can I leave the franchise if my circumstances change?",
    a: "Yes. Terms and notice periods are outlined in the franchise agreement.",
  },
  {
    q: "Do you provide ongoing training and development?",
    a: "Yes. We offer ongoing training, workshops, and support to help instructors develop their skills and business.",
  },
  {
    q: "How do I apply for a franchise?",
    a: "Please contact our team to discuss opportunities in your area and arrange an initial consultation.",
  },
];

export default function FranchisePage() {
  return (
    <div>
      <section className="hero service-hero">
        <div className="hero-band">
          <div className="site-shell service-hero-grid">
            <div className="stagger-rise">
              <p className="eyebrow">Franchise</p>
              <h1>Build A Rewarding Business With A Trusted Driving School Brand</h1>
              <p className="hero-lede">
                Join our driving school franchise network and become part of a growing, respected
                brand dedicated to providing high-quality driver training across the region.
              </p>
              <ul className="service-points">
                <li>Be your own boss with a flexible work-life balance.</li>
                <li>Strong earning potential — work as much or as little as you choose.</li>
                <li>The satisfaction of helping people gain an essential life skill.</li>
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
              <h2>Interested in franchising?</h2>
              <p>Complete your details and we&rsquo;ll arrange a call, Zoom, or meeting in person.</p>
              <FranchiseForm />
            </aside>
          </div>
        </div>
      </section>

      <section className="content-section section">
        <div className="site-shell">
          <p className="eyebrow" style={{ color: "var(--foreground)" }}>Are you looking for a business opportunity that offers?</p>
          <div className="opp-grid">
            {opportunities.map((opp) => (
              <article key={opp.title} className="opp-card">
                <h3>{opp.title}</h3>
                <p>{opp.body}</p>
              </article>
            ))}
          </div>
          <p className="opp-intro">
            Whether you&rsquo;re an experienced driving instructor or an entrepreneur seeking a proven
            business model, our franchise programme gives you the tools, support, and training
            needed to succeed.
          </p>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell">
          <h2 className="section-title">Why Choose Our Franchise?</h2>
          <div className="content-grid">
            {whyChoose.map((item) => (
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
          <h2 className="section-title">What You Will Receive</h2>
          <p className="section-lede">As a franchise partner, you&rsquo;ll gain access to:</p>
          <ul className="check-grid">
            {whatYouGet.map((item) => (
              <li key={item} className="check-item">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell split">
          <div>
            <h2 className="section-title">Who Makes A Successful Franchisee</h2>
            <p className="section-lede">We welcome applications from individuals who are:</p>
            <ul className="check-grid">
              {whoWeWant.map((item) => (
                <li key={item} className="check-item">{item}</li>
              ))}
            </ul>
          </div>
          <aside className="content-card" style={{ alignSelf: "center" }}>
            <h3>No experience required</h3>
            <p>
              No previous business ownership experience is necessary. If you have the right
              attitude and ambition, we&rsquo;ll provide everything else you need.
            </p>
            <Link className="button-secondary" style={{ marginTop: "0.75rem", display: "inline-flex" }} href="/contact">
              Talk to Us
            </Link>
          </aside>
        </div>
      </section>

      <section className="content-section alt section">
        <div className="site-shell split">
          <div>
            <h2 className="section-title">Financial Opportunity</h2>
            <p>
              Our franchise model is designed to offer attractive earning potential while
              keeping overheads manageable. Whether you&rsquo;re looking for a full-time income or
              something to build around your existing commitments, there&rsquo;s real scope to grow.
            </p>
            <p>
              Your income will depend on factors such as territory, local demand, and your
              own business development efforts.
            </p>
          </div>
          <aside className="content-card">
            <h3>Ready to find out more?</h3>
            <p>
              Complete the contact form and we will arrange either a call, Zoom or meeting
              in person — whichever suits you best.
            </p>
            <Link className="button-secondary" href="/contact">
              Get in Touch
            </Link>
          </aside>
        </div>
      </section>

      <section className="content-section section">
        <div className="site-shell">
          <h2 className="section-title">Franchise FAQs</h2>
          <div className="faq-list">
            {franchiseFaqs.map((faq) => (
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

