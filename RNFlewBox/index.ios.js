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

var RNFlewBox = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
        </View>
        <View style={styles.child2}>
        </View>
      </View>
    );
  }
});

// var styles = StyleSheet.create({
//   container: {
//     margin: 30,
//     width: 300,
//     height: 300,
//     backgroundColor: "yellow",
//     // React中默认主轴方向为column
//     // 设置为横向排列
//     flexDirection: "row",
//     //设置主轴
//     justifyContent: "center",
//     // 交叉轴
//     alignItems: "center",
//   },
//   child1: {
//     width: 100,
//     height: 100,
//     backgroundColor: "green",
//   },
//   child2: {
//     width: 100,
//     height: 100,
//     backgroundColor: "blue",
//   }
// });

/*
  flex
  给组件指定flex，并且组件的值是一个数字：
  flex:1, =>组件可以撑满父组件所有的剩余空间
  同时存在多个并列的，并且都设置了flex:1，则组件均分

  如果这些并列的子组件，flex值不一样，则谁的值更大，谁占据的剩余空间的比例就更大
  (即占据剩余空间的比例等于并列组件的flex值的比)
*/
var styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "cyan",
  },
  child1: {
    flex: 1,
    backgroundColor: "green",
  },
  child2: {
    flex: 1,
    backgroundColor: "blue",
  }
});

AppRegistry.registerComponent('RNFlewBox', () => RNFlewBox);
