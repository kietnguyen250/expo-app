import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import vi from "./vi";
import { Language } from "@/constants/enum";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: Language.EN, // Set default language
  fallbackLng: Language.EN,
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
