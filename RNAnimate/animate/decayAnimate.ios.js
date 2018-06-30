import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

export default class RNDecayAnimate extends Component {
  constructor() {
    super()
    this.state = {
      decayAnimateWidth: new Animated.Value(0),
      decayAnimateHeight: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.decay(
      this.state.decayAnimateWidth,
      {
        // toValue: 150,
        velocity: 1,
      }
    ).start();

    Animated.decay(
      this.state.decayAnimateHeight,
      {
        // toValue: 40,
        velocity: 1,
      }
    ).start()
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Animated.View style={{
          backgroundColor: "red",
          width: this.state.decayAnimateWidth,
          height: this.state.decayAnimateHeight
        }} />
      </View>
    );
  }
}
