import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

/*
  ListView 数据列表
  listView最重要的是设置每行显示的组件
  section、header

*/
//原始数据：字符串
var originalDataSource = [
  "及时雨宋江",
  "玉麒麟卢俊义",
  "入云龙公孙胜",
  "智多星吴用",
  "行者武松",
  "黑旋风李逵",
  "豹子头林聪",
  "花和尚鲁智深",
  "青面兽杨智",
  "小李广花荣",
  "浪子燕青",
];

var LyListView = React.createClass({
  getInitialState: function(){
    //创建dataSource对象
    var dataSource = new ListView.DataSource({
      //通过判断决定渲染哪些行组件，避免全部渲染，提高渲染效率
      rowHasChanged: (oldRow, newRow) => oldRow!=newRow
    });

    return {
      //设置dataSource时，不直接使用提供的原始数据，使用cloneWithRows对数据进行复制
      //使用复制后的数据源实例化listView
      //优势：当原始数据发生变化时，ListView组件的dataSource不会改变
      dataSource: dataSource.cloneWithRows(originalDataSource)
    };
  },
  //渲染row组件,参数是每行要显示的数据对象
  _renderRow: function(rowData:string){
    return (
      <View style={listViewStyle.row}>
        <Text style={listViewStyle.content}>{rowData}</Text>
      </View>
    );
  },
  render: function() {
    return (
      <ListView
        style={listViewStyle.contariner}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}/>
    );
  }
});

var listViewStyle = StyleSheet.create({
  contariner: {
    flex: 1,
    marginTop: 25,
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    height: 100,
    borderBottomWidth: 1,
    borderColor: "#cccccc"
  },
  content: {
    flex: 1,
    fontSize: 20,
    color: "blue",
    lineHeight: 100,
  }
});

module.exports = LyListView;
