export function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "left" ? "flip" : undefined}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M8 5H5v10h10v-3M11 5h4v4M9 11l6-6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
