import i18n from "@/locales/i18n";
import { LocaleKeys, MainLocaleKeys } from "@/locales/type";
import { useSettingsStore } from "@/stores/settings.store";
import { useTranslation } from "react-i18next";

export const useLocales = <T extends MainLocaleKeys | undefined>(
  mainKey: T
) => {
  const { setLanguage } = useSettingsStore();
  const { t } = useTranslation();
  const { language } = i18n;

  const tr = (key: LocaleKeys<T>) => {
    let finalKey = mainKey ? `${mainKey}.${key}` : key;
    return t(finalKey);
  };
  const changeLanguage = (language: "en" | "vi") => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return { tr, language, changeLanguage };
};
