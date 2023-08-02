import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./moviemenufooter.style";

const MenuFooter = ({ pressSignUp, pressLogIn, pressArrow }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={pressSignUp}
      >
        <Text style={styles.signUpText}>sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logInBtn}
        onPress={pressLogIn}
      >
        <Text style={styles.logInText}>log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuFooter;