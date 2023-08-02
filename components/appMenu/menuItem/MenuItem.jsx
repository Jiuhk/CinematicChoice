import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import styles from "./menuitem.style";

const MenuItem = ({ route, title }) => {
    const router = useRouter();

    return (
        <TouchableOpacity onPress={() => router.push({route})}>
            <Text style={styles.appMenuItem}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MenuItem;