import "@/app/globals.css";
import { Metadata } from "next";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Sarke",
  description: "Your personal news companion that cuts through the noise",
  icons: {
    icon: "/sarke_logo.svg",
    apple: "/sarke_logo.svg",
    other: {
      rel: "icon",
      url: "/sarke_logo.svg",
    },
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
