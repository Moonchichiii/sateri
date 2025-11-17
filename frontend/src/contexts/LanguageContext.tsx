import type { Language } from "@/i18n/i18n";
import { translations } from "@/i18n/i18n";
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (selector: (tree: (typeof translations)[Language]) => string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("sv");

  const t: LanguageContextValue["t"] = (selector) => selector(translations[lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
