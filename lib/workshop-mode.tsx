"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "workshop-advanced-mode";

type WorkshopModeContextValue = {
  advanced: boolean;
  setAdvanced: (value: boolean) => void;
  /** False until localStorage has been read (avoid SSR mismatch). */
  ready: boolean;
};

const WorkshopModeContext = createContext<WorkshopModeContextValue | null>(
  null,
);

export function WorkshopModeProvider({ children }: { children: ReactNode }) {
  const [advanced, setAdvancedState] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "1") {
        setAdvancedState(true);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const setAdvanced = useCallback((value: boolean) => {
    setAdvancedState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <WorkshopModeContext.Provider value={{ advanced, setAdvanced, ready }}>
      {children}
    </WorkshopModeContext.Provider>
  );
}

export function useWorkshopMode() {
  const ctx = useContext(WorkshopModeContext);
  if (!ctx) {
    throw new Error("useWorkshopMode must be used within WorkshopModeProvider");
  }
  return ctx;
}
