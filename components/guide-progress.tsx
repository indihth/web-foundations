import {
  Progress,
  ProgressLabel,
} from "@/components/ui/progress";

export function GuideProgress({
  number,
  total,
}: {
  number: number;
  total: number;
}) {
  const value = (number / total) * 100;

  return (
    <Progress
      value={value}
      min={0}
      max={100}
      aria-valuetext={`Step ${number} of ${total}`}
      className="w-full flex-col items-stretch gap-2 [&_[data-slot=progress-track]]:h-2"
    >
      <ProgressLabel className="text-sm font-medium text-muted-foreground">
        Step {number} of {total}
      </ProgressLabel>
    </Progress>
  );
}
