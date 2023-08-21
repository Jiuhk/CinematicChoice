import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, LENGTH, HEIGHT } from "../../../constants";

const styles = StyleSheet.create({
  movieContainer:{
    marginTop: SIZES.large,
  },
  titleContainer: {
    width: LENGTH.long,
    height: SIZES.big,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    paddingLeft: SIZES.small,
  },
  titleText: {
    fontFamily: FONT.jacquesFrancois,
    color: COLORS.white,
    fontSize: SIZES.large,
  },
  imageContainer: {
    width: LENGTH.long,
    height: 100,
  },
  image: {
    height: HEIGHT.xTiny,
  }
});

export default styles;