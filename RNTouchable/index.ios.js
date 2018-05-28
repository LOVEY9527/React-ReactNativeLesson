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
  TouchableHighlight
} from 'react-native';

/*
  RN提供了3个组件用于给其他没有触摸事件的组件绑定触摸事件
  1.TouchableOpacity:透明触摸，点击时，组件会出现透明的过渡效果
  2.TouchableHighlight:高亮触摸，点击时，组件会出现高亮效果
  3.TouchableWithoutFeedback:无反馈性触摸，点击时，组件无视觉变化
  使用时需要导入组件
*/
var RNTouchable = React.createClass({
  clickBtn: function() {
    alert("点击搜索按钮")
  },
  render: function() {
    return (
      <View style={touchableStyle.container}>
        <View style={touchableStyle.flex}>
          <View style={touchableStyle.input}></View>
        </View>
        <TouchableHighlight style={touchableStyle.btn} onPress={this.clickBtn}>
          <Text style={touchableStyle.search_Title}>搜索</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var touchableStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 45,
    marginTop: 25,
  },
  flex: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft:5,
    paddingLeft: 5,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  btn: {
    width: 55,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#23beff",
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  search_Title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  }
});

AppRegistry.registerComponent('RNTouchable', () => RNTouchable);
