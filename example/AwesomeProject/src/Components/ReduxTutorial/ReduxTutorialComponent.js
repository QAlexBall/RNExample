import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import styles from './ReduxTutorialComponentStyle'
import ImageComponent from './ReduxImageComponent'
import IMAGEMAP from "../../Assets/Images/ImageMap"
import * as Actions from "../../Redux/ReduxTutorialRedux"

class ReduxTutorialComponent extends Component {
    constructor(props) {
        super(props);
    }

    onPressLearnMore = () => {
        this.props.changeButtonText();
    }

    // childCallBack = () => {
    //     newState = {...this.state};
    //     newState["input_text"] = "Image component changed me!";
    //     this.setState(newState);
    //   }
    changeImageInSubComponent = () => {
        if (this.props.imageLink == IMAGEMAP.COVER){
            this.props.changeImageInSubComponent(IMAGEMAP.ALIPAY)
        }else{
            this.props.changeImageInSubComponent(IMAGEMAP.COVER)
        }
    }

    render () {
        return (
            <View styles={styles.container}>
                <Text style={styles.welcome}>This is a Rudex based React Native demo!</Text>
                <Button
                    onPress={this.onPressLearnMore}
                    title={this.props.buttonClickMe}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

                <Button
                    onPress={this.changeImageInSubComponent}
                    title="Change Sub Component"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <ImageComponent />
                <View style={styles.bottomContainer}/>
            </View>

        )
    }
}

const mapStateToProps = (state) => ({
    buttonClickMe: state.buttonClickMe,
    imageLink: state.imageLink
})

const mapDispatchToProps = (dispatch) => ({
    changeButtonText: () => dispatch({ type: Actions.BUTTON_CLICKED }),
    changeImageInSubComponent: (imageLink) => dispatch({ type: Actions.CHANGE_IMAGE, imageLink:imageLink })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTutorialComponent);
