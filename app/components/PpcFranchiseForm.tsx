"use client";

import { useState, useId } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function PpcFranchiseForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const regionId = useId();
  const bgId = useId();

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
          formType: "ppc_franchise",
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          region: fd.get("region"),
          background: fd.get("background"),
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
        Thanks! We&rsquo;ll send the franchise pack and be in touch soon.
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
      <label htmlFor={regionId}>
        Region of interest
        <input id={regionId} type="text" name="region" required />
      </label>
      <label htmlFor={bgId}>
        Background
        <textarea id={bgId} name="background" placeholder="Tell us about your current experience" />
      </label>
      {status === "error" && <p className="form-error">{errorMsg}</p>}
      <button type="submit" className="button-primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Prospectus Request"}
      </button>
    </form>
  );
}
