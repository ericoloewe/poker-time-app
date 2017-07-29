import {
    Dimensions
} from "react-native";

const {
    height: screenHeight
} = Dimensions.get('window');

const styles = ({
    content: {
        paddingTop: 20
    },
    button: {
        zIndex: 10,
        transform: [{
            scale: 2,
        }, {
            translateY: 150
        }]
    },
    buttonRow: {
        height: 300
    },
    buttonCol: {
        alignItems: "center"
    },
    card: {
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        transform: [{
            translateY: -50
        }]
    },
    cardsCol: {
        alignItems: "center"
    }
});

export {
    styles
};