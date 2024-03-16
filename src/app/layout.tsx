import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firacode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Luciano Gonzalez",
  description: "Genereado con NextJs, Tailwindcss, Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firacode.className}>{children}</body>
    </html>
  );
}
