import type { Metadata } from "next";
import { Space_Grotesk, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cliQTest | Next-Gen Automated Testing & Quality Assurance Platform",
  description: "Empower your QA teams with cliQTest - the intelligent automation platform for web, mobile, API, and desktop testing. Features self-healing, no-code engine, and real device labs.",
  keywords: ["automated testing", "QA automation", "no-code testing", "device lab", "test management", "cliQTest", "software quality assurance"],
  authors: [{ name: "cliQTest Team" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/logo/bglogo.png",
    apple: "/logo/bglogo.png",
  },
  openGraph: {
    title: "cliQTest | Smarter Testing for Faster Shipping",
    description: "The all-in-one platform for manual and automated testing across all digital surfaces.",
    url: "https://cliqtest.com",
    siteName: "cliQTest",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "cliQTest Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cliQTest | Smarter Testing for Faster Shipping",
    description: "The all-in-one platform for manual and automated testing across all digital surfaces.",
    images: ["/logo/logo.png"],
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
      className={`${spaceGrotesk.variable} ${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030303]" suppressHydrationWarning>
        <LoadingScreen>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </LoadingScreen>
      </body>
    </html>
  );
}
