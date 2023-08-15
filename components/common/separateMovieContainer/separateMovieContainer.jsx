import { ScrollView, Image } from "react-native";
import { images } from "../../../constants";

import styles from "./moviecontainer.styles"

const SeparateMovieContainer = ( ) => {
    return (
        <ScrollView style={styles.reviewContainer} >
            <Image style={styles.image} source={images.movie1} />
            <Image style={styles.image} source={images.movie2} />
            <Image style={styles.image} source={images.movie3} />
            <Image style={styles.image} source={images.movie4} />
        </ScrollView>

    )
}

export default SeparateMovieContainer;