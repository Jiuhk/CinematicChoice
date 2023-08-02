import { View } from "react-native";
import { useRouter } from "expo-router";

import MenuItem from "../menuItem/MenuItem";
import styles from "./menubody.style";

const MenuBody = () => {
  const router = useRouter();

  return (
        <View
          style={styles.appMenuContainer}
        >
          <MenuItem route={"/"} title={"movie list"}/>
          <MenuItem route={"/"} title={"buy votes"}/>
          <MenuItem route={"/"} title={"be members"}/>
          <MenuItem route={"/"} title={"be partners"}/>
          <MenuItem route={"/"} title={"about us"}/>
          <MenuItem route={"/"} title={"contact us"}/>          
          
        </View>
  );
};

export default MenuBody;