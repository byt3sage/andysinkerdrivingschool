import type { Metadata } from "next";

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
              Current stage
              <select name="stage" defaultValue="new">
                <option value="new">New to instructor training</option>
                <option value="part1">Preparing for Part 1</option>
                <option value="part2">Preparing for Part 2</option>
                <option value="part3">Preparing for Part 3</option>
              </select>
            </label>
            <button type="submit" className="button-primary">
              Get My Roadmap
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}
