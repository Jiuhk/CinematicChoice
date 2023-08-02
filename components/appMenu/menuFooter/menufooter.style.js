import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

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
  highlightBtn: {
    height: 50,
    width: 150,
    borderWidth: 3,
    borderColor: COLORS.white,
    borderRadius: SIZES.xLarge,
    paddingVertical: SIZES.xxSmall,
    paddingHorizontal: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  hightlightText: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    fontFamily: FONT.jacquesFrancois,
  },
  voteBtn: {
    height: 50,
    width: 150,
    borderColor: COLORS.primary,
    borderRadius: SIZES.xLarge,
    paddingHorizontal: SIZES.small,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  voteText: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    fontFamily: FONT.jacquesFrancois,
  },
  arrowBtn: {
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  downarrow: {
    width: 20,
    height: 20,
  }
});

export default styles;