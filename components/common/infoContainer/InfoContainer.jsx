import { ScrollView, Text } from "react-native";

import styles from "./infocontainer.style";

const InfoContainer = ( ) => {
    return (
        <ScrollView style={styles.infoContainer} >
            <Text style={styles.topicText}>The film is about the erotic, electric connection between women when they find their desire for creative experience fulfilled in each other, but it is equally about the powers of art to validate, preserve, and console after a romance is over.</Text>
            <Text style={styles.infoText}>“Portrait of a Lady on Fire” is a spell-binding, heartbreakingly beautiful lesbian romance that examines the connection between an artist and their muse. Once the relationship between painter and subject turns passionate, only then can Marianne capture Héloïse’s likeness on canvas. In addition to its exploration of love and art, the film also is an interesting look at female friendship and the plight of women in eighteenth-century France. With gorgeous cinematography, a beautiful script that shows off the French language at its very best, and great performances, Céline Sciamma’s new film is easily one of the best of the year. </Text>
        </ScrollView>

    )
}

export default InfoContainer;