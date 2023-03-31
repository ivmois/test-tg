import { languegeType } from '@/types/types';
import React, { useState } from 'react';

interface ILanguageContext {
  language: languegeType;
  handleTranslate: () => void;
}

export const languageContext = React.createContext<ILanguageContext>({
  language: 'en',
  handleTranslate: () => {},
});

export function LanguageContextProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<languegeType>('en');
  return (
    <languageContext.Provider
      value={{
        language: language,
        handleTranslate: () =>
          setLanguage((prev) => {
            if (prev === 'en') return 'wookiee';
            return 'en';
          }),
      }}
    >
      {children}
    </languageContext.Provider>
  );
}
