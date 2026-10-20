import { STARTER_HTML } from "@/lib/workshop-urls";

export function CodeBlock() {
  return (
    <div className="code-block">
      <div className="code-header">
        <span>HTML · index.html</span>
      </div>
      <pre>
        <code>{STARTER_HTML}</code>
      </pre>
    </div>
  );
}
