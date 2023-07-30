import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground
} from "react-native";
import { useRouter } from "expo-router";
import BannerFooter from "../bannerFooter/BannerFooter";

import styles from "./banner.style";
import { icons, SIZES, images } from "../../../constants";

const Banner = ({ }) => {
  const router = useRouter();

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={styles.background}>
      <View>
          <View style={styles.titleContainer}>
            <Text style={styles.bigTitle}>indie</Text>
            <Text style={styles.smallTitle}>on a big screen</Text>
            <Text style={styles.bigTitle}>films</Text>
            <Text style={styles.filmTitleBig}>Portrait</Text>
            <Text style={styles.filmTitleSmall}>of a Lady on Fire</Text>
          </View>
      </View>
      <BannerFooter />
    </ImageBackground>
  );
};

export default Banner;