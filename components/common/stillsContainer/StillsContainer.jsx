import { ScrollView, Image } from "react-native";
import { images } from "../../../constants";

import styles from "./stillscontainer.style";

const StillsContainer = ( ) => {
    return (
        <ScrollView style={styles.reviewContainer} >
            <Image style={styles.image} source={images.stills1} />
            <Image style={styles.image} source={images.stills2} />
            <Image style={styles.image} source={images.stills3} />
            <Image style={styles.image} source={images.stills4} />
        </ScrollView>

    )
}

export default StillsContainer;