import { SafeAreaView, ImageBackground, FlatList } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

import { COLORS, icons, images, SIZES } from "../../constants";
import { ScreenHeaderBtn, MovieContainer, VoteFooter } from "../../components";

const Movielist = () => {
  const router = useRouter();
  const dummyData = [
    {
      "title": "Portrait of a Lady on Fire",
      "id": "1",
      "image": "thumbnail1",
      "vote": 80,
    },
    {
      "title": "Petite Maman",
      "id": "2",
      "image": "thumbnail2",
      "vote": 20,
    },
    {
      "title": "The Banshhees of Inisherin",
      "id": "3",
      "image": "thumbnail3",
      "vote": 70,
    },
    {
      "title": "Ladybird",
      "id": "4",
      "image": "thumbnail4",
      "vote": 40,
    }]

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
            <MovieContainer
              title={item.title}
              id={item.id}
              image={item.image}
              vote={item.vote}
            />
          )
          }
          keyExtractor={(item) => item.id}
        />
        <VoteFooter />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Movielist;