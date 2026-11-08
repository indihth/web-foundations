"use client";

import { usePathname } from "next/navigation";
import { type GuideVersionId } from "@/lib/workshop-versions";
import { StepRailShell } from "./step-rail";

function currentSlugFromPath(pathname: string, version: GuideVersionId): string {
  const prefix = `/guide/${version}/`;
  if (!pathname.startsWith(prefix)) {
    return "";
  }
  const rest = pathname.slice(prefix.length);
  if (!rest || rest.includes("/")) {
    return "";
  }
  return rest;
}

export function GuideVersionShell({
  version,
  children,
}: {
  version: GuideVersionId;
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const currentSlug = currentSlugFromPath(pathname, version);

  return (
    <StepRailShell currentSlug={currentSlug} version={version}>
      {children}
    </StepRailShell>
  );
}
