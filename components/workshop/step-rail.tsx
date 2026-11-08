"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getStepRailInstructions } from "@/lib/instruction-rail";
import {
  GUIDE_VERSIONS,
  type GuideVersionId,
  guideHomePath,
  guideStepPath,
} from "@/lib/workshop-versions";
import { Arrow } from "./icons";

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

export function StepRail({
  currentSlug,
  version,
}: {
  currentSlug: string;
  version: GuideVersionId;
}) {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const isMobile = useIsMobile();
  const steps = GUIDE_VERSIONS[version].steps;
  const total = steps.length;
  const currentIndex = steps.findIndex((s) => s.slug === currentSlug);
  const currentNumber = currentIndex >= 0 ? currentIndex + 1 : 1;
  const currentStep = currentIndex >= 0 ? steps[currentIndex] : null;
  const railInstructions = currentStep
    ? getStepRailInstructions(currentStep)
    : [];
  useEffect(() => {
    setOpen(false);
  }, [currentSlug]);

  const openMobileSheet = () => {
    if (isMobile) {
      setMinimized(false);
    }
    setOpen((value) => !value);
  };

  const scrollToInstruction = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
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
              <span>{GUIDE_VERSIONS[version].label}</span>
              <div>
                <Link href={guideHomePath(version)}>View all</Link>
                {!isMobile ? (
                  <button type="button" onClick={() => setMinimized(true)}>
                    Minimise
                  </button>
                ) : null}
              </div>
            </div>
            <nav className="rail-list" aria-label="Workshop steps">
              {steps.map((step, index) => {
                const isCurrent = currentSlug === step.slug;
                return (
                  <div key={step.slug} className="rail-step-group">
                    <Link
                      href={guideStepPath(version, step.slug)}
                      className={`rail-step${isCurrent ? " current" : ""}`}
                      onClick={() => setOpen(false)}
                      aria-current={isCurrent ? "step" : undefined}
                    >
                      <span className="rail-step-number">{index + 1}</span>
                      <span className="rail-step-label">{step.title}</span>
                    </Link>
                    {isCurrent
                      ? railInstructions.map((instruction) => (
                          <button
                            key={instruction.id}
                            type="button"
                            className="rail-substep"
                            onClick={() => scrollToInstruction(instruction.id)}
                          >
                            {instruction.title}
                          </button>
                        ))
                      : null}
                  </div>
                );
              })}
            </nav>
          </>
        )}
      </aside>
    </>
  );
}

export function StepRailShell({
  currentSlug,
  version,
  children,
}: {
  currentSlug: string;
  version: GuideVersionId;
  children: React.ReactNode;
}) {
  return (
    <div className="lesson-shell">
      <StepRail currentSlug={currentSlug} version={version} />
      {children}
    </div>
  );
}
