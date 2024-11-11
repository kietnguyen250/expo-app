import React, { FC } from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ThemedButton } from "./ThemedButton";
import { ThemedText } from "./ThemedText";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  disabled?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  titleStyle,
  disabled = false,
}) => {
  return (
    <ThemedButton
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        style,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
    >
      <ThemedText style={[styles.title, titleStyle]}>{title}</ThemedText>
    </ThemedButton>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
  disabled: {
    backgroundColor: "#d3d3d3",
  },
});

export default CustomButton;
