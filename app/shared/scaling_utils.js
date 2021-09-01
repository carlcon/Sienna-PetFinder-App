import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

//Guideline sizes are based on standard iphone 8
// const guidelineBaseWidth = 375;
// const guidelineBaseHeight = 667;

//Guideline sizes are based on iPhone 11, iPhone XR
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

//Guideline sizes are based on iPhone 12
// const guidelineBaseWidth = 390;
// const guidelineBaseHeight = 844;

//Guideline sizes are based on iPhone 6 and 7 plus
// const guidelineBaseWidth = 414;
// const guidelineBaseHeight = 736;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  width,
  height,
};
