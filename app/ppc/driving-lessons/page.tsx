import type { Metadata } from "next";

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
              Lesson type
              <select name="lessonType" defaultValue="weekly">
                <option value="weekly">Weekly lessons</option>
                <option value="intensive">Intensive course</option>
                <option value="refresher">Refresher lessons</option>
              </select>
            </label>
            <label>
              Preferred area
              <input type="text" name="area" required />
            </label>
            <button type="submit" className="button-primary">
              Request Callback
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}
