"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Sparkles, Smile } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
      <Header />
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center text-center">
        <section className="my-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight mb-6 animate-fade-in">
            Capture Unforgettable Moments with Owsnap!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
            The ultimate photobooth experience for weddings, parties, and corporate events.
            Fun, laughter, and instant memories guaranteed!
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-xl px-8 py-6 rounded-full shadow-lg transform transition-transform hover:scale-105 animate-bounce-in delay-400">
              Book Your Photobooth Today!
            </Button>
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 w-full max-w-5xl">
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 animate-fade-in delay-600">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-purple-700 dark:text-purple-300 flex items-center justify-center">
                <Camera className="mr-2" size={28} /> High-Quality Photos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              Professional cameras and lighting ensure every shot is perfect.
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 animate-fade-in delay-800">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-purple-700 dark:text-purple-300 flex items-center justify-center">
                <Sparkles className="mr-2" size={28} /> Fun Props & Backdrops
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              A wide selection of props and customizable backdrops to match your theme.
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 animate-fade-in delay-1000">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-purple-700 dark:text-purple-300 flex items-center justify-center">
                <Smile className="mr-2" size={28} /> Instant Prints & Digital
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              Guests can take home physical prints and share digital copies instantly.
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground p-4 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} Owsnap Photobooth Rental. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;