import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarke - Your Personal News Companion",
  description:
    "Your personal news companion that cuts through the noise. Get precisely curated news based on your specific interests.",
  metadataBase: new URL("https://sarke.org"),
  openGraph: {
    title: "Sarke - Your Personal News Companion",
    description:
      "Your personal news companion that cuts through the noise. Get precisely curated news based on your specific interests.",
    url: "https://sarke.org",
    siteName: "Sarke",
    images: [
      {
        url: "/sarke_logo.svg",
        width: 1200,
        height: 630,
        alt: "Sarke - Your Personal News Companion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarke - Your Personal News Companion",
    description:
      "Your personal news companion that cuts through the noise. Get precisely curated news based on your specific interests.",
    creator: "@theiskaa",
    images: ["/sarke_logo.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/sarke_logo.svg", type: "image/svg+xml" },
    ],
    apple: "/sarke_logo.svg",
    shortcut: "/sarke_logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
