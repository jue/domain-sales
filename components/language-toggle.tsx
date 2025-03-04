"use client";

import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  language: 'en' | 'zh';
  setLanguage: (language: 'en' | 'zh') => void;
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      aria-label="Toggle language"
      title={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">{language === 'en' ? 'Switch to Chinese' : 'Switch to English'}</span>
    </Button>
  );
}