import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./votefooter.style";
import { icons } from "../../../constants";

const Footer = ({ pressHighlight, pressVote, pressArrow }) => {
  return (
    <View style={styles.container}>
    
    <View style={styles.votefooter} >

    <TouchableOpacity
        style={styles.arrowBtn}
        onPress={pressArrow}
      >
        <Image source={icons.arrowleft} resizeMode="contain" style={styles.arrowleft} />
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
        <Image source={icons.arrowright} resizeMode="contain" style={styles.arrowright} />
      </TouchableOpacity>

      </View>

      <View>
      <TouchableOpacity
        style={styles.arrowBtn}
        onPress={pressArrow}
      >
        <Image source={icons.downarrow} resizeMode="contain" style={styles.downarrow} />
      </TouchableOpacity>
    </View>

    </View>
  );
};

export default Footer;