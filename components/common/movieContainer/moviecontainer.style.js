import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, LENGTH, HEIGHT } from "../../../constants";

const styles = StyleSheet.create({
  movieContainer:{
    width: LENGTH.medium,
    height: HEIGHT.tiny,
    borderWidth: 0,
    backgroundColor: COLORS.grey,
    borderRadius: SIZES.xxxLarge,
    marginVertical: HEIGHT.tiny,
    padding: SIZES.medium,
  },
  image: {
    marginVertical: SIZES.xSmall,

  }
});

export default styles;