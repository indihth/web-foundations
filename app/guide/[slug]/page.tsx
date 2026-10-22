import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdvancedStepNote } from "@/components/workshop/advanced-step-note";
import { Arrow } from "@/components/workshop/icons";
import { LessonHeading } from "@/components/workshop/lesson-heading";
import { LessonInstructions } from "@/components/workshop/lesson-instructions";
import { getStepNavigation, steps } from "@/content/steps";

export const instant = false;

export function generateStaticParams() {
  return steps.map((step) => ({ slug: step.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const navigation = getStepNavigation(slug);

  if (!navigation) {
    return { title: "Step not found" };
  }

  return { title: navigation.step.title };
}

export default async function GuideStepPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const navigation = getStepNavigation(slug);

  if (!navigation) {
    notFound();
  }

  const { step, number, total, previous, next } = navigation;
  const progress = Math.round((number / total) * 100);

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
      <LessonHeading kicker={step.kicker} title={step.title} intro={step.intro} />
      <AdvancedStepNote advanced={step.advanced} />
      <div className="instructions">
        <LessonInstructions step={step} />
      </div>
      <nav className="lesson-navigation" aria-label="Lesson navigation">
        {previous ? (
          <Link
            className="previous"
            href={`/guide/${previous.slug}`}
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
          <Link className="next" href={`/guide/${next.slug}`}>
            <span>
              <small>Step {number + 1}</small>
              Next
            </span>
            <Arrow />
          </Link>
        ) : (
          <Link className="next" href="/">
            <span>
              <small>You’re finished</small>
              Back to home
            </span>
            <Arrow />
          </Link>
        )}
      </nav>
    </article>
  );
}
