"use client";

import { useState } from "react";
import type { InstructionReveal } from "@/content/steps";
import { CodeBlock } from "./code-block";
import { InstructionParagraph } from "./instruction-text";

export function InstructionRevealAccordion({ reveal }: { reveal: InstructionReveal }) {
  const [open, setOpen] = useState(false);
  const hideLabel = reveal.hideLabel ?? "Hide the answer";

  return (
    <section className={`instruction-reveal ${open ? "open" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{open ? hideLabel : reveal.triggerLabel}</span>
        <em>{open ? "−" : "+"}</em>
      </button>
      {open ? (
        <div className="instruction-reveal-content">
          {reveal.body?.map((paragraph) => (
            <InstructionParagraph key={paragraph} text={paragraph} />
          )) ?? null}
          <CodeBlock
            label={reveal.code.label}
            source={reveal.code.source}
            copyable={reveal.code.copyable ?? true}
            highlights={reveal.code.highlights}
          />
        </div>
      ) : null}
    </section>
  );
}
