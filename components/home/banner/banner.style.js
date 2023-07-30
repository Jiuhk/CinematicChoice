import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, images } from "../../../constants";

const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: SIZES.large,
    width: "100%",
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.grey,
  },
  background: {
    flex: 1,
    // justifyContent: 'center',
  },
  bigTitle: {
    fontFamily: FONT.keaniaOne,
    marginVertical: -10,
    // backgroundColor: COLORS.grey,
    fontSize: SIZES.huge,
    color: COLORS.tertiary,
  },
  smallTitle: {
    fontFamily: FONT.jacquesFrancois,
    fontSize: SIZES.medium,
    color: COLORS.tertiary,
    marginTop: 2,
  },
  filmTitleBig: {
    paddingTop: 80,
    marginBottom: -55,
    fontFamily: FONT.italianno,
    fontSize: 80,
    color: COLORS.white,
    marginTop: 2,
  },
  filmTitleSmall: {
    fontFamily: FONT.italianno,
    fontSize: SIZES.xxxLarge,
    color: COLORS.white,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
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