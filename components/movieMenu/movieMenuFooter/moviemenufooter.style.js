import { StyleSheet } from "react-native";

import { COLORS, FONT, LENGTH, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0,
    padding: SIZES.small,
    justifyContent: "space-between",
    alignItems: "center",
    gap: SIZES.small,
  },
  signUpBtn: {
    height: SIZES.big,
    width: LENGTH.short,
    borderWidth: 3,
    borderColor: COLORS.white,
    borderRadius: SIZES.xLarge,
    paddingVertical: SIZES.xxSmall,
    paddingHorizontal: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    fontFamily: FONT.jacquesFrancois,
  },
  logInBtn: {
    height: SIZES.big,
    width: LENGTH.short,
    borderColor: COLORS.primary,
    borderRadius: SIZES.xLarge,
    paddingHorizontal: SIZES.small,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logInText: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    fontFamily: FONT.jacquesFrancois,
  }
});

export default styles;