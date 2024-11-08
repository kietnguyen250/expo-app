import { Pressable, PressableProps, View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedButtonProps = PressableProps &
  ViewProps & {
    lightColor?: string;
    darkColor?: string;
  };

export function ThemedButton({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor, opacity: pressed ? 0.5 : 1 },
        style,
      ]}
      {...otherProps}
    />
  );
}
