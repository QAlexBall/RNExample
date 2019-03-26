import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import styles from "./ReduxImageComponentStyle";
import { connect } from 'react-redux';
import * as Actions from "../../Redux/ReduxTutorialRedux"

class ImageComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {log:""};
        console.log("@11" + this.props.imageSource);
    }

    componentDidMount() {
    }

  
    UNSAFE_componentWillReceiveProps(nextProps)
    {
        console.log("@20 will receive props.")
    }

    // //shouldComponentUpdate() ->componentWillUpdate() -> render()-> componentDidUpdate()
    shouldComponentUpdate(nextProps)
    {
        // don't setState here! Because it will trigger update death loop.
        console.log(nextProps);
        return true;
    }

    UNSAFE_componentWillUpdate()
    {
        // don't setState here! Because it will trigger update death loop.
        console.log("@33 will update component.");
    }

    componentDidUpdate()
    {
        console.log("@40 did update component.");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Here is a image component</Text>
                <Image style={styles.coverImage} source={this.props.image}/>
                <Text style={styles.welcome}>{this.state.log}</Text>
        
                <Button
                    onPress={this.props.changeParentComponent}
                    title="Change Parent Component"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}


const mapStateToProps = (state) => ({
    image:state.imageLink
})

const mapDispatchToProps = (dispatch) => ({
    changeParentComponent: () => dispatch({ type: Actions.CHANGE_REDUX_CLICK_BUTTON })
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageComponent);