import type { Metadata } from "next";
import { Space_Grotesk, Alata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const alata = Alata({
  weight: "400",
  variable: "--font-alata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cliQTest.com'),
  title: {
    default: "cliQTest | AI-Powered Automated Testing & QA Platform",
    template: "%s | cliQTest",
  },
  description: "Accelerate software delivery with cliQTest. The all-in-one AI-powered automated testing platform for web, mobile, and API. Features no-code test automation, self-healing tests, and real device cloud.",
  keywords: [
    "automated testing platform", 
    "QA automation tools", 
    "no-code testing", 
    "real device testing cloud", 
    "test management software", 
    "cliQTest", 
    "software quality assurance", 
    "API testing automation", 
    "mobile app testing",
    "AI software testing",
    "continuous testing platform"
  ],
  authors: [{ name: "cliQTest Team", url: "https://cliQTest.com" }],
  creator: "cliQTest",
  publisher: "cliQTest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logos/bglogo.png",
    apple: "/logos/bglogo.png",
  },
  openGraph: {
    title: "cliQTest | AI-Powered Automated Testing & QA Platform",
    description: "Accelerate your release cycles with our all-in-one QA automation platform. Automate web, mobile, and API testing, access real devices, and ship faster.",
    url: "https://cliQTest.com",
    siteName: "cliQTest",
    images: [
      {
        url: "/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "cliQTest - The Ultimate AI-Powered Automated Testing Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cliQTest | Next-Gen Automated Testing Platform",
    description: "The all-in-one platform for manual and automated testing across all digital surfaces. Accelerate release cycles today.",
    images: ["/logos/logo.png"],
    creator: "@cliQTest",
  },
  alternates: {
    canonical: "https://cliQTest.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${alata.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-app-bg overflow-x-clip" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
