import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./bannerfooter.style";
import { icons } from "../../../constants";

const Footer = ({ pressHighlight, pressVote, pressArrow }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.highlightBtn}
        onPress={pressHighlight}
      >
        <Text style={styles.hightlightText}>highlight</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.voteBtn}
        onPress={pressVote}
      >
        <Text style={styles.voteText}>vote</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.arrowBtn}
        onPress={pressArrow}
      >
        <Image source={icons.downarrow} resizeMode="contain" style={styles.downarrow} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;