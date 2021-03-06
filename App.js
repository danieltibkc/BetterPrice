import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Form1Screen from "./screens/Form1Screen";
import SearchLocationScreen from "./screens/SearchLocationScreen";
import ResultsScreen from "./screens/ResultsScreen";
import Form2Screen from "./screens/Form2Screen";
import { Provider } from "react-redux";
import store from "./store";

const Stack = createNativeStackNavigator();

const LocationStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Form1Location" component={Form1Screen} />
    <Stack.Screen
      name="SearchLocation"
      component={SearchLocationScreen}
      options={{ presentation: "modal" }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Form" component={LocationStack} />
            <Stack.Screen name="Form2" component={Form2Screen} />
            <Stack.Screen name="Results" component={ResultsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
