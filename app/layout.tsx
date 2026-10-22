import type { Metadata } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/workshop/site-header";
import { WorkshopModeProvider } from "@/lib/workshop-mode";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "IADT Computing: Taster Session",
    template: "%s · IADT Computing",
  },
  description:
    "A step-by-step workshop guide for building a meme creation app with HTML, CSS, and p5.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable}`}>
      <body>
        <WorkshopModeProvider>
          <SiteHeader />
          {children}
        </WorkshopModeProvider>
      </body>
    </html>
  );
}
