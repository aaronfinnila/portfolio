import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Aaron Finnilä - Portfolio",
    template: "%s | Aaron Finnilä"
  },
  description: "Portfolio of Aaron Finnilä - Full Stack Developer specializing in modern web technologies. View my projects, skills, and get in touch.",
  keywords: ["Aaron Finnilä", "Full Stack Developer", "Web Developer", "Portfolio", "React", "Next.js", "TypeScript", "Software Engineer"],
  authors: [{ name: "Aaron Finnilä" }],
  creator: "Aaron Finnilä",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aaronfinnila.fi",
    siteName: "Aaron Finnilä Portfolio",
    title: "Aaron Finnilä - Portfolio",
    description: "Portfolio of Aaron Finnilä - Full Stack Developer specializing in modern web technologies. View my projects, skills, and get in touch.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 627,
        alt: "Aaron Finnilä Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Finnilä - Full Stack Developer Portfolio",
    description: "Portfolio of Aaron Finnilä - Full Stack Developer specializing in modern web technologies.",
    images: ["/og-image.png"],
  },
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
  verification: {
    google: 'google-site-verification=uj6L0zwLc1j8id1wA-jD1CDVOZsXYzPjPgMR2HlZk2I'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
