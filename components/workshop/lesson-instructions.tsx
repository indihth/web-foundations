import type { Step } from "@/content/steps";
import { EXAMPLE_PATH, SKETCH_URL } from "@/lib/workshop-urls";
import { CodeBlock } from "./code-block";
import { ExternalIcon } from "./icons";

function Instruction({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="instruction">
      <span className="instruction-number">{number}</span>
      <div>
        <h2>{title}</h2>
        {children}
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

function SketchInstructions() {
  return (
    <>
      <Instruction number="1" title="Open the starter sketch.">
        <p>
          This is the file prepared for the workshop. Open it in p5.js before
          you continue.
        </p>
        <a
          className="sketch-button"
          href={SKETCH_URL}
          target="_blank"
          rel="noreferrer"
        >
          Open the p5.js sketch <ExternalIcon />
        </a>
        <small className="under-button">
          You are opening a starter file to copy — not the finished website.
        </small>
      </Instruction>
      <Instruction number="2" title="Make your own copy.">
        <p>
          Open the starter sketch and choose <b>Duplicate</b>, then keep working
          in your copy. Rename it so it is easy to find later.
        </p>
      </Instruction>
      <Instruction number="3" title="Keep the link nearby.">
        <p>
          You will connect your copy to the page in the next step. Leave the
          p5.js tab open for now.
        </p>
        <div className="quiet-example">
          Want to see where the sketch ends up?{" "}
          <a href={EXAMPLE_PATH} target="_blank" rel="noreferrer">
            View the finished app <ExternalIcon />
          </a>
        </div>
      </Instruction>
    </>
  );
}

function FinishInstructions() {
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
      <Instruction number="1" title="Make it yours.">
        <p>
          Change the type, colours, or words. Small experiments are one of the
          best ways to learn what code does.
        </p>
      </Instruction>
      <Instruction number="2" title="Try another sketch.">
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

function SetupInstructions() {
  return (
    <>
      <Instruction number="1" title="Create your first file.">
        <p>
          In your project folder, create a new file named{" "}
          <code>index.html</code>. The name and lowercase letters matter.
        </p>
      </Instruction>
      <Instruction number="2" title="Add the basic document.">
        <p>
          Copy this starter structure into the file. It gives your browser the
          information it needs to read the page.
        </p>
        <CodeBlock />
      </Instruction>
      <Instruction number="3" title="Open it in your browser.">
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

function StandardInstructions({ step }: { step: Step }) {
  return (
    <>
      {step.instructions.map((block) => (
        <Instruction key={block.title} number={block.number} title={block.title}>
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {block.tip ? <Tip>{block.tip}</Tip> : null}
        </Instruction>
      ))}
    </>
  );
}

export function LessonInstructions({ step }: { step: Step }) {
  if (step.variant === "setup") return <SetupInstructions />;
  if (step.variant === "sketch") return <SketchInstructions />;
  if (step.variant === "finish") return <FinishInstructions />;
  return <StandardInstructions step={step} />;
}
