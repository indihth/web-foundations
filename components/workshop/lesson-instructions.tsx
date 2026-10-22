"use client";

import Image from "next/image";
import {
  steps,
  type InstructionBlock,
  type Step,
} from "@/content/steps";
import { useWorkshopMode } from "@/lib/workshop-mode";
import { instructionSectionId } from "@/lib/instruction-rail";
import { loadGuideScreenshot } from "@/lib/guide-screenshots";
import { EXAMPLE_PATH, SKETCH_URL } from "@/lib/workshop-urls";
import { CodeBlock } from "./code-block";
import { ExternalIcon } from "./icons";
import { KeyboardSymbolsDiagram } from "./keyboard-symbols-diagram";
import { InstructionRevealAccordion } from "./instruction-reveal";
import {
  InstructionParagraph,
  renderInstructionText,
} from "./instruction-text";

function Instruction({
  stepSlug,
  stepNumber,
  number,
  title,
  children,
  afterScreenshot,
}: {
  stepSlug: string;
  stepNumber: number;
  number: string;
  title: string;
  children: React.ReactNode;
  afterScreenshot?: React.ReactNode;
}) {
  const screenshot = loadGuideScreenshot(stepNumber, number);

  return (
    <section
      id={instructionSectionId(stepSlug, number)}
      className="instruction"
    >
      <span className="instruction-number">{number}</span>
      <div>
        <h2>{title}</h2>
        {children}
        {screenshot ? (
          <Image
            className="instruction-screenshot"
            src={screenshot}
            alt={title}
            sizes="(max-width: 720px) 86vw, 640px"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        ) : null}
        {afterScreenshot}
      </div>
    </section>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="tip">
      <b>Good to know</b>
      <p>{children}</p>
    </div>
  );
}

function Challenge({ children }: { children: React.ReactNode }) {
  return (
    <div className="challenge">
      <b>Challenge</b>
      <p>{children}</p>
    </div>
  );
}

function Explained({ children }: { children: React.ReactNode }) {
  return (
    <div className="explained">
      <b>Explained</b>
      <p>{children}</p>
    </div>
  );
}

function InstructionLink({
  href,
  label,
  note,
}: {
  href: string;
  label: string;
  note?: string;
}) {
  return (
    <>
      <a
        className="sketch-button"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {label} <ExternalIcon />
      </a>
      {note ? <small className="under-button">{note}</small> : null}
    </>
  );
}

function resolveInstruction(
  block: InstructionBlock,
  advancedMode: boolean,
): {
  title: string;
  body: string[];
  code: InstructionBlock["code"];
  codeSecondary: InstructionBlock["codeSecondary"];
} {
  if (!advancedMode || !block.advanced) {
    return {
      title: block.title,
      body: block.body,
      code: block.code,
      codeSecondary: block.codeSecondary,
    };
  }
  const override = block.advanced;
  const hideCode = override.omitCode === true;
  return {
    title: override.title ?? block.title,
    body: override.body ?? block.body,
    code: hideCode ? undefined : block.code,
    codeSecondary: hideCode ? undefined : block.codeSecondary,
  };
}

function InstructionCodeBlocks({
  code,
  codeSecondary,
}: {
  code: InstructionBlock["code"];
  codeSecondary: InstructionBlock["codeSecondary"];
}) {
  return (
    <>
      {code ? (
        <CodeBlock
          label={code.label}
          source={code.source}
          copyable={code.copyable}
          highlights={code.highlights}
        />
      ) : null}
      {codeSecondary ? (
        <CodeBlock
          label={codeSecondary.label}
          source={codeSecondary.source}
          copyable={codeSecondary.copyable}
          highlights={codeSecondary.highlights}
        />
      ) : null}
    </>
  );
}

function FinishInstructions({
  stepSlug,
  stepNumber,
}: {
  stepSlug: string;
  stepNumber: number;
}) {
  const { advanced: advancedMode } = useWorkshopMode();

  return (
    <>
      <div className="finish-card">
        <span>Workshop complete</span>
        <h2>You built a meme page.</h2>
        <p>
          {advancedMode
            ? "You typed HTML in the p5.js editor, used class names from a provided stylesheet, and used document.getElementById in sketch.js (or read how the helpers do the same in helpers.js). That is a solid two hours."
            : "You typed HTML in the p5.js editor, used class names from a provided stylesheet, and called helper functions from sketch.js. That is a solid two hours."}
        </p>
      </div>
      <Instruction
        stepSlug={stepSlug}
        stepNumber={stepNumber}
        number="1"
        title="Make it yours."
      >
        <p>
          {advancedMode
            ? "Change the words, try another photo, or open helpers.js and compare your getElementById calls with the helper functions. Small experiments are one of the best ways to learn what code does."
            : "Change the words, try another photo, or open helpers.js and read how the functions work. Small experiments are one of the best ways to learn what code does."}
        </p>
      </Instruction>
      <Instruction
        stepSlug={stepSlug}
        stepNumber={stepNumber}
        number="2"
        title="Compare with the example."
      >
        <p>
          Open the finished Memeo app beside your sketch. Your page may skip the
          empty-state message. That is fine for today. The finished site still
          has a text-size slider if you did not add one in the last step.
        </p>
      </Instruction>
      <div className="end-resources">
        <a href={EXAMPLE_PATH} target="_blank" rel="noreferrer">
          <span>Finished website</span>
          <b>Open Memeo</b>
          <ExternalIcon />
        </a>
        <a href={SKETCH_URL} target="_blank" rel="noreferrer">
          <span>Your starter file</span>
          <b>Open the p5.js sketch</b>
          <ExternalIcon />
        </a>
      </div>
    </>
  );
}

function StandardInstructions({
  step,
  stepNumber,
}: {
  step: Step;
  stepNumber: number;
}) {
  const { advanced: advancedMode } = useWorkshopMode();

  return (
    <>
      {step.instructions.map((block) => {
        const resolved = resolveInstruction(block, advancedMode);
        return (
        <Instruction
          key={block.title}
          stepSlug={step.slug}
          stepNumber={stepNumber}
          number={block.number}
          title={resolved.title}
          afterScreenshot={
            !(advancedMode && block.advanced?.omitCode) &&
            (block.tip || block.challenge) ? (
              <>
                {block.tip ? (
                  <Tip>{renderInstructionText(block.tip)}</Tip>
                ) : null}
                {block.challenge ? (
                  <Challenge>{renderInstructionText(block.challenge)}</Challenge>
                ) : null}
              </>
            ) : null
          }
        >
          {resolved.body.map((paragraph) => (
            <InstructionParagraph key={paragraph} text={paragraph} />
          ))}
          <InstructionCodeBlocks
            code={resolved.code}
            codeSecondary={resolved.codeSecondary}
          />
          {block.explained &&
          !(advancedMode && block.advanced?.omitCode) ? (
            <Explained>{renderInstructionText(block.explained)}</Explained>
          ) : null}
          {block.keyboardDiagram ? <KeyboardSymbolsDiagram /> : null}
          {block.reveal ? <InstructionRevealAccordion reveal={block.reveal} /> : null}
          {block.link ? (
            <InstructionLink
              href={block.link.href}
              label={block.link.label}
              note={block.link.note}
            />
          ) : null}
        </Instruction>
      );
      })}
    </>
  );
}

export function LessonInstructions({ step }: { step: Step }) {
  const stepNumber = steps.findIndex((item) => item.slug === step.slug) + 1;

  if (step.variant === "finish") {
    return (
      <FinishInstructions stepSlug={step.slug} stepNumber={stepNumber} />
    );
  }
  return <StandardInstructions step={step} stepNumber={stepNumber} />;
}
