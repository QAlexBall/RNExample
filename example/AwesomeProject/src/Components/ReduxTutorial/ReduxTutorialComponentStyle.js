import { StyleSheet } from 'react-native';
// https://facebook.github.io/react-native/docs/layout-props

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    nextPage: {
        position: 'absolute',
        right:0,
        marginTop:0,
    },
    bottomContainer: {
        flex: 0,
        height: 30,
        width: 100,
        // backgroundColor: "#222222",
    }
});

export default styles;