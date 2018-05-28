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
  View
} from 'react-native';

/*
  常用特性
  onPress:手指触摸事件
  numberOfLines:显示多少行

  可以设置字体颜色，大小，对齐方式等
*/

var RNText = React.createClass({
  render: function() {
    return (
        <View style={flex:1}>
          
        </View>
    );
  }
});

AppRegistry.registerComponent('RNText', () => RNText);
