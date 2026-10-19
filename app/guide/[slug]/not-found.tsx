import Link from "next/link";
import { steps } from "@/content/steps";
import { Arrow } from "@/components/workshop/icons";

export default function GuideStepNotFound() {
  return (
    <main className="missing">
      <span>404</span>
      <h1>Step not found</h1>
      <p>That step is not part of this workshop guide.</p>
      <Link className="primary-button" href={`/guide/${steps[0].slug}`}>
        Back to step 1 <Arrow />
      </Link>
    </main>
  );
}
