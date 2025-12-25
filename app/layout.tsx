import type { Metadata } from "next";
import "./globals.css";
import DarkModeProvider from "./components/DarkModeProvider";
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
  title: "Aaron Finnilä - Portfolio",
  description: "Portfolio website showcasing programming projects by Aaron Finnilä",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
