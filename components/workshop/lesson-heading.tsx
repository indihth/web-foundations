"use client";

import { useEffect, useRef } from "react";

export function LessonHeading({
  kicker,
  title,
  intro,
  versionLabel,
}: {
  kicker: string;
  title: string;
  intro: string;
  versionLabel?: string;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [title]);

  return (
    <div className="lesson-heading">
      <div className="lesson-heading-top">
        <span className="lesson-kicker">{kicker}</span>
        {versionLabel ? (
          <span className="guide-version-pill" aria-label={`Guide: ${versionLabel}`}>
            {versionLabel}
          </span>
        ) : null}
      </div>
      <h1 ref={headingRef} tabIndex={-1}>
        {title}
      </h1>
      <p>{intro}</p>
    </div>
  );
}
