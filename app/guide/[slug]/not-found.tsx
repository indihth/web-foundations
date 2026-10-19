import Link from "next/link";
import { steps } from "@/content/steps";

export default function GuideStepNotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-4 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Step not found</h1>
      <p className="max-w-md leading-7 text-muted-foreground">
        That guide step is not in this workshop.
      </p>
      <Link
        href={`/guide/${steps[0].slug}`}
        className="w-fit text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        Go to the first step
      </Link>
    </main>
  );
}
