import { Appearance } from "react-native";
import { createStore } from "./config.store";

type SettingsState = {
  theme: "light" | "dark";
  language: "en" | "vi";
  setTheme: (theme: "light" | "dark") => void;
  setLanguage: (language: "en" | "vi") => void;
};

export const useSettingsStore = createStore<SettingsState>(
  (set) => ({
    theme: "light",
    language: "en",
    setTheme: (theme) => {
      Appearance.setColorScheme(theme);
      set({ theme });
    },
    setLanguage: (language) => set({ language }),
  }),
  "settings"
);
