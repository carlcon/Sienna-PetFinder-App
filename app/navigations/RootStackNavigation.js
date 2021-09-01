import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import TabNavigator from "./TabNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";

import { moderateScale, scale } from "../shared/scaling_utils";

const RootStack = createNativeStackNavigator();

const RootStackNavigation = (props) => {
  return (
    <RootStack.Navigator screenOptions={{ screenOptionStyle }}>
      <RootStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ screenOptionStyle }}
      />
      <RootStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ screenOptionStyle }}
      />
      <RootStack.Screen name="Home" component={TabNavigator} />

      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ screenOptionStyle }}
      />
    </RootStack.Navigator>
  );
};

const screenOptionStyle = {
  headerBackTitle: () => null,
  headerBackImage: () => (
    <Ionicons name="md-arrow-back" size={moderateScale(20)} color={"black"} />
  ),
  headerLeftContainerStyle: {
    left: Platform.OS === "ios" ? scale(20) : scale(10),
  },

  // headerTintColor: color.text3,
  headerTitleStyle: {
    // color: color.text2,
    fontSize: moderateScale(16),
    // fontFamily: "Avenir Next Bold",
  },
  headerTransparent: true,
  headerTitle: "",
  headerTitleAlign: "center",
};

const screenOptionStyle2 = {
  headerTitleStyle: {
    // color: color.text2,
    fontSize: moderateScale(16),
    // fontFamily: "Avenir Next Bold",
  },
  headerTransparent: true,
  // headerBackground: () => (
  //   <LinearGradient
  //     style={StyleSheet.absoluteFill}
  //     colors={[color.background1, color.background2]}
  //     start={[1, 0]}
  //     end={[0, 1]}
  //   />
  // ),
};

export default RootStackNavigation;

const styles = StyleSheet.create({});
