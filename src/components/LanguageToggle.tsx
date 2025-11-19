"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const setLanguage = (lang: 'en' | 'nl') => {
    // In a real application, you would load and display translated content here.
    console.log(`Language set to: ${lang === 'en' ? 'English' : 'Dutch'}`);
  };

  return (
    <div className="flex space-x-2 ml-4">
      <Button variant="outline" onClick={() => setLanguage('en')}>
        English
      </Button>
      <Button variant="outline" onClick={() => setLanguage('nl')}>
        Dutch
      </Button>
    </div>
  );
};

export default LanguageToggle;