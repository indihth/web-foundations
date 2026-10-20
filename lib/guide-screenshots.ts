import type { StaticImageData } from "next/image";

const screenshots = import.meta.glob(
  [
    "/assets/guide-screenshots/*.png",
    "/assets/guide-screenshots/*.jpg",
    "/assets/guide-screenshots/*.jpeg",
    "/assets/guide-screenshots/*.webp",
    "/assets/guide-screenshots/*.gif",
    "/assets/guide-screenshots/*.avif",
  ],
  { eager: true, import: "default" },
) as Record<string, StaticImageData>;

const extensionOrder = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"];

const byStep = new Map<string, StaticImageData>();
for (const [filePath, image] of Object.entries(screenshots).sort(([a], [b]) => {
  const rank = (file: string) => {
    const extension = extensionOrder.findIndex((item) => file.toLowerCase().endsWith(item));
    return extension === -1 ? extensionOrder.length : extension;
  };
  return rank(a) - rank(b);
})) {
  const filename = filePath.split("/").pop() ?? "";
  const stem = filename.replace(/\.[^.]+$/, "");
  if (!byStep.has(stem)) {
    byStep.set(stem, image);
  }
}

export function loadGuideScreenshot(
  stepNumber: number,
  instructionNumber: string,
): StaticImageData | null {
  if (!Number.isInteger(stepNumber) || stepNumber < 1) {
    return null;
  }
  if (!/^\d+$/.test(instructionNumber)) {
    return null;
  }

  return byStep.get(`${stepNumber}-${instructionNumber}`) ?? null;
}
