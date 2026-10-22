import type { ReactNode } from "react";

/** Renders backtick-wrapped segments as inline code. */
export function renderInstructionText(text: string): ReactNode {
  const parts = text.split(/(`[^`]+`)/g);
  if (parts.length === 1) {
    return text;
  }

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

export function InstructionParagraph({ text }: { text: string }) {
  return <p>{renderInstructionText(text)}</p>;
}
