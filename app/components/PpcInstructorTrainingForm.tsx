"use client";

import { useState, useId } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function PpcInstructorTrainingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const stageId = useId();

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
          formType: "ppc_instructor_training",
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          stage: fd.get("stage"),
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
        Thanks! You&rsquo;ll receive your personalised ADI roadmap within one working day.
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
      <label htmlFor={stageId}>
        Current stage
        <select id={stageId} name="stage" defaultValue="new">
          <option value="new">New to instructor training</option>
          <option value="part1">Preparing for Part 1</option>
          <option value="part2">Preparing for Part 2</option>
          <option value="part3">Preparing for Part 3</option>
        </select>
      </label>
      {status === "error" && <p className="form-error">{errorMsg}</p>}
      <button type="submit" className="button-primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Get My Roadmap"}
      </button>
    </form>
  );
}
