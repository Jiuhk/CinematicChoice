import { View, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons } from "../constants";
import { Banner, ScreenHeaderBtn } from "../components";

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white},
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
                            handlePress={() => router.push("/appMenu")}
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


