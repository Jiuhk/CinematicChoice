import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, images } from "../../../constants";

const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: SIZES.large,
    width: "100%",
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
  },
  bigTitle: {
    fontFamily: FONT.keaniaOne,
    marginVertical: -10,
    fontSize: SIZES.huge,
    color: COLORS.tertiary,
  },
  smallTitle: {
    fontFamily: FONT.jacquesFrancois,
    fontSize: SIZES.medium,
    color: COLORS.tertiary,
    marginTop: 2,
  },
  filmTitle: {
    width: "80%",
    paddingTop: 100,
    fontFamily: FONT.italianno,
    fontSize: 70,
    color: COLORS.white,
    marginTop: 20,
    textAlign: "center",
    lineHeight: 60,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;