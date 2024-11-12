import Button from "@/components/Button";
import { ThemedView } from "@/components/ThemedView";
import { useLocales } from "@/hooks/useLocales";
import { useUserStore } from "@/stores/user.store";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";

const ProfileScreen = () => {
  const { user, setUser, clearUser } = useUserStore();
  const width = useSharedValue(100);

  const { tr } = useLocales("profile");

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

  const handlePress = () => {
    width.value = width.value + 50;
    onDispatch();
  };

  return (
    <ThemedView style={styles.container}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: "violet",
        }}
      />
      <Button onPress={handlePress} title="Click me" />
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
