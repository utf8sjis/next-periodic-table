import type { Metadata } from "next";
import "./variables.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Periodic Table v2",
  description: "An interactive periodic table built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
