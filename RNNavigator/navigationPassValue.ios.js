import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  // Navigator,
  TouchableOpacity,
  TextInput
} from 'react-native';

//第一个界面
var InputPage = React.createClass({
  getInitialState: function(){
    return {
      //记录输入框的值
      content: ""
    };
  },
  //输入框输入监听
  getInputContent: function(inputText){
    this.setState({
      content: inputText
    });
  },
  //跳转下个界面
  pushPage: function(){
    this.props.navigator.push({
      component: DetailPage,
      title: "第二页",
      passProps: {
        //将输入框的内容传递给下一级界面
        showText: this.state.content
      }
    })
  },
  render: function(){
    return (
      <View style={inputPageStyle.contrainer}>
        <TextInput
          style={inputPageStyle.input}
          placeHolder="请输入内容"
          onChangeText={this.getInputContent}
        />
        <TouchableOpacity style={commonStyle.btn} onPress={this.pushPage}>
          <Text>进入下一页</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

//第二个界面
var DetailPage = React.createClass({
  //返回上级界面
  popBack: function(){
    this.props.navigator.pop()
  },
  render: function(){
    return (
      <View style={detailPageStyle.contrainer}>
        <Text style={detailPageStyle.text}>{this.props.showText}</Text>
        <TouchableOpacity style={commonStyle.btn} onPress={this.popBack}>
          <Text>返回上一页</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var LyNavigationPassValue = React.createClass({
  render: function(){
    return (
      <View style={{flex: 1}}>
        <NavigatorIOS
          style={{flex: 1}}
          initialRoute={{
            component: InputPage,
            title: "第一页",
            // passProps:{
            //
            // }
          }}
        />
      </View>
    );
  }
});

var commonStyle = StyleSheet.create({
  btn: {
    marginTop: 20,
    height: 30,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
})

var inputPageStyle = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 45,
    marginLeft: 25,
    marginRight: 25,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
  },
});

var detailPageStyle = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginLeft: 25,
    marginRight: 25,
    padding: 25,
    backgroundColor: "cyan",
    fontSize: 20,
    textAlign: "center",
  }
})

module.exports = LyNavigationPassValue;
