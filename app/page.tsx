'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 transition-colors duration-300">
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="Check out my portfolio!" />
          <meta property="og:title" content="Aaron Finnilä" />
          <meta property="og:description" content="Check out my portfolio!" />
          <meta property="og:image" content="https://aaronfinnila.fi/linkedin.png" />
          <meta property="og:url" content="https://aaronfinnila.fi" />
          <meta property="og:type" content="website" />
        </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
