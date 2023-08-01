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
  const films = [{
    id: 1,
    title: "Portrait of a Lady on Fire",
    cover: images.background,
  },
  {
    id: 2,
    title: "The Double Life of Veronique",
    cover: images.background2,
  }
]

  const [filmArrayId, setFilmArrayId] = useState(0);
  const [bannerFilm, setBannerFilm] = useState(films[filmArrayId]);

  return (
    <ImageBackground source={bannerFilm.cover} resizeMode="cover" style={styles.background}>
      <View>
          <View style={styles.titleContainer}>
            <Text style={styles.bigTitle}>indie</Text>
            <Text style={styles.smallTitle}>on a big screen</Text>
            <Text style={styles.bigTitle}>films</Text>
            
            <Text style={styles.filmTitle}>{bannerFilm.title}</Text>
          </View>
      </View>
      <BannerFooter 
        pressHighlight={() => router.push("/highlight")}
        pressVote={() => router.push("/vote")}
        pressArrow={() => {
          setFilmArrayId((filmArrayId + 1) % films.length);
          setBannerFilm(films[filmArrayId]);
        }}
      />
    </ImageBackground>
  );
};

export default Banner;