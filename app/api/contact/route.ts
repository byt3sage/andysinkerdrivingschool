import { NextRequest, NextResponse } from "next/server";

const SUBJECT_LABELS: Record<string, string> = {
  franchise: "Franchise Enquiry",
  instructor_training: "Instructor Training Enquiry",
  contact: "General Contact",
  ppc_driving_lessons: "Driving Lesson Booking Request",
  ppc_franchise: "Franchise Prospectus Request",
  ppc_instructor_training: "ADI Training Plan Request",
};

const FIELD_LABELS: Record<string, string> = {
  name: "Full Name",
  email: "Email",
  phone: "Phone",
  contact_method: "Preferred Contact Method",
  lessonType: "Lesson Type",
  area: "Preferred Area",
  region: "Region of Interest",
  background: "Background",
  stage: "Current Stage",
  subject: "Subject",
  message: "Message",
};

function buildHtml(formType: string, fields: Record<string, string>): string {
  const label = SUBJECT_LABELS[formType] ?? "Website Enquiry";
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;white-space:nowrap;vertical-align:top">${FIELD_LABELS[k] ?? k}</td><td style="padding:6px 12px">${v}</td></tr>`
    )
    .join("");
  return `
    <div style="font-family:sans-serif;max-width:600px">
      <h2 style="margin-bottom:16px">${label}</h2>
      <table style="border-collapse:collapse;width:100%">
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (!apiKey || !senderEmail) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { formType, name, email, phone, ...rest } = body;

  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and phone are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const subjectLabel = SUBJECT_LABELS[formType] ?? "Website Enquiry";
  const allFields = { name, email, phone, ...rest };
  const htmlContent = buildHtml(formType, allFields);

  const payload = {
    sender: { name: "Andy Sinker Driving", email: senderEmail },
    to: [{ email: "jtooleuk@gmail.com", name: "Andy Sinker" }],
    replyTo: { email, name },
    subject: `New enquiry — ${subjectLabel}`,
    htmlContent,
  };

  let brevoResponse: Response;
  try {
    brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return NextResponse.json(
      { error: "Could not reach email service." },
      { status: 502 }
    );
  }

  if (!brevoResponse.ok) {
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
