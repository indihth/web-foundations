"use client";

import { useEffect, useRef } from "react";
// import { WorkshopModeToggle } from "./workshop-mode-toggle";

export function LessonHeading({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro: string;
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
        {/* <WorkshopModeToggle /> */}
      </div>
      <h1 ref={headingRef} tabIndex={-1}>
        {title}
      </h1>
      <p>{intro}</p>
    </div>
  );
}
