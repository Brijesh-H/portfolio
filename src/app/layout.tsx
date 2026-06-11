import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ConsoleEasterEgg } from "@/components/layout/ConsoleEasterEgg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brijesh H | SDET Portfolio",
  description:
    "SDET with 5+ years of experience in mobile, web automation and functional testing, specializing in Appium and Playwright.",
  openGraph: {
    title: "Brijesh H | SDET Portfolio",
    description:
      "SDET with 5+ years of experience in mobile, web automation and functional testing, specializing in Appium and Playwright.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scan-lines">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ConsoleEasterEgg />
      </body>
    </html>
  );
}
