import Link from "next/link";
import { steps } from "@/content/steps";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-4 px-4 py-8 sm:gap-5 sm:px-6 sm:py-12">
      <div className="grid gap-4 sm:grid-cols-12 sm:gap-5">
        <section className="flex min-h-[220px] flex-col justify-end rounded-3xl bg-primary p-6 text-primary-foreground sm:col-span-7 sm:min-h-[280px] sm:p-8 lg:min-h-[320px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
            Student workshop
          </p>
          <h1 className="mt-3 max-w-xl text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
            Build a page with HTML and CSS
          </h1>
        </section>

        <section className="relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 sm:col-span-5 sm:min-h-[280px] sm:p-8">
          <span className="inline-flex w-fit rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
            Welcome
          </span>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Work through a short guide, one step at a time. Each step has its own
            page. An advanced approach is tucked away if you want it.
          </p>
        </section>

        <section className="flex min-h-[160px] flex-col justify-end rounded-3xl border border-border bg-card p-6 sm:col-span-4 sm:min-h-[200px] sm:p-8">
          <p className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            {steps.length}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Steps in the guide</p>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            One page per step, with progress and previous/next links.
          </p>
        </section>

        <Link
          href="/guide"
          className="group flex min-h-[160px] flex-col justify-between rounded-3xl bg-primary p-6 text-primary-foreground transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:col-span-8 sm:min-h-[200px] sm:p-8"
        >
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-medium">
              Step-by-step
            </span>
            <span className="rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-medium">
              HTML & CSS basics
            </span>
          </div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Start the guide
              </p>
              <p className="mt-2 max-w-md text-sm leading-6 opacity-90">
                Open the first step and build your page as you go.
              </p>
            </div>
            <span
              aria-hidden
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-2xl text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </div>
        </Link>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Need a finished page to compare against?{" "}
        <Link
          href="/example/"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Open the example
        </Link>{" "}
        anytime from here or the header.
      </p>
    </main>
  );
}
