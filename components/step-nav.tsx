import Link from "next/link";
import { Button } from "@/components/ui/button";

type StepLink = {
  href: string;
  label: string;
};

export function StepNav({
  previous,
  next,
}: {
  previous: StepLink | null;
  next: StepLink;
}) {
  return (
    <nav
      aria-label="Guide steps"
      className="mt-auto flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
    >
      {previous ? (
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href={previous.href} />}
          className="h-11 w-full px-4 sm:w-auto"
        >
          {previous.label}
        </Button>
      ) : (
        <span className="hidden sm:block" />
      )}
      <Button
        nativeButton={false}
        render={<Link href={next.href} />}
        className="h-11 w-full px-4 sm:ml-auto sm:w-auto"
      >
        {next.label}
      </Button>
    </nav>
  );
}
