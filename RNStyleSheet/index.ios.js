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

var RNStyleSheet = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.top, styles.border]}>
        </View>
        <View style={[styles.bottom, styles.border, {borderWidth: 6}]}>
        </View>
      </View>
    );
  }
})

/*
    html5中样式与react中样式比较
    1.html5以;结尾
      react以,结尾
    2.html5中key、value都不加引号
      react中属于JS对象，key的名字不能出现"-"，需要使用驼峰命名法，如果value为字符串，需要加引号
    3.html5中，value如果是数字，需要添加单位
      react中不需要添加单位
*/
var styles = StyleSheet.create({
  //外部View
  container: {
    backgroundColor: "red",
    width: 300,
    height: 400,
    marginTop: 25,
    marginLeft: 30
  },

  //上层View
  top: {
    backgroundColor: "green",
    width: 280,
    height: 250,
    margin: 10,
  },

  //下层View
  bottom: {
    backgroundColor: "yellow",
    width: 280,
    height: 110,
    margin: 10,
  },

  //公共
  border: {
    borderWidth: 3,
    borderColor: "black"
  }
})

// export default class RNStyleSheet extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// //外部样式
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('RNStyleSheet', () => RNStyleSheet);
