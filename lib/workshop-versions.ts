import { domSteps } from "@/content/dom-steps";
import {
  steps as helpersSteps,
  getStepNavigationForSteps,
  type Step,
} from "@/content/steps";

export type GuideVersionId = "helpers" | "dom";

export const GUIDE_VERSION_IDS: GuideVersionId[] = ["helpers", "dom"];

export type GuideVersion = {
  id: GuideVersionId;
  label: string;
  description: string;
  durationLabel: string;
  steps: Step[];
};

export const GUIDE_VERSIONS: Record<GuideVersionId, GuideVersion> = {
  helpers: {
    id: "helpers",
    label: "Helpers",
    description: "Call the functions already in the sketch.",
    durationLabel: "about 2 hours",
    steps: helpersSteps,
  },
  dom: {
    id: "dom",
    label: "The DOM",
    description:
      "Use document.getElementById in sketch.js. Optional text-size helper in helpers.js.",
    durationLabel: "about 1 hour",
    steps: domSteps,
  },
};

export function isGuideVersionId(value: string): value is GuideVersionId {
  return value === "helpers" || value === "dom";
}

export function guideHomePath(version: GuideVersionId) {
  return `/guide/${version}`;
}

export function guideStepPath(version: GuideVersionId, slug: string) {
  return `/guide/${version}/${slug}`;
}

export function getVersionStepNavigation(version: GuideVersionId, slug: string) {
  return getStepNavigationForSteps(GUIDE_VERSIONS[version].steps, slug);
}

export function isLegacyHelpersSlug(segment: string) {
  return helpersSteps.some((step) => step.slug === segment);
}
