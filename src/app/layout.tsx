import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Insight CRM",
  description: "Insight CRM is a powerful CRM software designed to help businesses grow and succeed.",
  icons: [
    {
      url: "/images/favicon.svg",
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
        <body>{children}</body>
      </html>
  );
}