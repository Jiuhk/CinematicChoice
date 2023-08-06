import { View } from "react-native";
import { useRouter } from "expo-router";

import MenuItem from "../../common/menuItem/MenuItem";
import VoteCount from "./voteCount/VoteCount";
import styles from "./moviemenubody.style";

const MenuBody = () => {
  const router = useRouter();

  return (
        <View
          style={styles.appMenuContainer}
        >
          <MenuItem route={"/sypnosis"} title={"sypnosis"}/>
          <MenuItem route={"/"} title={"trailer"}/>
          <MenuItem route={"/"} title={"stills"}/>
          <MenuItem route={"/"} title={"soundtrack"}/>
          <MenuItem route={"/"} title={"review"}/>
          <VoteCount vote="40"/>
        </View>
  );
};

export default MenuBody;