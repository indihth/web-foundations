import { redirect } from "next/navigation";
import { steps } from "@/content/steps";

export const instant = false;

export default function GuideIndexPage() {
  redirect(`/guide/${steps[0].slug}`);
}
