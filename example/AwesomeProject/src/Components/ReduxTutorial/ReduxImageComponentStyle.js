import {StyleSheet} from 'react-native';
// https://facebook.github.io/react-native/docs/layout-props
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffCCDD',
        paddingTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    coverImage: {
        height: 200,
        width: 200,
    },
});

export default styles;