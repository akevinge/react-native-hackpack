import { FC, ReactNode, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

export interface InputProps extends TextInputProps {
  icon?: (focused: boolean) => ReactNode;
}

export const Input: FC<InputProps> = ({ style, icon, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return icon ? (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        width: "100%",
      }}
    >
      {icon(isFocused)}
      <InnerInput
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{ alignSelf: "center", flex: 1 }}
        focused={isFocused}
      />
    </View>
  ) : (
    <InnerInput {...props} />
  );
};

const InnerInput: FC<TextInputProps & { focused?: boolean }> = ({
  focused,
  style,
  ...props
}) => (
  <TextInput
    style={[
      {
        borderBottomColor: focused ? "#000000" : "#e3e3e6",
        paddingBottom: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      style,
    ]}
    {...props}
  />
);
