import type { StaticImageData } from "next/image";
import type { GuideVersionId } from "@/lib/workshop-versions";

// Do not use `import: "default"`. A production Turbopack build renames that
// export, and the glob helper still reads `.default`, so every image is missing.
const screenshotModules = import.meta.glob(
  [
    "/assets/guide-screenshots/helpers/*.{png,jpg,jpeg,webp,gif,avif}",
    "/assets/guide-screenshots/dom/*.{png,jpg,jpeg,webp,gif,avif}",
  ],
  { eager: true },
);

const extensionOrder = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"];

function isStaticImage(value: unknown): value is StaticImageData {
  if (!value || typeof value !== "object") return false;
  const image = value as StaticImageData;
  return (
    typeof image.src === "string" &&
    image.src.length > 0 &&
    typeof image.width === "number" &&
    typeof image.height === "number"
  );
}

function imageFromModule(moduleValue: unknown): StaticImageData | null {
  if (isStaticImage(moduleValue)) return moduleValue;
  if (!moduleValue || typeof moduleValue !== "object") return null;

  const record = moduleValue as Record<string, unknown>;
  if (isStaticImage(record.default)) return record.default;

  for (const value of Object.values(record)) {
    if (isStaticImage(value)) return value;
  }
  return null;
}

const byVersionAndStem = new Map<string, StaticImageData>();
for (const [filePath, moduleValue] of Object.entries(screenshotModules).sort(
  ([a], [b]) => {
    const rank = (file: string) => {
      const extension = extensionOrder.findIndex((item) =>
        file.toLowerCase().endsWith(item),
      );
      return extension === -1 ? extensionOrder.length : extension;
    };
    return rank(a) - rank(b);
  },
)) {
  const image = imageFromModule(moduleValue);
  if (!image) continue;

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
