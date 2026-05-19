import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://screencandy.app";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  weight: ["100","200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Screen Candy",
    template: "%s | Screen Candy",
  },
  description:
    "Screen Candy is a cinematic screen recorder for demos, tutorials, and social videos with smooth zooms, polished motion, and desktop support across macOS, Windows, and Linux.",
  keywords: [
    "screen recorder",
    "cinematic screen recorder",
    "screen recording software",
    "product demo recorder",
    "tutorial recording tool",
    "open source screen recorder",
    "macOS screen recorder",
    "Windows screen recorder",
    "Linux screen recorder",
    "Screen Candy",
  ],
  applicationName: "Screen Candy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Screen Candy",
    title: "Screen Candy",
    description:
      "Create cinematic screen recordings for product demos, tutorials, and social content.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Screen Candy launching soon on Product Hunt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Screen Candy",
    description:
      "A cinematic screen recorder for polished demos, tutorials, and social videos.",
    images: ["/twitter-image"],
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
