import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI English",
  description: "Conversation first. Learning happens invisibly.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
