"use client";

import { useState, useId } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function FranchiseForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();

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
          formType: "franchise",
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
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
        Thanks! We&rsquo;ll be in touch soon to arrange a call, Zoom, or meeting.
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
      {status === "error" && <p className="form-error">{errorMsg}</p>}
      <button type="submit" className="button-primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Request a Call Back"}
      </button>
    </form>
  );
}
