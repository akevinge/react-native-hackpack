import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useUserContext } from "../UserContext";

export const HomeScreen: FC = () => {
  const { user } = useUserContext();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "500" }}>
        Replace with real home screen
      </Text>
      <Text>{`Username: ${user?.username}`}</Text>
      <Text>{`Email: ${user?.email}`}</Text>
      <Text>{`Login method: ${
        user?.provider ? user.provider : "email and password"
      }`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    paddingHorizontal: "12%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
