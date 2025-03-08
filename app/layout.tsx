import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { poppins } from "./fonts/fonts";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "KENTA2525",
  description: "This is Portfolio site of KENTA IKEDA.",
  authors: {
    name: "KENTA IKEDA",
    url: "https://kenta2525.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://kenta2525.vercel.app/",
    title: "KENTA2525",
    description: "This is Portfolio site of KENTA IKEDA.",
    siteName: "KETNA2525",
    locale: "ja_JP",
    // images: "",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@2525devdev",
    title: "KENTA2525",
    description: "This is Portfolio site of KENTA IKEDA.",
    // images: ''
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  initialScale: 1,
  themeColor: "#000000",
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="lofi" className="bg-neutral">
      <body className={`${poppins.className} antialiased`}>
        <main className="m-2 bg-base-300 text-base-content rounded-4xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
