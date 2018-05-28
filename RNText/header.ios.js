import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//组件
var Header = React.createClass({
  render: function() {
    return (
        <View style={headerStyle.flex}>
          <Text style={headerStyle.font}>
            <Text style={headerStyle.font_1}>网易</Text>
            <Text style={headerStyle.font_2}>新闻</Text>
            <Text style={headerStyle.font_1}>有态度</Text>
          </Text>
        </View>
    );
  }
});

//样式
var headerStyle = StyleSheet.create({
  flex: {
    marginTop: 25,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ef2d36",
    alignItems: "center",
  },
  font: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  font_1: {
    color: "#cd1d1c"
  },
  font_2: {
    color: "#ffffff",
    backgroundColor: "#cd1d1c"
  }
});

//导出模块
module.exports = Header;
