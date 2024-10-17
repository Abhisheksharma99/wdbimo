import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WdBimo India Pvt Ltd - Pioneers in Agriculture & Industrial Manufacturing",
  description:
    "WdBimo India Pvt Ltd specializes in manufacturing PEB structures, tank vessels, and biogas plants. Delivering innovative infrastructure solutions to build a sustainable future.",
  keywords: [
    "Industrial Manufacturing",
    "Agricultural Infrastructure",
    "PEB Structures",
    "Tank Vessel Manufacturing",
    "BioGas Plants",
    "Sustainable Development",
    "Infrastructure Solutions",
    "Turnkey Projects",
    "WdBimo India Pvt Ltd",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "WdBimo India Pvt Ltd",
    description:
      "Building the Future of Agriculture and Industry with sustainable infrastructure.",
    url: "https://www.wdbimo.com",
    siteName: "WdBimo",
    images: [
      {
        url: '../app/assets/logo-color.svg',
        width: 800,
        height: 600,
        alt: "WdBimo Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
