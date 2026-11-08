import type { StaticImageData } from "next/image";
import type { GuideVersionId } from "@/lib/workshop-versions";

const screenshots = import.meta.glob(
  [
    "/assets/guide-screenshots/helpers/*.{png,jpg,jpeg,webp,gif,avif}",
    "/assets/guide-screenshots/dom/*.{png,jpg,jpeg,webp,gif,avif}",
  ],
  { eager: true, import: "default" },
) as Record<string, StaticImageData>;

const extensionOrder = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"];

const byVersionAndStem = new Map<string, StaticImageData>();
for (const [filePath, image] of Object.entries(screenshots).sort(([a], [b]) => {
  const rank = (file: string) => {
    const extension = extensionOrder.findIndex((item) =>
      file.toLowerCase().endsWith(item),
    );
    return extension === -1 ? extensionOrder.length : extension;
  };
  return rank(a) - rank(b);
})) {
  const parts = filePath.split("/");
  const version = parts[parts.length - 2];
  const filename = parts[parts.length - 1] ?? "";
  const stem = filename.replace(/\.[^.]+$/, "");
  const key = `${version}/${stem}`;
  if (!byVersionAndStem.has(key)) {
    byVersionAndStem.set(key, image);
  }
}

export function loadGuideScreenshot(
  version: GuideVersionId,
  stepNumber: number,
  instructionNumber: string,
): StaticImageData | null {
  if (!Number.isInteger(stepNumber) || stepNumber < 1) {
    return null;
  }
  if (!/^\d+$/.test(instructionNumber)) {
    return null;
  }

  return byVersionAndStem.get(`${version}/${stepNumber}-${instructionNumber}`) ?? null;
}
