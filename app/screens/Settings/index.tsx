import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocales } from "@/hooks/useLocales";
import React from "react";
import { StyleSheet } from "react-native";

const SettingsScreen = () => {
  const { tr, language, changeLanguage } = useLocales();

  const onSetLanguage = () => {
    const newLanguage = language === "vi" ? "en" : "vi";
    changeLanguage(newLanguage);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText>{tr("settings.title")}</ThemedText>
      <ThemedButton
        onPress={onSetLanguage}
        style={styles.button}
        lightColor="black"
        darkColor="white"
      >
        <ThemedText
          style={styles.txtButton}
          lightColor="white"
          darkColor="black"
        >
          {tr("settings.language")}
        </ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 290,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
  txtButton: {
    fontSize: 20,
  },
});
