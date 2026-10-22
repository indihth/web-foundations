"use client";

import { useWorkshopMode } from "@/lib/workshop-mode";

export function WorkshopModeToggle() {
  const { advanced, setAdvanced, ready } = useWorkshopMode();

  return (
    <div
      className="workshop-mode-toggle"
      role="group"
      aria-label="Workshop track"
    >
      <button
        type="button"
        className={!advanced ? "active" : undefined}
        aria-pressed={ready ? !advanced : true}
        onClick={() => setAdvanced(false)}
      >
        Regular
      </button>
      <button
        type="button"
        className={advanced ? "active" : undefined}
        aria-pressed={ready ? advanced : false}
        onClick={() => setAdvanced(true)}
      >
        Advanced
      </button>
    </div>
  );
}
