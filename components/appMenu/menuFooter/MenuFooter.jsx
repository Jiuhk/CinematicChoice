import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./menufooter.style";
import { icons } from "../../../constants";

const Footer = ({ pressHighlight, pressVote, pressArrow }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.highlightBtn}
        onPress={pressHighlight}
      >
        <Text style={styles.hightlightText}>sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.voteBtn}
        onPress={pressVote}
      >
        <Text style={styles.voteText}>log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;