/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/*
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
*/

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Alert, Button } from 'react-native';

export class HelloWorldApp extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello, Chris!</Text>
        </View>
    );
  }
}

export class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "auto" }}>
        <Image source={pic} style={{width: 193, height: 110}} />
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View sytle={{alignItems: 'center'}}>
        <Text> Hello, {this.props.name}! </Text>
      </View>
    );
  }
}

export class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Bananas />
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }      
    return (
      <Text> {this.props.text} </Text>
    );
  }
}

/*
 * 一切见面变化都是状态state变化
 * state的修改必须通过setState()方法
 * * this.state.like = 100; // 这样的直接赋值修改无效
 * * setState是一个merge合并操作，只修改指定属性，不影响其他属性
 * * setState是异步操作，修改不会马上生效
 */

export class BlinkApp extends Component {
  render() {
    return (
      <View sytle={styles.instructions}>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Text> sorry, I don't like it! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


export class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}> just red </Text>
        <Text style={styles.bigBlue}> just bigBlue </Text>
        <Text style={[styles.bigBlue, styles.red]}> bigBlue, then red. </Text>
        <Text style={[styles.red, styles.bigBlue]}> red, then bigBlue </Text>
      </View>
    );
  }
}

export class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

/*
 * 弹性（Flex）宽高
 * 在组建样式中使用flex可以使其在可利用的空间中动态地扩张或收缩。
 */
export class FlexDimensionsBasics extends Component {
  render() {
    return (  
      <View style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

export class FlexDirectionBasics extends Component {
  render() {
    return (
      //    <View style={{flex: 1, flexDirection: 'row'}} >
      // <View style={{
      // flex: 1,
      // flexDirection: 'column',
      // justifyContent: 'space-between',
      // }}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch', // alignItems可以决定其子元素沿着次轴的排列方式
      }} >
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

export class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && 'pizza').join(' ')}
        </Text>
      </View>
    );
  }
}


export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK"
            color="#841584"
          />
        </View>
      </View>

    );
  }
}


