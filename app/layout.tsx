import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./variables.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Periodic Table",
  description: "An interactive periodic table built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
