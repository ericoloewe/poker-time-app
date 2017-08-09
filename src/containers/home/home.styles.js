import {
    Dimensions
} from 'react-native';

let {
    width
} = Dimensions.get("window");

const styles = ({
    content_cards: {
        position: "absolute",
        width: 368 * 0.5,
        height: 251 * 0.5,
        top: 0,
        right: 0
    },
    content_cards_image: {
        position: "absolute",
        width: 368 * 0.5,
        height: 251 * 0.5,
        top: 0,
        right: 0
    },
    content_image: {
        height: 125,
        width: width - 30,
        resizeMode: 'contain'
    },
    content_coin: {
        marginTop: -30,
        height: 175,
        alignItems: "center",
    },
    content_coin_touchable: {
        width: 125,
        height: 125,
        elevation: 10,
        borderRadius: 65
    },
    content_coin_touchable_image: {
        width: 125,
        height: 125,
        resizeMode: 'contain'
    },
    content_links: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: -50
    },
    content_buttons: {
        flex: 1,
        alignSelf: "center",
        flexDirection: "column",
        paddingTop: 70
    },
    content_buttons_col: {
        alignItems: "center",
        paddingBottom: 20
    },
    content_buttons_button: {
        width: 200,
        marginTop: 5,
        marginBottom: 5
    },
    content_buttons_button_text: {
        textAlign: "center"
    },
    content_animations: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    content_animations_coin: {
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 125,
        resizeMode: 'contain',
    },
    content_animations_coin_character: {
        justifyContent: "center",
        alignItems: "center",
        width: 35,
        marginTop: -18,
        resizeMode: 'contain'
    }
});

export {
    styles
};