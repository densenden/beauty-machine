import type { Metadata } from "next";
import { Lexend, Lexend_Giga } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const lexendGiga = Lexend_Giga({
  subsets: ['latin'],
  variable: '--font-lexend-giga',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
    <html lang="en" className={`${lexend.variable} ${lexendGiga.variable}`}>
      <body className="font-lexend antialiased bg-background text-foreground">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
