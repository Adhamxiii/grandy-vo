import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grandy - Professional Voice-Over Artist Portfolio",
  description: "Explore the captivating portfolio of Grandy, a talented voice-over artist specializing in dynamic and engaging audio performances. Discover projects, services, and ways to collaborate for commercials, narrations, animations, and more. Let's bring your ideas to life with the perfect voice!",
  openGraph: {
    title: "Grandy - Professional Voice-Over Artist Portfolio",
    description: "Explore the captivating portfolio of Grandy...",
    url: "https://grandy-vo.vercel.app",
    images: [
      {
        url: "https://grandy-vo.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grandy Voice-Over Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
