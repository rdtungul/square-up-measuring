import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Square Up Measuring | ANSI Floor Plans & MLS Photography – Fort Mill, SC",
  description:
    "Accurate ANSI-certified floor plans, MLS photography, and drone services for realtors and homeowners in the Carolinas. Next-day delivery. Trusted by 400+ realtors. Veteran-owned.",
  keywords: [
    "floor plans Fort Mill SC",
    "MLS photography",
    "real estate photography Carolinas",
    "ANSI floor plans",
    "home measurement",
    "drone real estate",
  ],
  openGraph: {
    title: "Square Up Measuring",
    description: "Accurate, Reliable, Next Day Delivery — Trusted by 400+ Realtors.",
    url: "https://squareupmeasuring.com",
    siteName: "Square Up Measuring",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
