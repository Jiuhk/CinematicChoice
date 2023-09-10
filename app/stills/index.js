import { SafeAreaView, ImageBackground, FlatList } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

import { COLORS, icons, images } from "../../constants";
import { ScreenHeaderBtn, StillsContainer, VoteFooter } from "../../components";

const Stills = () => {
  const router = useRouter();
  const dummyData = [ 
    "stills1",
    "stills2",
    "stills3",
    "stills4"
  ]

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
         <FlatList
          data={dummyData}
          renderItem={({ item }) => (
            <StillsContainer
              image={item}
            />
          )
          }
          keyExtractor={(item) => item}
        />
        <VoteFooter />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Stills;
