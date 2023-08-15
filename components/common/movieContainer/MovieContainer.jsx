import { ScrollView, SeparateMovieContainer } from "react-native";
import { images } from "../../../constants";

import styles from "./moviecontainer.styles"
import SeparateMovieContainer from "../separateMovieContainer/separateMovieContainer";

const MovieContainer = ( ) => {
    return (
        <ScrollView style={styles.reviewContainer} >
            <SeparateMovieContainer/>
        </ScrollView>

    )
}

export default MovieContainer;