import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bob Browser — Local-first Mac tools that don't phone home",
  description: "33 beautifully crafted Mac utilities. No cloud, no subscriptions, no nonsense. Free to start.",
  openGraph: {
    title: "Bob Browser",
    description: "Local-first Mac tools that don't phone home.",
    url: "https://bobbrowser.com",
    siteName: "Bob Browser",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
