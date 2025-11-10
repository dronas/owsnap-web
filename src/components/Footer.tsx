"use client";

import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 dark:bg-gray-950">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white transition-colors duration-300">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} {t('allRightsReserved')}
        </p>
        <p className="text-xs">
          {t('designedWithFun')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;