import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Innovative Decor Centre",
  description:
    "Event planning, floral design, fresh flowers and artificial flowers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
