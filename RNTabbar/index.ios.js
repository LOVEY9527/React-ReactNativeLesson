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
  TabBarIOS,
} from 'react-native';

var InputPage = require("./InputPage/inputPage");
var ImagePage = require("./ImagePage/imagePage");
var ListPage = require("./ListPage/listPage");

var RNTabbar = React.createClass({
  getInitialState: function(){
    return {
      //用于记录显示页面组件对应的title
      tab: "input"
    };
  },
  select: function(tabName){
    //TabBarIOS.Item的onPress的处理方法
    this.setState({
      tab: tabName
    });
  },
  render: function(){
    return (
      <TabBarIOS style={{flex:1}}>
        <TabBarIOS.Item
          title="input"
          icon={{uri:"framework_home_tabbar_icon_selected"}}
          onPress={this.select.bind(this, "input")}
          selected={this.state.tab=="input"}>
          <InputPage></InputPage>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="image"
          icon={{uri:"framework_chat_tabbar_icon_selected"}}
          onPress={this.select.bind(this, "image")}
          selected={this.state.tab=="image"}>
          <ImagePage></ImagePage>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="list"
          icon={{uri:"framework_own_tabbar_icon_seclected"}}
          onPress={this.select.bind(this, "list")}
          selected={this.state.tab=="list"}>
          <ListPage></ListPage>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('RNTabbar', () => RNTabbar);
