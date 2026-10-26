import type { ReactNode } from "react";

/** Backtick code, or a bare http(s) URL. Code is matched first so URLs inside `...` stay code. */
const TOKEN = /(`[^`]+`|https?:\/\/[^\s<>"']+)/g;

function splitTrailingPunctuation(url: string): { href: string; trailing: string } {
  const match = url.match(/^(.*?)([.,;:!?]+)$/);
  if (!match || match[1].length === 0) {
    return { href: url, trailing: "" };
  }
  return { href: match[1], trailing: match[2] };
}

/** Renders backtick-wrapped segments as inline code, and bare URLs as links. */
export function renderInstructionText(text: string): ReactNode {
  const parts = text.split(TOKEN);
  if (parts.length === 1) {
    return text;
  }

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    if (/^https?:\/\//.test(part)) {
      const { href, trailing } = splitTrailingPunctuation(part);
      return (
        <span key={index}>
          <a href={href} target="_blank" rel="noreferrer">
            {href}
          </a>
          {trailing}
        </span>
      );
    }

    return part;
  });
}

export function InstructionParagraph({ text }: { text: string }) {
  return <p>{renderInstructionText(text)}</p>;
}
