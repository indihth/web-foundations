import type { Step } from "@/content/steps";

export function instructionSectionId(slug: string, number: string) {
  return `${slug}-instruction-${number}`;
}

export type RailInstruction = {
  number: string;
  title: string;
  id: string;
};

export function getStepRailInstructions(step: Step): RailInstruction[] {
  if (step.variant === "finish") {
    return [
      {
        number: "1",
        title: "Make it yours: change the colours.",
        id: instructionSectionId(step.slug, "1"),
      },
      {
        number: "2",
        title: "Compare with the example.",
        id: instructionSectionId(step.slug, "2"),
      },
      {
        number: "3",
        title: "Optional: text-size slider.",
        id: instructionSectionId(step.slug, "3"),
      },
    ];
  }

  return step.instructions.map((block) => ({
    number: block.number,
    title: block.title,
    id: instructionSectionId(step.slug, block.number),
  }));
}
