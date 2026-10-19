"use client";

import { useEffect, useRef, useState } from "react";
import { STARTER_HTML } from "@/lib/workshop-urls";
import { CopyIcon } from "./icons";

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

export function CodeBlock() {
  const [state, setState] = useState<CopyState>("idle");
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const label =
    state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : "Copy";

  const copy = async () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const ok = await copyText(STARTER_HTML);
    setState(ok ? "copied" : "failed");
    timerRef.current = window.setTimeout(() => setState("idle"), 1600);
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <span>HTML · index.html</span>
        <button type="button" onClick={copy} aria-live="polite">
          <CopyIcon /> {label}
        </button>
      </div>
      <pre>
        <code>{STARTER_HTML}</code>
      </pre>
    </div>
  );
}
