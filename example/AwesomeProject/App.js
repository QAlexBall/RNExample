/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, Button} from 'react-native';
import ImageComponent from './src/Components/ImageComponent';
import ReduxTutorialComponent from './src/Components/ReduxTutorial/ReduxTutorialComponent';
import styles from './AppStyles';
import IMAGEMAP from './src/Assets/Images/ImageMap';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/Redux/ReduxTutorialRedux';
let store = createStore(reducer);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {input_text:"Click me!", imageSource:IMAGEMAP.COVER, showReduxTutorial: false};
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  onPressLearnMore = () => {
    let newState = {...this.state};
    newState["input_text"] = "1231";
    this.setState(newState);
  }

  childCallBack = () => {
    let newState = {...this.state};
    newState["input_text"] = "Image component changed me!";
    this.setState(newState);
  }

  changeSubComponent = () => {
    let newState = {...this.state};
    if (newState.imageSource == IMAGEMAP.ALIPAY) {
        newState.imageSource = IMAGEMAP.COVER;
    } else {
      newState.imageSource = IMAGEMAP.ALIPAY;
    }

    this.setState(newState);
  }

  showReduxTutorial = () => {
    console.log("@79");
    let newState = {...this.state};
    newState["showReduxTurorial"] = true;
    this.setState(newState);
  }

  render() {
    let body = <View></View>;
    
    if (!this.state.showReduxTutorial) {
      
      body = 
      <View>
        <Text style={styles.welecom}>This is a pure React Native demo!</Text>

        <Button 
          onPress={this.onPressLearnMore}
          title={this.state.input_text}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        
        <Button
          onPress={this.changeSubComponent}
          title="Change Sub Component"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <ImageComponent imageSource={this.state.imageSource} callback={this.childCallBack}></ImageComponent>

        <Button
          style={styles.nextPage}
          onPress={this.showReduxTutorial}
          title=">>Redux Tutorial"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    } else {
      body = <Provider store={store} children={<ReduxTutorialComponent />}/>
    }
    return (
      <View style={styles.container}>{body}</View>
    );
  }
}

