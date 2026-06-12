import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StatusBar } from "@/components/layout/StatusBar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ConsoleEasterEgg } from "@/components/layout/ConsoleEasterEgg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brijesh H | SDET",
  description:
    "Portfolio of Brijesh H — Software Development Engineer in Test specializing in test automation, CI/CD, and quality engineering.",
  icons: {
    icon: "/portfolio/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scan-lines scrollbar-hide" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ConsoleEasterEgg />
        <Navbar />
        <ScrollProgress />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StatusBar />
      </body>
    </html>
  );
}
