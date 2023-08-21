import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./moviecontainer.style";
import { images } from "../../../constants";

import { useRouter } from "expo-router";


const MovieContainer = ({ title, id, image, vote}) => {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.movieContainer} onPress={() => router.push(`/movieMenu/${id}`)}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={images[image]} style={styles.image} />
            </View>
        </TouchableOpacity>

    )
}

export default MovieContainer;