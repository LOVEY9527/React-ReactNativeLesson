import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

import RNTimingInOutComponent from './timingInOutComponent.ios'
import RNTimingOutComponent from './timingOutComponent.ios'
import RNTimingInComponent from './timingInComponent.ios'
import RNTimingLinearComponent from './timingLinearComponent.ios'

export default class RNTimingAnimate extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
      }}>
        <RNTimingInOutComponent />
        <RNTimingOutComponent />
        <RNTimingInComponent />
        <RNTimingLinearComponent />
      </View>
    );
  }
}
