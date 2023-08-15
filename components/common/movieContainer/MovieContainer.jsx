import { ScrollView, SeparateMovieContainer } from "react-native";

import styles from "./moviecontainer.style";
import SeparateMovieContainer from "../SeparateMovieContainer";

const MovieContainer = ( ) => {
    return (
        <ScrollView style={styles.reviewContainer} >
            <SeparateMovieContainer/>
        </ScrollView>

    )
}

export default MovieContainer;