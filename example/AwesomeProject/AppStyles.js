import { StyleSheet } from 'react-native';
// https://facebook.github.io/react-native/docs/layout-props

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCBB',
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
    }
});

export default styles;