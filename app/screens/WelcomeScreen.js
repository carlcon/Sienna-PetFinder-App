import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from "../shared/scaling_utils";

// import CustomButton from "../components/CustomButton";

const WelcomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/adaptive-icon.png")}
        />
      </View>
      <CustomButton
        style={styles.loginBtn}
        text="Login"
        onPress={() => props.navigation.navigate("Login")}
      />
      <CustomButton
        style={styles.registerBtn}
        text="Register"
        onPress={() => props.navigation.navigate("Register")}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginBtn: {
    backgroundColor: "#23313F",
  },
  registerBtn: {
    marginTop: verticalScale(24),
    marginBottom: verticalScale(54),
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    resizeMode: "contain",
    height: moderateScale(100),
    width: moderateScale(90),
  },
});
