"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Smile, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {t('aboutTitle')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          {t('aboutDescription')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Camera className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{t('highQualityPhotosTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              {t('highQualityPhotosContent')}
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Smile className="h-10 w-10 text-pink-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{t('endlessFunTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              {t('endlessFunContent')}
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Sparkles className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{t('customizableExperienceTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              {t('customizableExperienceContent')}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;