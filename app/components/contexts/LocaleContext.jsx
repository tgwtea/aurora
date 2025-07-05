import get from "get-value";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

const languages = [{
  label: "Spanish",
  value: "es"
}, {
  label: "English",
  value: "en"
}];

export const LocaleContext = createContext();

export default function LocaleContextProvider({ children }) {
  const [locale, setLocale] = useState({});
  const [language, setLanguage] = useLocalStorage("locale", "en");

  useEffect(() => {
    import(`../../../locales/${language}.js`).then((module) => setLocale(module.default));
  }, [language]);

  return (
    <LocaleContext.Provider value={{
      locale,
      language,
      setLanguage,
      languages
    }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);

  const useTranslation = (translation) => {
    const locale = get(ctx.locale, translation, { default: {} });

    return (path, def) => get(locale, path, { default: def ?? "" });
  };

  return { ...ctx, useTranslation };
}