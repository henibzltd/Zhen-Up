"use client";

import { useEffect } from "react";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

export function CalendlyEmbed({
  url,
  name,
  email,
}: {
  url: string;
  name?: string;
  email?: string;
}) {
  useEffect(() => {
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const params = new URLSearchParams();
  if (name) params.set("name", name);
  if (email) params.set("email", email);
  params.set("hide_gdpr_banner", "1");
  params.set("primary_color", "00bf63");

  return (
    <div
      className="calendly-inline-widget"
      data-url={`${url}?${params.toString()}`}
      style={{ minWidth: "280px", height: "650px" }}
    />
  );
}
