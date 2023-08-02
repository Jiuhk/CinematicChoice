import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, images } from "../../constants";

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  appMenuContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appMenuItem: {
    color: COLORS.white,
    fontFamily: FONT.jacquesFrancois,
    fontSize: SIZES.xxLarge,
    marginVertical: SIZES.small,
  }
});

export default styles;