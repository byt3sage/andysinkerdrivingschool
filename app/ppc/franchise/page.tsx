import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise Enquiry",
  description:
    "Request the driving school franchise prospectus and discover territory-led growth opportunities.",
  robots: { index: false, follow: true },
};

export default function PpcFranchisePage() {
  return (
    <section className="content-section">
      <div className="site-shell ppc-grid">
        <div>
          <h1>Open your own territory-led driving school franchise.</h1>
          <p>
            Get the numbers, onboarding process, and growth model. Perfect for instructors
            ready to lead a regional team and build recurring revenue.
          </p>
          <ul className="process-list">
            <li>Territory feasibility review and lead potential.</li>
            <li>Marketing systems with PPC-ready landing assets.</li>
            <li>Operational support for recruitment and delivery.</li>
          </ul>
        </div>
        <aside className="lead-form">
          <h2>Request franchise pack</h2>
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
              Region of interest
              <input type="text" name="region" required />
            </label>
            <label>
              Background
              <textarea name="background" placeholder="Tell us about your current experience" />
            </label>
            <button type="submit" className="button-primary">
              Send Prospectus Request
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}
