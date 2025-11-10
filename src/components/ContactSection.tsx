"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here,
    // e.g., send data to an API or email service.
    alert(t('thankYouMessage'));
    (e.target as HTMLFormElement).reset(); // Clear the form
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {t('contactTitle')}
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-50 dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">{t('contactInfo')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left text-gray-700 dark:text-gray-300">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-600 mr-3" />
                <span>{t('contactEmail')}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-600 mr-3" />
                <span>{t('contactPhone')}</span>
              </div>
              <p>
                {t('contactMessage')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">{t('sendMessage')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="sr-only">{t('yourName')}</Label>
                  <Input id="name" type="text" placeholder={t('yourName')} required className="bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="email" className="sr-only">{t('yourEmail')}</Label>
                  <Input id="email" type="email" placeholder={t('yourEmail')} required className="bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="message" className="sr-only">{t('yourMessage')}</Label>
                  <Textarea id="message" placeholder={t('yourMessage')} rows={5} required className="bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600" />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">{t('sendButton')}</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;