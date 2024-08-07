import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Masterworks",
  description: "A gallery of masterworks by legendary artists.",
};

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
});

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
    <html lang="en" className={`${JagerFont.className} ${InterFont.variable}`}>
      <body>
        <div className="fixed top-0 p-4 w-full">
          <p className="text-center tracking-tighter font-primary text-xs">
            Art Gallery
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}
