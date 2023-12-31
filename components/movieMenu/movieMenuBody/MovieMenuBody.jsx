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
          <MenuItem route={"/trailer"} title={"trailer"}/>
          <MenuItem route={"/stills"} title={"stills"}/>
          <MenuItem route={"/soundtrack"} title={"soundtrack"}/>
          <MenuItem route={"/review"} title={"review"}/>
          <VoteCount vote="40"/>
        </View>
  );
};

export default MenuBody;