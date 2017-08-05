const styles = {
    button_container: {
        position: 'absolute',
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        bottom: 20,
        right: 20
    },
    button_own: {
        position: 'relative',
        flex: 1,
        width: 56,
        height: 56,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF931E",
        borderRadius: 28,
        elevation: 4,
        shadowRadius: 2,
        shadowOpacity: 0.4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    button_text: {
        fontSize: 30,
        color: "white"
    }
};

export { styles };
