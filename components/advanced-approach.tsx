"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function AdvancedApproach({
  title,
  body,
}: {
  title: string;
  body: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="rounded-xl border border-border bg-card"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium">
        <span>{open ? "Hide advanced approach" : "Show advanced approach"}</span>
        <span aria-hidden="true" className="text-muted-foreground">
          {open ? "–" : "+"}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t border-border px-4 py-4">
        <h2 className="text-base font-semibold">{title}</h2>
        <div className="mt-2 space-y-3 text-sm leading-6 text-muted-foreground">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
