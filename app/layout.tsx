import "@/app/globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

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
        url: "/opengraph_image.png",
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
    images: [
      {
        url: "/opengraph_image.png",
        width: 1200,
        height: 630,
        alt: "Sarke Logo",
      },
    ],
  },
  icons: {
    icon: "/sarke_logo.svg",
    apple: "/sarke_logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  );
}
