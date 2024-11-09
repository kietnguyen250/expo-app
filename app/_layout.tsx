import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useLocales } from "@/hooks/useLocales";
import i18n from "@/locales/i18n";
import { useSettingsStore } from "@/stores/settings.store";
import { I18nextProvider } from "react-i18next";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { changeLanguage } = useLocales();
  const { language, theme, setTheme } = useSettingsStore();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (theme) {
      setTheme(theme);
    }
    if (language) {
      changeLanguage(language);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <I18nextProvider i18n={i18n}>
        {/* Các component khác của ứng dụng */}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          {/* <Stack.Screen name="screens" /> */}
        </Stack>
      </I18nextProvider>
    </ThemeProvider>
  );
}
