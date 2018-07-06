import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

export default class RNTimingLinearComponent extends Component {
  constructor() {
    super()

    this.state = {
      animateValue: new Animated.Value(0),
    }

    this._startAnimate = this.startAnimate.bind(this)
  }

  componentDidMount() {
    this._startAnimate()
  }

  startAnimate() {
      // this.state.animateValue.setValue(0)
      Animated.timing(
          this.state.animateValue,
          {
              toValue: 1,
              duration: 2500,
              easing: Easing.Linear,
          }
      ).start(() => {
          // this._startAnimate()
      })
  }

  render() {
    return (
      <Animated.View style={{
        backgroundColor: "red",
        width: this.state.animateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 150]
        }),
        height: this.state.animateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 40]
        }),
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text style={{
        flex: 1,
        textAlign: "center",
          color:"white"
      }}>linear</Text>
      </Animated.View>
    );
  }
}
