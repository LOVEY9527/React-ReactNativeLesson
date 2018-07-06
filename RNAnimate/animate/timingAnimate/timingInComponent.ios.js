import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

export default class RNTimingInComponent extends Component {
  constructor() {
    super()

    this.state = {
          timingAnimateWidthStart: new Animated.Value(0), //宽度动画开始值
          timingAnimateHeightStart: new Animated.Value(0), //高度动画开始值
      }
  }

  componentDidMount() {
    Animated.timing(
      this.state.timingAnimateWidthStart,
      {
        toValue: 150,
        duration: 2500, //动画的持续时间（毫秒）。默认值为500.
        easing: Easing.in(Easing.ease),
        // delay: 0, //开始动画前的延迟时间（毫秒）。默认为0.
        // useNativeDriver: false, //使用原生动画驱动。默认不启用(false)。
      }
    ).start()

    Animated.timing(
      this.state.timingAnimateHeightStart,
      {
        toValue: 40,
        duration: 2500,
        easing: Easing.in(Easing.ease),
      }
    ).start()
  }

  render() {
    return (
      <Animated.View style={{
        backgroundColor: "red",
        width: this.state.timingAnimateWidthStart,
        height: this.state.timingAnimateHeightStart,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{
          flex: 1,
          textAlign: "center",
            color:"white"
        }}>in</Text>
      </Animated.View>
    );
  }
}
