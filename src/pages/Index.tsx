import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Editorial } from '../components/Editorial';
import { Marquee } from '../components/Marquee';
import { Lookbook } from '../components/Lookbook';
import { BigQuote } from '../components/BigQuote';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <Editorial />
        <Marquee />
        <Lookbook />
        <BigQuote />
        <Footer />
      </main>
    </>
  );
};

export default Index;