const COLORS = {
    primary: "#49D7D4",
    secondary: "#D3467C",
    tertiary: "#194648",

    black: "#171616",
    white: "#FFF6F6",
    grey: "rgba(217, 217, 217, 0.05)",

    lightSecondary: "rgba(211, 46, 124, 0.8)",
    greyer: "rgba(217, 217, 217, 0.4)",
};

const FONT = {
    jacquesFrancois: "jacquesFrancois",
    keaniaOne: "keaniaOne",
    italianno: "italianno",
}

const SIZES = {
    xxSmall: 4,
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 28,
    xxxLarge: 32,
    xxxxLarge: 40,
    big: 50,
    huge: 56,
};

const LENGTH = {
    short: 150,
    midshort: 200,
    medium: 250,
    long: 300,
}

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};

export { COLORS, FONT, SIZES, SHADOWS, LENGTH };