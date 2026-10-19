import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdvancedApproach } from "@/components/advanced-approach";
import { GuideProgress } from "@/components/guide-progress";
import { StepNav } from "@/components/step-nav";
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

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-4 py-8 sm:py-12">
      <GuideProgress number={number} total={total} />
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{step.title}</h1>
        <p className="text-lg leading-7 text-muted-foreground">{step.summary}</p>
      </header>
      <div className="space-y-4 text-base leading-7">
        {step.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {step.advanced ? (
        <AdvancedApproach title={step.advanced.title} body={step.advanced.body} />
      ) : null}
      <StepNav
        previous={
          previous
            ? { href: `/guide/${previous.slug}`, label: "Previous" }
            : null
        }
        next={
          next
            ? { href: `/guide/${next.slug}`, label: "Next" }
            : { href: "/", label: "Back to home" }
        }
      />
    </article>
  );
}
