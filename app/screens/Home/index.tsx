import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedButton } from "@/components/ThemedButton";
import { Link } from "expo-router";
import { useLocales } from "@/hooks/useLocales";

export default function HomeScreen() {
  const { tr: homeTr } = useLocales("home");
  const { tr: welcomeTr } = useLocales("welcome");
  const homeTitle = homeTr("title");
  const welcomeTitle = welcomeTr("title");
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{welcomeTitle}</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{homeTitle}</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>

      <Link href={"/screens/Settings"} asChild>
        <ThemedButton
          style={styles.button}
          lightColor="black"
          darkColor="white"
        >
          <ThemedText
            style={styles.txtButton}
            lightColor="white"
            darkColor="black"
          >
            Router
          </ThemedText>
        </ThemedButton>
      </Link>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  txtButton: {
    fontSize: 20,
  },
});
