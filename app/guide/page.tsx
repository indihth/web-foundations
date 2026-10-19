import type { Metadata } from "next";
import Link from "next/link";
import { steps } from "@/content/steps";
import { EXAMPLE_PATH, SKETCH_URL } from "@/lib/workshop-urls";
import { Arrow, ExternalIcon } from "@/components/workshop/icons";

export const instant = false;

export const metadata: Metadata = {
  title: "Workshop guide",
};

export default function GuideIndexPage() {
  const total = steps.length;

  return (
    <main className="guide-index">
      <div className="page-heading">
        <div>
          <div className="eyebrow">
            <span /> Workshop guide
          </div>
          <h1>
            Eight steps, one
            <br />
            working web page.
          </h1>
        </div>
        <p>
          Start at the beginning or jump back into any step. Advanced sections
          are optional and can be saved for later.
        </p>
      </div>
      <div className="step-table">
        <div className="table-label">
          <span>Steps</span>
          <span>
            {total} lessons · about 2 hours
          </span>
        </div>
        {steps.map((step, index) => (
          <Link
            key={step.slug}
            className="step-row"
            href={`/guide/${step.slug}`}
          >
            <span className="step-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="step-row-copy">
              <b>{step.title}</b>
              <small>{step.summary}</small>
            </span>
            {step.advanced ? (
              <span className="advanced-pill">Advanced</span>
            ) : null}
            <span className="row-arrow">
              <Arrow />
            </span>
          </Link>
        ))}
      </div>
      <div className="guide-resources">
        <span>Keep these nearby</span>
        <a href={EXAMPLE_PATH} target="_blank" rel="noreferrer">
          Finished app <ExternalIcon />
        </a>
        <a href={SKETCH_URL} target="_blank" rel="noreferrer">
          p5.js starter file <ExternalIcon />
        </a>
      </div>
    </main>
  );
}
