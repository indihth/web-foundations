import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Arrow, ExternalIcon } from "@/components/workshop/icons";
import { EXAMPLE_PATH, SKETCH_URL } from "@/lib/workshop-urls";
import {
  GUIDE_VERSIONS,
  guideStepPath,
  isGuideVersionId,
  isLegacyHelpersSlug,
} from "@/lib/workshop-versions";

export const instant = false;

export function generateStaticParams() {
  return [{ version: "helpers" }, { version: "dom" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ version: string }>;
}): Promise<Metadata> {
  const { version } = await params;
  if (!isGuideVersionId(version)) {
    return { title: "Workshop guide" };
  }
  return { title: `${GUIDE_VERSIONS[version].label} guide` };
}

export default async function GuideVersionIndexPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version: versionParam } = await params;

  if (!isGuideVersionId(versionParam)) {
    if (isLegacyHelpersSlug(versionParam)) {
      redirect(`/guide/helpers/${versionParam}`);
    }
    notFound();
  }

  const version = GUIDE_VERSIONS[versionParam];
  const { steps } = version;
  const total = steps.length;

  return (
    <div className="guide-index">
      <div className="page-heading">
        <div>
          <div className="eyebrow">
            <span /> {version.label}
          </div>
          <h1>
            {total > 0 ? (
              <>
                {total} steps, one
                <br />
                working meme page.
              </>
            ) : (
              <>
                Steps for this
                <br />
                track are coming soon.
              </>
            )}
          </h1>
        </div>
        <p>{version.description}</p>
      </div>
      {total > 0 ? (
        <div className="step-table">
          <div className="table-label">
            <span>Steps</span>
            <span>
              {total} lessons · {version.durationLabel}
            </span>
          </div>
          {steps.map((step, index) => (
            <Link
              key={step.slug}
              className="step-row"
              href={guideStepPath(versionParam, step.slug)}
            >
              <span className="step-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="step-row-copy">
                <b>{step.title}</b>
                <small>{step.summary}</small>
              </span>
              <span className="row-arrow">
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="guide-empty">
          This guide has no steps yet. Check back after your
          facilitator publishes them.
        </p>
      )}
      <div className="guide-resources">
        <span>Keep these nearby</span>
        <a href={EXAMPLE_PATH} target="_blank" rel="noreferrer">
          Finished app <ExternalIcon />
        </a>
        <a href={SKETCH_URL} target="_blank" rel="noreferrer">
          p5.js starter file <ExternalIcon />
        </a>
      </div>
    </div>
  );
}
