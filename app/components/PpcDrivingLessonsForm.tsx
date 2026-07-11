"use client";

import { useState, useId } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function PpcDrivingLessonsForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const typeId = useId();
  const areaId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          formType: "ppc_driving_lessons",
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          lessonType: fd.get("lessonType"),
          area: fd.get("area"),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="form-success">
        Thanks! We&rsquo;ll check availability and call you back shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor={nameId}>
        Full name
        <input id={nameId} type="text" name="name" autoComplete="name" required />
      </label>
      <label htmlFor={emailId}>
        Email
        <input id={emailId} type="email" name="email" autoComplete="email" required />
      </label>
      <label htmlFor={phoneId}>
        Phone
        <input id={phoneId} type="tel" name="phone" autoComplete="tel" required />
      </label>
      <label htmlFor={typeId}>
        Lesson type
        <select id={typeId} name="lessonType" defaultValue="weekly">
          <option value="weekly">Weekly lessons</option>
          <option value="intensive">Intensive course</option>
          <option value="refresher">Refresher lessons</option>
        </select>
      </label>
      <label htmlFor={areaId}>
        Preferred area
        <input id={areaId} type="text" name="area" required />
      </label>
      {status === "error" && <p className="form-error">{errorMsg}</p>}
      <button type="submit" className="button-primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Request Callback"}
      </button>
    </form>
  );
}
