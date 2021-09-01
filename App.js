import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigation from "./app/navigations/RootStackNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Avenir Next Bold": require("./app/assets/fonts/AvenirNextLTPro-Bold.otf"),
    "Avenir Next Demi": require("./app/assets/fonts/AvenirNext-Demi.otf"),
    "Avenir Next It": require("./app/assets/fonts/AvenirNextLTPro-It.otf"),
    "Avenir Next Reg": require("./app/assets/fonts/AvenirNextLTPro-Regular.otf"),
    "Caveat Reg": require("./app/assets/fonts/Caveat-Regular.ttf"),
  });
  console.log(fontsLoaded);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar
          translucent={true}
          backgroundColor="#00000000"
          barStyle="light-content"
        />
        <NavigationContainer>
          <RootStackNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
