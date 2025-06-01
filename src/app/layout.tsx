import { gensokanjiColors } from "@/constants/colors";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Periodic Table v2",
  description: "An interactive periodic table built with Next.js",
};

function getGensokanjiColorVariables(): React.CSSProperties {
  return {
    "--color-gensokanji-white": gensokanjiColors.white,
    "--color-gensokanji-black": gensokanjiColors.black,
    "--color-gensokanji-midnight": gensokanjiColors.midnight,
    "--color-gensokanji-navy": gensokanjiColors.navy,
    "--color-gensokanji-slate": gensokanjiColors.slate,
    "--color-gensokanji-steel": gensokanjiColors.steel,
    "--color-gensokanji-moon-muted": gensokanjiColors.moonMuted,
    "--color-gensokanji-moon-vivid": gensokanjiColors.moonVivid,
  } as React.CSSProperties;
}

function getPageStyleVariables(): React.CSSProperties {
  return {
    "--page-padding-horizontal": "80px",
  } as React.CSSProperties;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootCssVariables = {
    ...getGensokanjiColorVariables(),
    ...getPageStyleVariables(),
  };

  return (
    <html lang="ja" style={rootCssVariables}>
      <body>{children}</body>
    </html>
  );
}
