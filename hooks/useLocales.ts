import i18n from "@/locales/i18n";
import { LocaleKeys } from "@/locales/type";
import { useSettingsStore } from "@/stores/settings.store";
import { useTranslation } from "react-i18next";

export const useLocales = () => {
  const { setLanguage } = useSettingsStore();
  const { t } = useTranslation();
  const { language } = i18n;
  const tr = (key: LocaleKeys) => t(key);
  const changeLanguage = (language: "en" | "vi") => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return { tr, language, changeLanguage };
};
