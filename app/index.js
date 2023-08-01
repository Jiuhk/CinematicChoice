import { useState } from "react";
import { View, ScrollView, SafeAreaView, ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons, images } from "../constants";
import { Banner, ScreenHeaderBtn } from "../components";

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.logo} dimension='100%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.menu}
                            dimension='75%'
                            handlePress={() => router.push("/drawer")}
                        />
                    ),
                    headerTitle: "",
                }}
            />
            <View
                style={{
                    flex: 1,
                    padding: SIZES.medium
                }}
            >
                <Banner />
            </View>
        </SafeAreaView>
    );
}

export default Home;