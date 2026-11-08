import Link from "next/link";
import { steps } from "@/content/steps";
import { Arrow } from "@/components/workshop/icons";
import { guideHomePath, guideStepPath } from "@/lib/workshop-versions";

export default function GuideVersionStepNotFound() {
  const first = steps[0];

  return (
    <main className="missing">
      <span>404</span>
      <h1>Step not found</h1>
      <p>That step is not part of this workshop guide.</p>
      {first ? (
        <Link
          className="primary-button"
          href={guideStepPath("helpers", first.slug)}
        >
          Back to step 1 <Arrow />
        </Link>
      ) : (
        <Link className="primary-button" href={guideHomePath("helpers")}>
          Back to guide <Arrow />
        </Link>
      )}
    </main>
  );
}
