import { FC, ReactNode } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  ViewStyle,
} from "react-native";
import { StyleSheet } from "react-native";

const pressableColorClasses = (pressed: boolean) =>
  StyleSheet.create({
    primary: {
      backgroundColor: pressed ? "#0260ed" : "#0165ff",
    },
    secondary: {
      backgroundColor: pressed ? "#e6eaeb" : "#f1f5f6",
    },
  });

const textColorClasses = StyleSheet.create({
  primary: {
    color: "#ffffff",
    fontWeight: "500",
  },
  secondary: {
    color: "#000000",
  },
});

export interface ButtonProps extends PressableProps {
  color?: keyof ReturnType<typeof pressableColorClasses>;
  children?: ReactNode;
  style: StyleProp<ViewStyle>;
}

export const Button: FC<ButtonProps> = ({
  children,
  style,
  color = "primary",
  ...props
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          paddingVertical: 12,
          borderRadius: 8,
          justifyContent: "center",
          flexDirection: "row",
          ...pressableColorClasses(pressed)[color],
        },
        style,
      ]}
      {...props}
    >
      <Text
        style={{
          fontSize: 16,
          ...textColorClasses[color],
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
};
