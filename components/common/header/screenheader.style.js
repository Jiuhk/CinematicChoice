import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 30,
    marginBottom: 0,
    marginHorizontal: 10,
    width: 60,
    height: 60,
    backgroundColor: COLORS.white,
    // borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    // borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;