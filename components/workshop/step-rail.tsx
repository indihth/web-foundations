"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { steps } from "@/content/steps";
import { EXAMPLE_PATH } from "@/lib/workshop-urls";
import { Arrow, ExternalIcon } from "./icons";

const MOBILE_MAX = 720;

function useIsMobile() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`);
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return mobile;
}

export function StepRail({ currentSlug }: { currentSlug: string }) {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const isMobile = useIsMobile();
  const total = steps.length;
  const currentIndex = steps.findIndex((s) => s.slug === currentSlug);
  const currentNumber = currentIndex >= 0 ? currentIndex + 1 : 1;
  const [lastSlug, setLastSlug] = useState(currentSlug);

  if (currentSlug !== lastSlug) {
    setLastSlug(currentSlug);
    if (open) {
      setOpen(false);
    }
  }

  const openMobileSheet = () => {
    if (isMobile) {
      setMinimized(false);
    }
    setOpen((value) => !value);
  };

  const showMinimized = minimized && !isMobile;

  return (
    <>
      <button
        type="button"
        className="mobile-steps-button"
        onClick={openMobileSheet}
      >
        <span>
          Step {currentNumber} of {total}
        </span>
        <b>{open ? "Close steps" : "View all steps"}</b>
      </button>
      <aside
        className={`step-rail ${open ? "open" : ""} ${showMinimized ? "minimized" : ""}`}
      >
        {showMinimized ? (
          <button
            type="button"
            className="restore-rail"
            onClick={() => setMinimized(false)}
            aria-label="Show workshop steps"
          >
            <Arrow />
            <span>Show steps</span>
          </button>
        ) : (
          <>
            <div className="rail-heading">
              <span>Workshop steps</span>
              <div>
                <Link href="/guide">View all</Link>
                {!isMobile ? (
                  <button type="button" onClick={() => setMinimized(true)}>
                    Minimise
                  </button>
                ) : null}
              </div>
            </div>
            <div className="rail-list">
              {steps.map((step, index) => (
                <Link
                  key={step.slug}
                  href={`/guide/${step.slug}`}
                  className={currentSlug === step.slug ? "current" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span>{index + 1}</span>
                  <b>{step.title}</b>
                  {step.advanced ? <i>A</i> : null}
                </Link>
              ))}
            </div>
            <div className="rail-help">
              <span>Need a reference?</span>
              <a href={EXAMPLE_PATH} target="_blank" rel="noreferrer">
                Open Meme-ify <ExternalIcon />
              </a>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export function StepRailShell({
  currentSlug,
  children,
}: {
  currentSlug: string;
  children: React.ReactNode;
}) {
  return (
    <main className="lesson-shell">
      <StepRail currentSlug={currentSlug} />
      {children}
    </main>
  );
}
