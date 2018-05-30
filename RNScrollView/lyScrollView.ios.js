import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';

/*
  ScrollView的简单实现
  实现监听拖拽、滑动的相关方法
  添加子组件
*/

var LyScrollVeiw = React.createClass({
  _onScrollViewBeginDrag: function(){
    console.log("开始拖拽");
  },
  _onScrollViewEndDrag: function(){
    console.log("结束拖拽");
  },
  _onMomentumScrollViewBegin: function(){
    console.log("开始滑动");
  },
  _onMomentumScrollViewEnd: function(){
    console.log("结束滑动");
  },
  _onScroll: function(){
    console.log("滑动...");
  },
  _onRefresh: function(){
    alert("刷新")
  },
  render: function() {
    return (
      <View style={scrollViewStyle.container}>
        <ScrollView
          style={scrollViewStyle.scrollView}
          showsVerticalScrollIndicator={true}
          // onScrollViewBeginDrag={this._onScrollViewBeginDrag}
          // onScrollViewEndDrag={this._onScrollViewEndDrag}
          onMomentumScrollStart={this._onMomentumScrollViewBegin}
          onMomentumScrollEnd={this._onMomentumScrollViewEnd}
          onScroll={this._onScroll}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl
              refreshing={false}
              tintColor="red"
              title="正在刷新..."
              onRefresh={this._onRefresh}/>
          }>
          <View style={scrollViewStyle.view_1}></View>
          <View style={scrollViewStyle.view_2}></View>
          <View style={scrollViewStyle.view_3}></View>
        </ScrollView>
      </View>
    );
  }
});

var scrollViewStyle = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "cyan",
  },
  scrollView: {
    marginTop: 25,
    backgroundColor: "#cccccc",
  },
  view_1: {
    margin:15,
    flex: 1,
    height: 300,
    backgroundColor: "yellow",
  },
  view_2: {
    margin:15,
    flex: 1,
    height: 300,
    backgroundColor: "blue",
  },
  view_3: {
    margin:15,
    flex: 1,
    height: 300,
    backgroundColor: "green",
  }
});

module.exports = LyScrollVeiw;
