import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//组件
var News = React.createClass({
  show: function(title) {
    alert(title);
  },
  render: function() {
    //定义数组，用于存储设置好的Text组件
    var newsComponent = [];
    //遍历数组
    for (var index in this.props.news) {
      if (this.props.news.hasOwnProperty(index)) {
        var text = (
          <Text
            numberOfLines={2}
            key={index}
            style={newsStyle.news_item}
            onPress={this.show.bind(this, this.props.news[index])}>
              {this.props.news[index]}
            </Text>
        );
        newsComponent.push(text);
      }
    };
    return (
      <View style={newsStyle.flex}>
          <Text style={newsStyle.news_title}>今日要闻</Text>
          {newsComponent}
      </View>
    );
  }
});

//样式
var newsStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  news_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CD1D1C",
    marginLeft: 10,
    marginTop: 15,
  },
  news_item: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize:15,
    lineHeight: 30,
  }
});

//导出模块
module.exports = News;
