import type { Metadata } from "next";
import PpcFranchiseForm from "../../components/PpcFranchiseForm";

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
          <PpcFranchiseForm />
        </aside>
      </div>
    </section>
  );
}
