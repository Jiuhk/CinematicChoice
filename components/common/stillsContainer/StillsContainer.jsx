import { ScrollView, View, Image, Modal, TouchableOpacity } from "react-native";
import { images } from "../../../constants";
import { useState } from "react";

import styles from "./stillscontainer.style";

const StillsContainer = ({ image }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <TouchableOpacity onPress={() => { setIsModalVisible(!isModalVisible) }}>
            <Image style={styles.image} source={images[image]} />
            <Modal visible={isModalVisible} transparent={false} animationType="slide">
                <TouchableOpacity onPress={() => { setIsModalVisible(!isModalVisible) }}  style={styles.modalContainer}>
                    <Image style={styles.modalImage} source={images[image]} />
                </TouchableOpacity>
            </Modal>
        </TouchableOpacity>
    )
}

export default StillsContainer;
