"use client";

import Image from "next/image";
import { type InstructionBlock, type Step } from "@/content/steps";
import { instructionSectionId } from "@/lib/instruction-rail";
import { loadGuideScreenshot } from "@/lib/guide-screenshots";
import {
  GUIDE_VERSIONS,
  type GuideVersionId,
  guideStepPath,
} from "@/lib/workshop-versions";
import { DOM_SKETCH_URL, EXAMPLE_PATH, SKETCH_URL } from "@/lib/workshop-urls";
import { CodeBlock } from "./code-block";
import { ExternalIcon } from "./icons";
import { KeyboardSymbolsDiagram } from "./keyboard-symbols-diagram";
import { InstructionRevealAccordion } from "./instruction-reveal";
import {
  InstructionParagraph,
  renderInstructionText,
} from "./instruction-text";

const MEMEO_ROOT_COLOUR_VARIABLES_CSS = `:root {
  --bg: #0e0e0c;
  --cream: #fffce1;
  --green: #8bff6a;
  --card: #171715;
  --border: #2c2c27;
  --muted: #a8a692;
  --input: #4a4a42;
}
`;

function Instruction({
  version,
  stepSlug,
  stepNumber,
  number,
  title,
  children,
  afterScreenshot,
}: {
  version: GuideVersionId;
  stepSlug: string;
  stepNumber: number;
  number: string;
  title: string;
  children: React.ReactNode;
  afterScreenshot?: React.ReactNode;
}) {
  const screenshot = loadGuideScreenshot(version, stepNumber, number);

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
  version,
  stepSlug,
  stepNumber,
}: {
  version: GuideVersionId;
  stepSlug: string;
  stepNumber: number;
}) {
  const isDom = version === "dom";
  const starterHref = isDom
    ? DOM_SKETCH_URL || EXAMPLE_PATH
    : SKETCH_URL;
  const starterLabel = isDom
    ? DOM_SKETCH_URL
      ? "Open the DOM template sketch"
      : "Open the finished example"
    : "Open the p5.js sketch";

  return (
    <>
      <div className="finish-card">
        <span>Workshop complete</span>
        <h2>You built a meme page.</h2>
        <p>
          {isDom
            ? "You typed HTML in the p5.js editor, used class names from a provided stylesheet, and connected the page with document.getElementById in sketch.js. That is a solid two hours."
            : "You typed HTML in the p5.js editor, used class names from a provided stylesheet, and called helper functions from sketch.js. That is a solid two hours."}
        </p>
      </div>
      <Instruction
        version={version}
        stepSlug={stepSlug}
        stepNumber={stepNumber}
        number="1"
        title="Make it yours: change the colours."
      >
        <InstructionParagraph
          text={
            isDom
              ? "Open `style.css` ,  we have not edited it in the workshop yet. Change the `:root` hex values below to restyle your page:"
              : "Open `styles.css` ,  we have not edited it in the workshop yet. Change the `:root` hex values below to restyle your page:"
          }
        />
        <CodeBlock
          label={
            isDom ? "CSS · style.css · :root" : "CSS · styles.css · :root"
          }
          source={MEMEO_ROOT_COLOUR_VARIABLES_CSS}
          copyable={false}
        />
        <Tip>
          {renderInstructionText(
            "Need a hex code? https://www.w3schools.com/colors/colors_picker.asp Copy it (with `#`), save, and play.",
          )}
        </Tip>
      </Instruction>
      <Instruction
        version={version}
        stepSlug={stepSlug}
        stepNumber={stepNumber}
        number="2"
        title="Compare with the example."
      >
        <p>
          {isDom
            ? "Open the finished Memeo app beside your sketch. The example also has a top banner bar that this track did not build ,  that is fine."
            : "Open the finished Memeo app beside your sketch. Your page may skip the empty-state message. That is fine for today."}
        </p>
      </Instruction>
      <Instruction
        version={version}
        stepSlug={stepSlug}
        stepNumber={stepNumber}
        number="3"
        title="Optional: text-size slider."
      >
        <p>
          The finished Memeo app has a slider to resize the meme text. You do
          not need it for the workshop ,  it is a more advanced extra in the
          guide.
        </p>
        <p>
          When you want to try it, open{" "}
          <a href={guideStepPath(version, "add-text-size")}>
            Extra: Add Text Size
          </a>{" "}
          (the next step) or use <b>Next</b> below.
        </p>
      </Instruction>
      <div className="end-resources">
        <a href={EXAMPLE_PATH} target="_blank" rel="noreferrer">
          <span>Finished website</span>
          <b>Open Memeo</b>
          <ExternalIcon />
        </a>
        <a href={starterHref} target="_blank" rel="noreferrer">
          <span>Your starter file</span>
          <b>{starterLabel}</b>
          <ExternalIcon />
        </a>
      </div>
    </>
  );
}

function StandardInstructions({
  version,
  step,
  stepNumber,
}: {
  version: GuideVersionId;
  step: Step;
  stepNumber: number;
}) {
  return (
    <>
      {step.instructions.map((block) => (
        <Instruction
          key={block.title}
          version={version}
          stepSlug={step.slug}
          stepNumber={stepNumber}
          number={block.number}
          title={block.title}
          afterScreenshot={
            block.tip || block.challenge ? (
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
          {block.body.map((paragraph) => (
            <InstructionParagraph key={paragraph} text={paragraph} />
          ))}
          <InstructionCodeBlocks
            code={block.code}
            codeSecondary={block.codeSecondary}
          />
          {block.explained ? (
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
      ))}
    </>
  );
}

export function LessonInstructions({
  step,
  version,
}: {
  step: Step;
  version: GuideVersionId;
}) {
  const stepList = GUIDE_VERSIONS[version].steps;
  const stepNumber = stepList.findIndex((item) => item.slug === step.slug) + 1;

  if (step.variant === "finish") {
    return (
      <FinishInstructions
        version={version}
        stepSlug={step.slug}
        stepNumber={stepNumber}
      />
    );
  }
  return (
    <StandardInstructions
      version={version}
      step={step}
      stepNumber={stepNumber}
    />
  );
}
