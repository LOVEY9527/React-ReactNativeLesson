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
  TextInput,
  TouchableOpacity
} from 'react-native';

var RNTextInput = React.createClass({
  getInitialState: function() {
    return {
      inputText: " "
    };
  },
  //输入框的onChange实现
  getContent: function(text) {
    this.setState({
      inputText: text
    });
  },
  clickBtn: function() {
    alert(this.state.inputText);
  },
  render: function() {
    return (
      <View style={touchableStyle.container}>
        <View style={touchableStyle.flex}>
          <TextInput
            style={touchableStyle.input}
            returnKeyType="search"
            placeholder="请输入内容"
            onChangeText={this.getContent} />
        </View>
        <TouchableOpacity style={touchableStyle.btn} onPress={this.clickBtn}>
          <Text style={touchableStyle.search_Title}>搜索</Text>
        </TouchableOpacity>
      </View>
    );
  }
})

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

AppRegistry.registerComponent('RNTextInput', () => RNTextInput);
