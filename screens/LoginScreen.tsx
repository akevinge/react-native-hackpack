import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import EntypoIcon from "@expo/vector-icons/Entypo";
import { Provider, useUserContext } from "../UserContext";
import { FC, useState } from "react";

export const LoginScreen: FC = () => {
  const { setUser } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleProviderLogin = (provider: Provider) =>
    setUser(
      `Username obtained from ${provider}`,
      `Email obtained from ${provider}`,
      provider
    );

  const handleEmailLogin = () =>
    setUser("Username obtained from database", email, null);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/login-image.png")}
        style={{ width: "100%", height: "25%" }}
      />
      <Text
        style={{ fontSize: 25, fontWeight: "600", alignSelf: "flex-start" }}
      >
        Login
      </Text>
      <Input
        onChangeText={setEmail}
        style={{ height: 60 }}
        placeholder="Email"
        autoCorrect={false}
        icon={(focused) => (
          <EntypoIcon
            name="email"
            color={focused ? "#000000" : "#bebec4"}
            size={15}
            style={{ marginTop: 2 }}
          />
        )}
      />
      <Input
        onChangeText={setPassword}
        style={{ height: 60 }}
        placeholder="Password"
        secureTextEntry
        icon={(focused) => (
          <EntypoIcon
            name="lock"
            color={focused ? "#000000" : "#bebec4"}
            size={15}
            style={{ marginTop: 2 }}
          />
        )}
      />
      <Button style={{ width: "100%" }} onPress={() => handleEmailLogin()}>
        Login
      </Button>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#bebec4" }} />
        <View>
          <Text style={{ width: 50, color: "#bebec4", textAlign: "center" }}>
            OR
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#bebec4" }} />
      </View>

      <Button
        style={{ width: "100%" }}
        color="secondary"
        onPress={() => handleProviderLogin("google")}
      >
        <View
          style={{
            flexDirection: "row",
            flexShrink: 1,
            gap: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/google-logo.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text>Google</Text>
        </View>
      </Button>
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
