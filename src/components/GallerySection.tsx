"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const GallerySection = () => {
  const { t } = useTranslation();

  const images = [
    "https://via.placeholder.com/400x300/FF69B4/FFFFFF?text=Owsnap+Photo+1",
    "https://via.placeholder.com/400x300/8A2BE2/FFFFFF?text=Owsnap+Photo+2",
    "https://via.placeholder.com/400x300/00CED1/FFFFFF?text=Owsnap+Photo+3",
    "https://via.placeholder.com/400x300/FFD700/FFFFFF?text=Owsnap+Photo+4",
    "https://via.placeholder.com/400x300/32CD32/FFFFFF?text=Owsnap+Photo+5",
    "https://via.placeholder.com/400x300/FF4500/FFFFFF?text=Owsnap+Photo+6",
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {t('galleryTitle')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <Card key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={src}
                alt={t('owsapPhoto', { number: index + 1 })}
                className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;