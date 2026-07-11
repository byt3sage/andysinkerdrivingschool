import type { Metadata } from "next";
import PpcInstructorTrainingForm from "../../components/PpcInstructorTrainingForm";

export const metadata: Metadata = {
  title: "ADI Training Application",
  description:
    "Apply for instructor training and receive a tailored ADI roadmap with support milestones.",
  robots: { index: false, follow: true },
};

export default function PpcInstructorTrainingPage() {
  return (
    <section className="content-section">
      <div className="site-shell ppc-grid">
        <div>
          <h1>Train as an ADI with a proven pass-and-launch process.</h1>
          <p>
            Join a structured route from trainee to earning instructor. Submit your details and
            receive your personalised training timeline within one working day.
          </p>
          <ul className="process-list">
            <li>Clear milestones for Parts 1, 2, and 3.</li>
            <li>In-car coaching and mock test simulations.</li>
            <li>Business setup support for first paying pupils.</li>
          </ul>
        </div>
        <aside className="lead-form">
          <h2>Request your ADI plan</h2>
          <PpcInstructorTrainingForm />
        </aside>
      </div>
    </section>
  );
}
