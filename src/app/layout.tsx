import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Link from "next/link";
import { CustomDrawer } from "./components/Drawer";
import { Providers } from "./providers";

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
    <html lang="en">
      <body className={`${JagerFont.className} ${InterFont.variable} isolate`}>
        <Providers>
          <div className="fixed top-0 p-4 w-full flex items-center z-40">
            <span className="text-6xl z-10 leading-9 flex self-center mt-2">
              <Link href={"/"}>*</Link>
            </span>
            <p className="text-center uppercase tracking-tighter font-primary text-xs absolute inset-x-0">
              Art Gallery
            </p>
            <div className="absolute right-5 top-6">
              <CustomDrawer />
            </div>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
