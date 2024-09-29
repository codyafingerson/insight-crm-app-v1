import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Insight ERP",
  description: "Insight ERP is a powerful ERP software designed to help businesses grow and succeed.",
  icons: [
    {
      url: "/images/favicon.svg",
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body className="bg-white text-slate-800 antialiased dark:bg-slate-800 dark:text-white">{children}</body>
      </html>
    </ClerkProvider>
  );
}