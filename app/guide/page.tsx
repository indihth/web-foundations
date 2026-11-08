import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/workshop/icons";
import {
  GUIDE_VERSION_IDS,
  GUIDE_VERSIONS,
  guideHomePath,
} from "@/lib/workshop-versions";

export const instant = false;

export const metadata: Metadata = {
  title: "Workshop guide",
};

export default function GuideChooserPage() {
  return (
    <main className="guide-index">
      <div className="page-heading">
        <div>
          <div className="eyebrow">
            <span /> Workshop guide
          </div>
          <h1>
            Pick how you
            <br />
            work in JavaScript.
          </h1>
        </div>
        <p>
          Start at the beginning or jump back into any step. Use Regular for
          helper functions.
        </p>
      </div>
      <div
        className="guide-version-chooser"
        role="group"
        aria-label="Guide version"
      >
        {GUIDE_VERSION_IDS.map((id) => {
          const version = GUIDE_VERSIONS[id];
          return (
            <Link
              key={id}
              className="guide-version-option"
              href={guideHomePath(id)}
            >
              <span className="guide-version-option-label">{version.label}</span>
              <p>{version.description}</p>
              <span className="guide-version-option-action">
                Open guide <Arrow />
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
