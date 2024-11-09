import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocales } from "@/hooks/useLocales";
import { useUserStore } from "@/stores/user.store";
import React from "react";
import { StyleSheet } from "react-native";

const ProfileScreen = () => {
  const { user, setUser, clearUser } = useUserStore();

  const { tr } = useLocales();

  const onDispatch = () => {
    if (user) {
      return clearUser();
    }
    const newUser = {
      id: "1",
      email: "snack@gmail.com",
      name: "Lil Snack",
    };

    setUser(newUser);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText>{tr("profile.title")}</ThemedText>

      <ThemedText>{user?.id}</ThemedText>
      <ThemedText>{user?.email}</ThemedText>
      <ThemedText>{user?.name}</ThemedText>

      <ThemedButton
        onPress={onDispatch}
        style={styles.button}
        lightColor="black"
        darkColor="white"
      >
        <ThemedText
          style={styles.txtButton}
          lightColor="white"
          darkColor="black"
        >
          Dispatch
        </ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default ProfileScreen;

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
