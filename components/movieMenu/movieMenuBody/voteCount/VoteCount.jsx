import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import styles from "./votecount.style";

const VoteCount = ({ vote }) => {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => router.push({route})}>
            <TouchableOpacity style={styles.progress(vote)} >
                            <Text style={styles.appMenuItem}>{vote > 60? `${vote}% votes` : vote > 30? `${vote}%`: ""}</Text>
            </TouchableOpacity>
            {vote < 65? <View style={{flex:1, alignContent:"center", alignItems: "center", justifyContent: "center",width:"100%"}}><Text style={styles.appMenuItem}>{100 - vote}%</Text></View>: null}
        </TouchableOpacity>
    )
}

export default VoteCount;