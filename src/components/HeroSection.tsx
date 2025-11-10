"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 md:py-32 flex items-center justify-center min-h-[60vh]">
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Capture Unforgettable Moments with Owsnap!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          The ultimate photobooth experience for weddings, parties, and corporate events.
        </p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700 transition-colors duration-300 animate-fade-in-up delay-400">
          Get a Quote
        </Button>
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default HeroSection;