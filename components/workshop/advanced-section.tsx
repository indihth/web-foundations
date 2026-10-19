"use client";

import { useState } from "react";
import type { AdvancedBlock } from "@/content/steps";

export function AdvancedSection({ advanced }: { advanced: AdvancedBlock }) {
  const [open, setOpen] = useState(false);

  return (
    <section className={`advanced-section ${open ? "open" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>
          <i>Optional</i>
          <b>{open ? "Hide advanced approach" : "Show advanced approach"}</b>
        </span>
        <em>{open ? "−" : "+"}</em>
      </button>
      {open ? (
        <div className="advanced-content">
          <h2>{advanced.title}</h2>
          {advanced.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {advanced.code ? <code>{advanced.code}</code> : null}
        </div>
      ) : null}
    </section>
  );
}
