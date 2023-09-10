import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, LENGTH, HEIGHT } from "../../../constants";

const styles = StyleSheet.create({
  modalContainer:{
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginVertical: SIZES.xSmall,
  },
  modalImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  }
});

export default styles;
