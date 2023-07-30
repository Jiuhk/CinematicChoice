import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./bannerfooter.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.highlightBtn}>
        <Text style={styles.hightlightText}>highlight</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.voteBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.voteText}>vote</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icons.downarrow} resizeMode="contain" style={styles.downarrow} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;