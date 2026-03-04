import type { Metadata } from "next";
import "./globals.css";
import { Merriweather, Lato } from 'next/font/google';
import { ThemeProvider } from './context/ThemeContext';

const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
});

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
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
  manifest: "/manifest.json",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${merriweather.variable} ${lato.variable} font-sans`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
