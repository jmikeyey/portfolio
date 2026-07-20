import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.lead,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
