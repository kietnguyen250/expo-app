import { useState, type PropsWithChildren, type ReactElement } from "react";
import { Platform, StyleSheet, useColorScheme } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import { useSettingsStore } from "@/stores/settings.store";
import { ThemedButton } from "./ThemedButton";
import { ThemedText } from "./ThemedText";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const [appTheme, setAppTheme] = useState(colorScheme);
  const { setTheme } = useSettingsStore();

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const onChangeTheme = () => {
    if (Platform.OS !== "web") {
      const newTheme = appTheme === "light" ? "dark" : "light";
      setTheme(newTheme);
      setAppTheme(newTheme);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
        <ThemedButton
          onPress={onChangeTheme}
          style={styles.button}
          lightColor="black"
          darkColor="white"
        >
          <ThemedText
            style={styles.txtButton}
            lightColor="white"
            darkColor="black"
          >
            Hello
          </ThemedText>
        </ThemedButton>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  txtButton: {
    fontSize: 20,
  },
});
