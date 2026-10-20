import Image from "next/image";
import { steps, type Step } from "@/content/steps";
import { loadGuideScreenshot } from "@/lib/guide-screenshots";
import { EXAMPLE_PATH, SKETCH_URL } from "@/lib/workshop-urls";
import { CodeBlock } from "./code-block";
import { ExternalIcon } from "./icons";

function Instruction({
  stepNumber,
  number,
  title,
  children,
}: {
  stepNumber: number;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  const screenshot = loadGuideScreenshot(stepNumber, number);

  return (
    <section className="instruction">
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

function FinishInstructions({ stepNumber }: { stepNumber: number }) {
  return (
    <>
      <div className="finish-card">
        <span>Workshop complete</span>
        <h2>You built a web page.</h2>
        <p>
          You wrote its structure, styled it with CSS, and added an interactive
          p5.js sketch. That is a lot for two hours.
        </p>
      </div>
      <Instruction stepNumber={stepNumber} number="1" title="Make it yours.">
        <p>
          Change the type, colours, or words. Small experiments are one of the
          best ways to learn what code does.
        </p>
      </Instruction>
      <Instruction stepNumber={stepNumber} number="2" title="Try another sketch.">
        <p>
          Go back to your p5.js copy and change one value at a time. Refresh your
          page to see what changed.
        </p>
      </Instruction>
      <div className="end-resources">
        <a href={EXAMPLE_PATH} target="_blank" rel="noreferrer">
          <span>Finished website</span>
          <b>Open Meme-ify</b>
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

function SetupInstructions({ stepNumber }: { stepNumber: number }) {
  return (
    <>
      <Instruction stepNumber={stepNumber} number="1" title="Create your first file.">
        <p>
          In your project folder, create a new file named{" "}
          <code>index.html</code>. The name and lowercase letters matter.
        </p>
      </Instruction>
      <Instruction stepNumber={stepNumber} number="2" title="Add the basic document.">
        <p>
          Copy this starter structure into the file. It gives your browser the
          information it needs to read the page.
        </p>
        <CodeBlock />
      </Instruction>
      <Instruction stepNumber={stepNumber} number="3" title="Open it in your browser.">
        <p>
          Save the file, then open <code>index.html</code> in a browser. A blank
          white page means it is working.
        </p>
        <Tip>
          Keep your editor and browser side by side. Save, refresh, and check
          your work after every small change.
        </Tip>
      </Instruction>
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
  return (
    <>
      {step.instructions.map((block) => (
        <Instruction
          key={block.title}
          stepNumber={stepNumber}
          number={block.number}
          title={block.title}
        >
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {block.link ? (
            <InstructionLink
              href={block.link.href}
              label={block.link.label}
              note={block.link.note}
            />
          ) : null}
          {block.tip ? <Tip>{block.tip}</Tip> : null}
        </Instruction>
      ))}
    </>
  );
}

export function LessonInstructions({ step }: { step: Step }) {
  const stepNumber = steps.findIndex((item) => item.slug === step.slug) + 1;

  if (step.variant === "setup") return <SetupInstructions stepNumber={stepNumber} />;
  if (step.variant === "finish") return <FinishInstructions stepNumber={stepNumber} />;
  return <StandardInstructions step={step} stepNumber={stepNumber} />;
}
