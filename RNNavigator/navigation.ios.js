import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  // Navigator,
  TouchableOpacity
} from 'react-native';

import {Navigator}
 from 'react-native-deprecated-custom-components';

//定义第一个页面
//第一个界面有一个按钮，点击跳转下级界面
var FirstPage = React.createClass({
  //按钮绑定的事件
  pressPush: function(){
    //跳转到下一级界面
    var nextRoute = {
      component: SecondPage,
      title: "第二页",
      // navigationBarHidden: "true",
    };
    this.props.navigator.push(nextRoute);
  },
  render: function(){
    return (
      <View style={[styles.flex, {backgroundColor:"yellow"}]}>
        <TouchableOpacity onPress={this.pressPush} style={styles.btn}>
          <Text>点击跳转下一级界面</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

//第二个界面
var SecondPage = React.createClass({
  //按钮绑定事件
  pressPop: function(){
    //返回上级界面
    this.props.navigator.pop();
  },
  render: function(){
    return (
      <View style={[styles.flex, {backgroundColor:"green"}]}>
        <TouchableOpacity onPress={this.pressPop} style={styles.btn}>
          <Text>点击返回</Text>
        </TouchableOpacity>
      </View>
    );
  }
})

var LyNavigator = React.createClass({
  render: function() {
    // var rootRoute = {
    //     component: FirstPage,
    //     title: "第一页"
    // };
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          component: FirstPage,
          title:"第一页",
          // navigationBarHidden:"true",
        }}
      />
      // <NavigatorIOS
      //   /*
      //     第一步
      //     initialRoute
      //     这个指定了默认的界面，也就是启动后的第一个界面
      //     对象的属性是自定义的，这个对象的内容会在renderScene方法中处理
      //     注：必须包含的属性，即component，表示需要渲染的页面组件
      //   */
      //   initialRoute={rootRoute}
      //   /*
      //     第二步
      //     configureScene
      //     场景渲染的配置
      //   */
      //   configureScene={(route) => {
      //     return Navigator.SceneConfigs.PushFromRight;
      //   }}
      //   /*
      //     第三步
      //     渲染场景
      //     参数：route(第一步创建并设置给导航器的路由对象)，navigator(导航器对象)
      //   */
      //   renderScene={(route, navigator) => {
      //     //从route对象中获取页面组件
      //     var Component = route.component
      //     return (
      //       <Component
      //         navigator={navigator}
      //         route={route}
      //       />
      //     );
      //   }}
      //   navigationBarHidden={true}
      //   />
    );
  }
});

var styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 150,
    height: 30,
    borderWidth: 1,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  }
});

module.exports = LyNavigator;
