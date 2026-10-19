import { StepRailShell } from "@/components/workshop/step-rail";
import { getStepNavigation } from "@/content/steps";

export default async function GuideStepLayout({
  children,
  params,
}: LayoutProps<"/guide/[slug]">) {
  const { slug } = await params;

  if (!getStepNavigation(slug)) {
    return children;
  }

  return <StepRailShell currentSlug={slug}>{children}</StepRailShell>;
}
