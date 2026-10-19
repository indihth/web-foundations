import Link from "next/link";

const links = [
  {
    href: "/example/",
    kicker: "Look first",
    title: "Example website",
    description: "Open the finished page this workshop builds.",
  },
  {
    href: "/guide",
    kicker: "Then build it",
    title: "Start the guide",
    description: "Follow the steps, one page at a time.",
  },
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-4 py-10 sm:py-16">
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary">Student workshop</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Build a page with HTML and CSS
        </h1>
        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          See a finished example, then work through a short guide. Each step
          has its own page. A more advanced approach is tucked away if you want
          it.
        </p>
      </div>
      <ol className="grid gap-4">
        {links.map((link, index) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:p-6"
            >
              <span className="text-sm font-medium text-primary">
                {index + 1}. {link.kicker}
              </span>
              <span className="text-xl font-semibold tracking-tight">
                {link.title}
              </span>
              <span className="text-sm leading-6 text-muted-foreground">
                {link.description}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
