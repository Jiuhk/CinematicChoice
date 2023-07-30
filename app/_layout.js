import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        keaniaOne: require("../assets/fonts/KeaniaOne-Regular.ttf"),
        jacquesFrancois: require("../assets/fonts/JacquesFrancois-Regular.ttf"),
        italianno: require("../assets/fonts/Italianno-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack onLayout={onLayoutRootView}/>
    )
}

export default Layout;