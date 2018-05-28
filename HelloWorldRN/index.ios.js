/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
  第一部分

  导入RN包，导入RN组件
  AppRegistry：JS运行所有RN应用的入口
  StyleSheet：RN中使用的样式表，类似CSS样式表
  Text：文本组件
  View：视图组件
  各种开发中需要使用的组件，React开发中需要自己写组件，RN中常用组件已经封装好

  模板中使用的是ES6语法，若使用ES5语法则如下
  let React = require("react-native");
  let {
    AppRegistry,
    StyleSheet,
    Text,
    View
  } = React

  require函数，搜索目录加载文件
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*
  第二部分

  创建RN组件

  模板中使用的是ES6语法
  render() {}是ES6的函数缩写

  ES5语法如下：
  var HelloWorld = React.createClass({
    render: function{
      return {};
  }
})
*/
export default class HelloWorldRN extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Lovey!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

/*
  第三部分

  StyleSheet.create创建样式实例
  在应用中只会被创建一次，不用每次在渲染周期中重新创建
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/*
  第四部分

  注册入口组件

  AppRegistry:负责注册运行RN应用程序的JS入口
  registerComponent注册应用程序的入口组件，告知RN哪一个组件被注册为应用的根容器

  第二个参数使用ES6语法，箭头函数
  （）=> HelloWorld
  返回的必须是定义的组件类名字
  等价于
  function() {
    return HelloWorld
  }
*/
AppRegistry.registerComponent('HelloWorldRN', () => HelloWorldRN);
