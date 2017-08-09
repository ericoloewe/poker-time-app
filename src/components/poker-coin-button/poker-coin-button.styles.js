import { Animated } from 'react-native';

let pokerCoinSize = 70;

const styles = {
    button_container: {
        margin: 4,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "transparent",
        width: pokerCoinSize,
        height: pokerCoinSize
    },
    button_own: {
        position: 'relative',
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: 28,
        elevation: 4,
        shadowRadius: 2,
        shadowOpacity: 0.4,
        shadowColor: "#000",
        zIndex: 7,
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    button_image: {
        width: pokerCoinSize,
        height: pokerCoinSize,
        justifyContent: "center",
        alignItems: "center",
    }
};

export { styles };
