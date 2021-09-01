import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/MapScreen";
import PetScreen from "../screens/PetScreen";
import NotificationScreen from "../screens/NotificationScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
    });
  }, [props.navigation]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Pet" component={PetScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
