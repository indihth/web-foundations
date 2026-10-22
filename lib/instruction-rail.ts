import type { InstructionBlock, Step } from "@/content/steps";

export function instructionSectionId(slug: string, number: string) {
  return `${slug}-instruction-${number}`;
}

export type RailInstruction = {
  number: string;
  title: string;
  id: string;
};

function resolveInstructionTitle(
  block: InstructionBlock,
  advancedMode: boolean,
): string {
  if (advancedMode && block.advanced?.title) {
    return block.advanced.title;
  }
  return block.title;
}

export function getStepRailInstructions(
  step: Step,
  advancedMode: boolean,
): RailInstruction[] {
  if (step.variant === "finish") {
    return [
      {
        number: "1",
        title: "Make it yours.",
        id: instructionSectionId(step.slug, "1"),
      },
      {
        number: "2",
        title: "Compare with the example.",
        id: instructionSectionId(step.slug, "2"),
      },
    ];
  }

  return step.instructions.map((block) => ({
    number: block.number,
    title: resolveInstructionTitle(block, advancedMode),
    id: instructionSectionId(step.slug, block.number),
  }));
}
