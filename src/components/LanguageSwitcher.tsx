"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <Button
        variant={i18n.language === 'en' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('en')}
        className="dark:text-white dark:hover:bg-gray-700"
      >
        EN
      </Button>
      <Button
        variant={i18n.language === 'nl' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('nl')}
        className="dark:text-white dark:hover:bg-gray-700"
      >
        NL
      </Button>
    </div>
  );
};

export default LanguageSwitcher;