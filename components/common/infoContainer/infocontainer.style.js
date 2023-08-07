import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, LENGTH, HEIGHT } from "../../../constants";

const styles = StyleSheet.create({
  infoContainer:{
    width: LENGTH.medium,
    height: HEIGHT.tiny,
    borderWidth: 0,
    backgroundColor: COLORS.grey,
    borderRadius: SIZES.xxxLarge,
    marginVertical: HEIGHT.tiny,
    padding: SIZES.medium,
  },
  topicText: {
    color: COLORS.white,
    fontFamily: FONT.jacquesFrancois,
    fontSize: SIZES.large,
    marginBottom: SIZES.xLarge,
  },
  infoText: {
    color: COLORS.white,
    fontFamily: FONT.jacquesFrancois,
    fontSize: SIZES.medium,
  }
});

export default styles;