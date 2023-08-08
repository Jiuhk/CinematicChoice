import { ScrollView, Text } from "react-native";

import styles from "./reviewcontainer.style";

const ReviewContainer = ( ) => {
    return (
        <ScrollView style={styles.reviewContainer} >
            <Text style={styles.topicText}>“This is not just a story of women wanting each other, this is a story of women wanting to helping each other to survive womanhood. Sciamma petitions for a love that leaves you buoyed, rather than destroyed.”</Text>
            <Text style={styles.infoText}>Portrait Of A Lady On Fire is about a private love language created by two women and the works of art, literature and music that help it to find its fullest expression. The artworks that helped them to intimately know each other become part of their private love language forevermore. Like in Paul Thomas Anderson’s Phantom Thread, which is full of secret messages, only obvious once you know where to find them, this glorious, spare and heartfelt story is about lovers coding their feelings onto worldly things, and the dance of desire that precedes the birth of love. </Text>
        </ScrollView>

    )
}

export default ReviewContainer;