import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Masterworks",
  description: "A gallery of masterworks by legendary artists.",
};

const JagerFont = localFont({
  src: [
    {
      path: "./fonts/Jager-Font/jager-masterregular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Jager-Font/jager-masterbold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={JagerFont.className}>
      <body>{children}</body>
    </html>
  );
}
