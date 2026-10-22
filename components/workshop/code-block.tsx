"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { InstructionCode } from "@/content/steps";

type CopyState = "idle" | "copied" | "failed";

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to textarea fallback */
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

function renderWithHighlights(source: string, highlights: string[]): ReactNode {
  const matches: { start: number; end: number }[] = [];

  let searchFrom = 0;
  for (const text of highlights) {
    const start = source.indexOf(text, searchFrom);
    if (start === -1) continue;
    const end = start + text.length;
    matches.push({ start, end });
    searchFrom = end;
  }

  matches.sort((a, b) => a.start - b.start);

  const merged: { start: number; end: number }[] = [];
  for (const match of matches) {
    const last = merged[merged.length - 1];
    if (last && match.start < last.end) continue;
    merged.push(match);
  }

  if (merged.length === 0) return source;

  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of merged) {
    if (match.start > cursor) {
      nodes.push(source.slice(cursor, match.start));
    }
    nodes.push(
      <mark key={match.start} className="code-highlight">
        {source.slice(match.start, match.end)}
      </mark>,
    );
    cursor = match.end;
  }

  if (cursor < source.length) {
    nodes.push(source.slice(cursor));
  }

  return nodes;
}

type CodeBlockProps = InstructionCode;

export function CodeBlock({
  label,
  source,
  copyable = false,
  highlights,
}: CodeBlockProps) {
  const [state, setState] = useState<CopyState>("idle");
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copyLabel =
    state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : "Copy";

  const copy = async () => {
    if (!copyable) return;
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const ok = await copyText(source);
    setState(ok ? "copied" : "failed");
    timerRef.current = window.setTimeout(() => setState("idle"), 1600);
  };

  const codeContent =
    highlights?.length && highlights.length > 0
      ? renderWithHighlights(source, highlights)
      : source;

  return (
    <div className={`code-block ${copyable ? "" : "code-block-type"}`}>
      <div className="code-header">
        <span>{label}</span>
        {copyable ? (
          <button type="button" onClick={copy} aria-live="polite">
            {copyLabel}
          </button>
        ) : (
          <span className="code-hint">Type this out</span>
        )}
      </div>
      <pre>
        <code>{codeContent}</code>
      </pre>
    </div>
  );
}
