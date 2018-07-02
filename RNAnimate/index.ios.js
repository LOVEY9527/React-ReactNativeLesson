/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

import RNTimingAnimate from './animate/timingAnimate/timingAnimate.ios';
import RNSpringAnimate from './animate/springAnimate.ios';
import RNDecayAnimate from './animate/decayAnimate.ios';
import RNListAnimateHome from './animate/listAnimate/listAnimateHome.ios';
import RNAnimatebleHome from './animate/reactNativeAnimatable/reactNativeAnimatableHome.ios'

class RNAnimate extends Component {
  render() {
    return (
      <NavigatorIOS style={{flex: 1}}
      initialRoute={{
        component: RNRootView,
        title: "动画类型"
      }}/>
    );
  }
}

class RNRootView extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <View style={{width: 150, height: 300, justifyContent: "space-between"}}>
          <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(0)}>
            <Text>timing动画</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(1)}>
            <Text>spring动画</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(2)}>
            <Text>decay动画</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(3)}>
                <Text>List动画</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(4)}>
                <Text>react-native-animatable</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }

  onClick(clickIndex) {
    if (clickIndex === 0) {
      this.props.navigator.push({
        component: RNTimingAnimate,
        title: "timing",
      })
    } else if(clickIndex === 1){
      this.props.navigator.push({
        component: RNSpringAnimate,
        title: "spring",
      })
    }else if(clickIndex === 2){
      this.props.navigator.push({
        component: RNDecayAnimate,
        title: "decay",
      })
    }else if(clickIndex === 3){
      this.props.navigator.push({
          component: RNListAnimateHome,
          title: "list",
      })
    }else if (clickIndex === 4){
      this.props.navigator.push({
          component: RNAnimatebleHome,
          title: "react-native-animatable",
      })
    }
  }
}

var styles = StyleSheet.create({
  touchableOpacityStyles: {
    backgroundColor: "lightgray",
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  }
})

AppRegistry.registerComponent('RNAnimate', () => RNAnimate);
