import { Animated } from 'react-native';

let pokerCoinSize = 70;

const styles = {
    button_container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "transparent"
    },
    button_own: {
        position: 'relative',
        margin: 4,
        width: pokerCoinSize,
        height: pokerCoinSize,
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
