import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// import RITextDemi from "../components/RITextDemi";
// import { color } from "../config/color";
import { moderateVerticalScale, moderateScale } from "../shared/scaling_utils";

export default function CustomButton({
  style,
  onPress,
  ref,
  textStyle,
  text,
  disabled,
  useGradient = false,
  gradientColor1 = "#00DFC7",
  gradientColor2 = "#00DFC7",
  gradientStart = [1, 0],
  gradientEnd = [0, 1],
  activeOpacity = 0.5,
}) {
  const gradient = useGradient ? (
    <LinearGradient
      style={StyleSheet.absoluteFill}
      colors={[gradientColor1, gradientColor2]}
      start={gradientStart}
      end={gradientEnd}
    />
  ) : null;

  return (
    <TouchableOpacity
      style={[styles.primaryBtn, style]}
      activeOpacity={activeOpacity}
      onPress={onPress}
      ref={ref}
      disabled={disabled}
    >
      {gradient}
      <Text style={[styles.primaryBtnText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryBtn: {
    width: "90%",
    backgroundColor: "#00DFC7",
    borderRadius: moderateVerticalScale(8),
    height: moderateVerticalScale(56),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  primaryBtnText: {
    color: "#FFFFFF",
    fontSize: moderateScale(18),
  },
});
