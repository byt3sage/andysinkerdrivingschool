import type { Metadata } from "next";
import PpcDrivingLessonsForm from "../../components/PpcDrivingLessonsForm";

export const metadata: Metadata = {
  title: "Driving Lesson Booking",
  description:
    "Book driving lessons and get matched with the right lesson plan for your confidence and test goals.",
  robots: { index: false, follow: true },
};

export default function PpcDrivingLessonsPage() {
  return (
    <section className="content-section">
      <div className="site-shell ppc-grid">
        <div>
          <h1>Book driving lessons with a plan built around your pace.</h1>
          <p>
            New learner, returning driver, or test-nearly-ready, we will shape lesson structure
            around your confidence level and practical test target date.
          </p>
          <ul className="process-list">
            <li>Manual and automatic lesson availability.</li>
            <li>Structured progress from first drive to mock test readiness.</li>
            <li>Theory support and practical test strategy guidance.</li>
          </ul>
        </div>
        <aside className="lead-form">
          <h2>Check lesson availability</h2>
          <PpcDrivingLessonsForm />
        </aside>
      </div>
    </section>
  );
}
