import { useEffect, useMemo, useState } from "react";

import { StoryGallery } from "./components/StoryGallery";
import type { Locale } from "./content/types";
import { DEFAULT_LOCALE, getLocaleFromPath, getPathForLocale, uiCopyByLocale } from "./i18n";

export default function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LOCALE;
    }

    return getLocaleFromPath(window.location.pathname);
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handlePopState = () => {
      setLocale(getLocaleFromPath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const nextLocale = useMemo<Locale>(() => (locale === "en" ? "zh" : "en"), [locale]);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = uiCopyByLocale[locale].title;
  }, [locale]);

  return (
    <StoryGallery
      locale={locale}
      onLocaleChange={() => {
        const nextPath = getPathForLocale(window.location.pathname, nextLocale);
        window.history.pushState({}, "", nextPath);
        setLocale(nextLocale);
      }}
    />
  );
}
