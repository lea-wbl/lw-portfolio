import { useState, useContext, createContext, FC, ReactNode } from "react";

interface ILanguageContext {
  lang: string;
  getLang: () => void;
  setLang: (lang: string) => void;
  storeLang: (lang: string) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<ILanguageContext | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<string>("en");

  // GET LANG FROM LOCAL STORAGE
  const getLang = () => {
    const savedLang = localStorage.getItem("lang");
    savedLang && setLang(savedLang);
  };

  // STORE LANG IN LOCAL STORAGE
  const storeLang = async (lang: string) => {
    try {
      await localStorage.setItem("lang", lang);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de la langue :", error);
    } finally {
      getLang();
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, getLang, setLang, storeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
