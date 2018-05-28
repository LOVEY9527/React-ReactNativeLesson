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

//引入
var Header = require("./header")
var News = require("./news")

var RNText = React.createClass({
  render: function() {
    var news = ["1.123123123123123123123123123123123123123123123123123",
                "2.456456456456456456456456456456",
                "3.789789789789",
                "4.987987987987987987987987987987987987987987987987987987987987987987987987987987987",
                 "5.654654654654654654"];
    return (
        <View style={{flex:1}}>
          <Header></Header>
          <News news={news}></News>
        </View>
    );
  }
});

AppRegistry.registerComponent('RNText', () => RNText);
