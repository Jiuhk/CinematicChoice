import { SafeAreaView, ImageBackground } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

import { COLORS, icons, images } from "../../constants";
import { ScreenHeaderBtn, MovieContainer, VoteFooter } from "../../components";

const Movielist = () => {
  const router = useRouter()

  return ( 
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ImageBackground
        source={images.stills}
        resizeMode="cover"
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
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
        <MovieContainer />
        <VoteFooter />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Movielist;