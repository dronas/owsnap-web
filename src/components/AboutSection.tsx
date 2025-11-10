"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Smile, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          About Owsnap Photobooths
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Owsnap is dedicated to bringing joy and lasting memories to your special occasions. We offer state-of-the-art photobooths with a variety of fun props, backdrops, and instant prints to make your event truly unforgettable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Camera className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">High-Quality Photos</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              Crystal clear images with professional lighting and cameras.
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Smile className="h-10 w-10 text-pink-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Endless Fun</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              A wide selection of props, filters, and digital sharing options.
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Sparkles className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Customizable Experience</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              Tailor your photobooth to match your event's theme and style.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;