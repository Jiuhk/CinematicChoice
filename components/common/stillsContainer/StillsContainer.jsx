import { ScrollView, SeparateMovieContainer } from "react-native";
import { images } from "../../../constants";

import styles from "./stillscontainer.styles"


const StillsContainer = ( ) => {
    return (
        <ScrollView style={styles.reviewContainer} >
            <SeparateMovieContainer/>
            <SeparateMovieContainer/>
            <SeparateMovieContainer/>
            <SeparateMovieContainer/>
        </ScrollView>

    )
}

export default StillsContainer;