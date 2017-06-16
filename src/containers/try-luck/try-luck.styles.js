import { Dimensions } from "react-native";

const {height: screenHeight} = Dimensions.get('window');

const styles = ({
	table: {
		backgroundColor: "#49A077"
	},
    table_contentContainer: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    button: {
        flex: 1,
        position: "absolute"
    },
    card: {
        flex: 1,
        position: "absolute",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    }
});

export { styles };
