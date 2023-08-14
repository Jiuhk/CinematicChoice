import { SafeAreaView, ImageBackground, View, Button } from "react-native";
import React, { useState, useCallback, useRef } from "react";
import { Stack, useRouter } from "expo-router";
import YoutubePlayer from "react-native-youtube-iframe";

import { COLORS, icons, images } from "../../constants";
import { ScreenHeaderBtn, VoteFooter } from "../../components";

const Trailer = () => {
  const router = useRouter()
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ImageBackground
        source={images.sypnosis}
        resizeMode="cover"
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.logo}
                dimension='100%'
                handlePress={() => router.push("/")}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                dimension='75%'
                handlePress={() => router.back()}
              />
            ),
            headerTitle: "",
          }}
        />
        <View>
          <YoutubePlayer
            height={300}
            play={playing}
            videoId={"R-fQPTwma9o"}
            onChangeState={onStateChange}
          />
          <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
        
        <VoteFooter />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Trailer;