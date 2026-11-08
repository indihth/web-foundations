import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/workshop/icons";
import { LessonHeading } from "@/components/workshop/lesson-heading";
import { LessonInstructions } from "@/components/workshop/lesson-instructions";
import {
  GUIDE_VERSIONS,
  type GuideVersionId,
  getVersionStepNavigation,
  guideHomePath,
  guideStepPath,
  isGuideVersionId,
} from "@/lib/workshop-versions";

export const instant = false;

export function generateStaticParams() {
  return (["helpers", "dom"] as const).flatMap((version) =>
    GUIDE_VERSIONS[version].steps.map((step) => ({
      version,
      slug: step.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ version: string; slug: string }>;
}): Promise<Metadata> {
  const { version, slug } = await params;
  if (!isGuideVersionId(version)) {
    return { title: "Step not found" };
  }
  const navigation = getVersionStepNavigation(version, slug);

  if (!navigation) {
    return { title: "Step not found" };
  }

  return { title: navigation.step.title };
}

export default async function GuideVersionStepPage({
  params,
}: {
  params: Promise<{ version: string; slug: string }>;
}) {
  const { version: versionParam, slug } = await params;

  if (!isGuideVersionId(versionParam)) {
    notFound();
  }

  const version = versionParam as GuideVersionId;
  const navigation = getVersionStepNavigation(version, slug);

  if (!navigation) {
    notFound();
  }

  const { step, number, total, previous, next } = navigation;
  const progress = Math.round((number / total) * 100);
  const versionMeta = GUIDE_VERSIONS[version];

  return (
    <article className="lesson">
      <div
        className="progress-line"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={`Step ${number} of ${total}`}
      >
        <span>
          Step {number} of {total}
        </span>
        <div>
          <i style={{ width: `${progress}%` }} />
        </div>
        <b>{progress}%</b>
      </div>
      <LessonHeading
        kicker={step.kicker}
        title={step.title}
        intro={step.intro}
        versionLabel={versionMeta.label}
      />
      <div className="instructions">
        <LessonInstructions step={step} version={version} />
      </div>
      <nav className="lesson-navigation" aria-label="Lesson navigation">
        {previous ? (
          <Link
            className="previous"
            href={guideStepPath(version, previous.slug)}
          >
            <Arrow direction="left" />
            <span>
              <small>Step {number - 1}</small>
              Previous
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link className="next" href={guideStepPath(version, next.slug)}>
            <span>
              <small>Step {number + 1}</small>
              Next
            </span>
            <Arrow />
          </Link>
        ) : (
          <Link className="next" href={guideHomePath(version)}>
            <span>
              <small>You’re finished</small>
              Back to {versionMeta.label} steps
            </span>
            <Arrow />
          </Link>
        )}
      </nav>
    </article>
  );
}
