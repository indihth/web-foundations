import { GuideVersionShell } from "@/components/workshop/guide-version-shell";
import { isGuideVersionId } from "@/lib/workshop-versions";

export default async function GuideVersionLayout({
  children,
  params,
}: LayoutProps<"/guide/[version]">) {
  const { version } = await params;

  if (!isGuideVersionId(version)) {
    return children;
  }

  return (
    <GuideVersionShell version={version}>{children}</GuideVersionShell>
  );
}
