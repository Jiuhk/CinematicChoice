import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, LENGTH } from "../../../../constants";

const styles = StyleSheet.create({
  progress: (vote) => ({
    width: `${vote}%`,
    height: SIZES.big,
    backgroundColor: COLORS.lightSecondary,
    borderRadius: SIZES.xxxLarge,
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: SIZES.xSmall,
    // textAlign: "left",
  }),
  itemContainer:{
    width: LENGTH.medium,
    height: SIZES.big,
    backgroundColor: COLORS.greyer,
    borderRadius: SIZES.xxxLarge,
    justifyContent: "center",
    // textAlign: "left",
    // alignItems: "right",
    flexDirection: "row",
    justifyContent: 'flex-start',
    marginVertical: SIZES.xSmall,
  },
  appMenuItem: {
    color: COLORS.white,
    fontFamily: FONT.jacquesFrancois,
    fontSize: SIZES.xxLarge,
    // marginVertical: SIZES.small,
  }
});

export default styles;