import { SafeAreaView, ImageBackground } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

import { COLORS, icons, images } from "../../constants";
import { ScreenHeaderBtn, MovieMenuBody, MovieMenuFooter } from "../../components";

const MovieMenu = () => {
  const params = useSearchParams();
  const router = useRouter()
  const id = params.id;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ImageBackground source={images[`moviemenu${id}`]} resizeMode="cover" style={{flex: 1}}>
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
        <MovieMenuBody />
        <MovieMenuFooter />
      </ImageBackground>
    </SafeAreaView >
  );
};

export default MovieMenu;