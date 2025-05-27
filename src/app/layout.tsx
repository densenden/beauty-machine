import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Beauty Machine IRL - High-end Makeup in Frankfurt",
  description: "Professional mobile makeup services for executive women in Frankfurt. House calls, punctual & tailored. Book your appointment now.",
  keywords: "makeup artist, Frankfurt, mobile beauty, executive women, professional makeup, house calls",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-geist antialiased bg-background text-foreground">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
