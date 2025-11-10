"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher'; // Import LanguageSwitcher
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Header = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <header className="bg-white shadow-sm dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          {t('owsnapevents')}
        </Link>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">{t('about')}</a>
          <a href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">{t('services')}</a>
          <a href="#gallery" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">{t('gallery')}</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">{t('contact')}</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/booking">
            <Button className="hidden md:block">{t('bookNow')}</Button>
          </Link>
          <LanguageSwitcher /> {/* Add LanguageSwitcher here */}
          <ThemeToggle />
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher /> {/* Add LanguageSwitcher to mobile menu as well */}
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t('toggleMenu')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-purple-600 dark:hover:text-pink-500">{t('home')}</Link>
                <a href="#about" className="text-lg font-medium hover:text-purple-600 dark:hover:text-pink-500">{t('about')}</a>
                <a href="#services" className="text-lg font-medium hover:text-purple-600 dark:hover:text-pink-500">{t('services')}</a>
                <a href="#gallery" className="text-lg font-medium hover:text-purple-600 dark:hover:text-pink-500">{t('gallery')}</a>
                <a href="#contact" className="text-lg font-medium hover:text-purple-600 dark:hover:text-pink-500">{t('contact')}</a>
                <Link to="/booking">
                  <Button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">{t('bookNow')}</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;