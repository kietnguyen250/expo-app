import { Appearance } from "react-native";
import { createStore } from "./config.store";
import { Language } from "@/constants/enum";

type SettingsState = {
  theme: "light" | "dark";
  language: Language.EN | Language.VI;
  setTheme: (theme: "light" | "dark") => void;
  setLanguage: (language: Language.EN | Language.VI) => void;
};

export const useSettingsStore = createStore<SettingsState>(
  (set) => ({
    theme: "light",
    language: Language.EN,
    setTheme: (theme) => {
      Appearance.setColorScheme(theme);
      set({ theme });
    },
    setLanguage: (language) => set({ language }),
  }),
  "settings"
);
