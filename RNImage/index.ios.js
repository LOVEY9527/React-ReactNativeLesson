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
  Image
} from 'react-native';

var RNImage = React.createClass({
  render: function() {
    return (
      <View style={imageStyle.container}>
        <View style={imageStyle.net}>
          <Image
            style={imageStyle.netImage}
            source={{uri:"http://g.hiphotos.baidu.com/image/pic/item/00e93901213fb80eb52cf0453ad12f2eb83894a7.jpg"}}
          />
        </View>
        <View style={imageStyle.local}>
          <Image
            style={imageStyle.localImage}
            // source={require("image!homeEhelperCommodityWholesaleIcon")}
            // source={{uri:"pic_bg"}}
            source={require('./RN控件生命周期.jpeg')}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  }
});

var imageStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    alignItems: "center"
  },
  net: {
    marginTop: 30,
    width: 300,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan"
  },
  netImage: {
    width: 280,
    height: 200,
    backgroundColor: "green",
  },
  local: {
    marginTop: 30,
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  localImage: {
    width: 180,
    height: 180,
    backgroundColor: "gray"
  }
})

AppRegistry.registerComponent('RNImage', () => RNImage);
