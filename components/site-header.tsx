import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/guide", label: "Guide" },
  { href: "/example/", label: "Example" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          HTML & CSS Workshop
        </Link>
        <nav
          aria-label="Main"
          className="flex flex-1 flex-wrap items-center justify-center gap-6 sm:justify-end sm:gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button
            nativeButton={false}
            render={<Link href="/guide" />}
            className="h-10 rounded-full px-5 text-sm font-semibold"
          >
            Start the guide
          </Button>
        </nav>
      </div>
    </header>
  );
}
