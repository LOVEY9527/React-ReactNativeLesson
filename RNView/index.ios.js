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
  在web开发中，div是最重要的元素，是页面布局的基础
  在RN开发中，View组件类似于div，是最基本的组件，可以看作是容器组件
*/

var RNView = React.createClass({
  render: function(){
    return (
      <View style={[styles.container, styles.flex]}>
        <View style={styles.item}>
          <View style={[styles.flex, styles.center]}>
            <Text>酒店</Text>
          </View>
          <View style={[styles.flex, styles.lineLeftRight]}>
            <View style={[styles.flex, styles.center, styles.lineCenter]}>
              <Text>海外酒店</Text>
            </View>
            <View style={[styles.flex, styles.center]}>
              <Text>特价酒店</Text>
            </View>
          </View>
          <View style={styles.flex}>
            <View style={[styles.flex, styles.center, styles.lineCenter]}>
              <Text>团购</Text>
            </View>
            <View style={[styles.flex, styles.center]}>
              <Text>民宿.酒店</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#F2F2F2",
  },
  //多个组件都需要设置
  flex: {
    flex: 1,
  },
  // 多个子组件需要设置
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  lineLeftRight: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "white"
  },
  lineCenter: {
    borderBottomWidth: 1,
    borderColor: "white"
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#FF607C",
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 80,
    borderRadius: 5,
  },
});

AppRegistry.registerComponent('RNView', () => RNView);
