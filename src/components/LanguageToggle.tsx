"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const [language, setLanguage] = useState('en'); // 'en' for English, 'nl' for Dutch

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'nl' : 'en'));
    // In a real application, you would load and display translated content here.
    console.log(`Language toggled to: ${language === 'en' ? 'Dutch' : 'English'}`);
  };

  return (
    <Button variant="outline" onClick={toggleLanguage} className="ml-4">
      {language === 'en' ? 'Translate to Dutch' : 'Translate to English'}
    </Button>
  );
};

export default LanguageToggle;