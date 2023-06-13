import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContextProvider, useUserContext } from "./UserContext";
import { LoginScreen } from "./screens/LoginScreen";
import { HomeScreen } from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <UserContextProvider>
      <LoginScreen />
      {/* <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer> */}
    </UserContextProvider>
  );
};

const AuthNavigator: FC = () => {
  const { user } = useUserContext();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user !== null ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default App;
