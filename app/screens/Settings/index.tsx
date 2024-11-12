import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Language } from "@/constants/enum";
import { useLocales } from "@/hooks/useLocales";
import React from "react";
import { StyleSheet } from "react-native";

const SettingsScreen = () => {
  const { tr, language, changeLanguage } = useLocales("settings");

  const onSetLanguage = () => {
    const newLanguage = language === Language.VI ? Language.EN : Language.VI;
    changeLanguage(newLanguage);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText>{tr("title")}</ThemedText>
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
          {tr("language")}
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
