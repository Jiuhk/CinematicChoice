import { SafeAreaView, ImageBackground } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

import { COLORS, icons, images } from "../../constants";
import { ScreenHeaderBtn, InfoContainer } from "../../components";

const Sypnosis = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ImageBackground source={images.sypnosis} resizeMode="cover" style={{flex: 1, alignItems: "center"}}>
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
        <InfoContainer />
      </ImageBackground>
    </SafeAreaView >
  );
};

export default Sypnosis;