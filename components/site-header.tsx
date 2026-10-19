import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center px-4">
        <Link href="/" className="font-semibold tracking-tight">
          HTML & CSS Workshop
        </Link>
      </div>
    </header>
  );
}
