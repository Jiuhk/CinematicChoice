import { SafeAreaView, ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images } from "../../constants";
import { ScreenHeaderBtn, MenuBody, MenuFooter } from "../../components";

const Menu = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ImageBackground source={images.appmenu} resizeMode="cover" style={{flex: 1}}>
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
        <MenuBody />
        <MenuFooter />
      </ImageBackground>
    </SafeAreaView >
  );
};

export default Menu;