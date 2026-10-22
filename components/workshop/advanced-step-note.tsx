"use client";

import type { AdvancedBlock } from "@/content/steps";
import { useWorkshopMode } from "@/lib/workshop-mode";
import { InstructionParagraph } from "./instruction-text";

export function AdvancedStepNote({ advanced }: { advanced: AdvancedBlock }) {
  const { advanced: modeOn, ready } = useWorkshopMode();

  if (!ready || !modeOn) {
    return null;
  }

  return (
    <section className="advanced-step-note" aria-labelledby="advanced-step-heading">
      <span className="advanced-step-note-label">Advanced</span>
      <h2 id="advanced-step-heading">{advanced.title}</h2>
      {advanced.body.map((paragraph) => (
        <InstructionParagraph key={paragraph} text={paragraph} />
      ))}
    </section>
  );
}
