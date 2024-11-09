import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import vi from "./vi";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en", // Set default language
  fallbackLng: "en",
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
