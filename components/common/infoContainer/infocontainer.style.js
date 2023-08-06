import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, LENGTH } from "../../../constants";

const styles = StyleSheet.create({
  infoContainer:{
    flex: 1,
    width: LENGTH.medium,
    height: SIZES.medium,
    borderWidth: 0,
    backgroundColor: COLORS.grey,
    borderRadius: SIZES.xxxLarge,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.xSmall,
  },
  infoText: {
    color: COLORS.white,
    fontFamily: FONT.jacquesFrancois,
    fontSize: SIZES.xxLarge,
    // marginVertical: SIZES.small,
  }
});

export default styles;