import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

//从文件中读取数据
var originalDataSource = require("./tradeListDataSource.json");
//获取所有的trade数据
var tradeOriginalDataSource = originalDataSource.data.list;

var TradeListView = React.createClass({
  getInitialState: function(){
    //创建dataSource对象
    var dataSource = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => oldRow!==newRow
    });

    return {
        dataSource: dataSource.cloneWithRows(tradeOriginalDataSource)
    };
  },
  //渲染头视图
  _renderHeader: function(){
    return (
      <View style={tradeListContentStyle.header_Contrainer}>
        <Text style={tradeListContentStyle.header_title}>商品列表</Text>
        <View style={tradeListContentStyle.header_line}></View>
      </View>
    );
  },
  //渲染行
  _renderRow: function(trade){
    //解析图片链接
    var mainPicUrl = " ";
    for (var index in trade.serviceGoodsPicture) {
      if (trade.serviceGoodsPicture.hasOwnProperty(index)) {
        var pic = trade.serviceGoodsPicture[index];
        if (pic.mainPage) {
            mainPicUrl = pic.realPicUrl;
            break;
        }
      }
    };
    //渲染row
    return (
      //显示图片（serviceGoodsPicture.realPicUrl）、商品名（serviceGoodsBase.serviceName）、地址（serviceGoodsBase.serviceDistrict）和价格（serviceGoodsBase.servicePrice）
      <View style={tradeListContentStyle.row_Contrainer}>
        <Image
          style={tradeListContentStyle.row_img}
          source={{uri:mainPicUrl}} />
        <View>
          <Text style={tradeListContentStyle.row_rightContent_tradeName}>{trade.serviceGoodsBase.serviceName}</Text>
          <Text style={tradeListContentStyle.row_rightContent_address}>{trade.serviceGoodsBase.serviceDistrict}</Text>
          <Text style={tradeListContentStyle.row_rightContent_price}>{"￥"+trade.serviceGoodsBase.servicePrice}</Text>
        </View>
      </View>
    );
  },
  //row的分割线
  _renderSeparator: function(sectionID, rowID){
    return (
      <View style={tradeListContentStyle.separator}></View>
    );
  },
  //渲染列表
  render: function() {
    return (
      <ListView
        style={tradeListStyle.contrainer}
        renderHeader={this._renderHeader}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
        dataSource={this.state.dataSource}/>
    );
  }
});

var tradeListStyle = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
  }
});

var tradeListContentStyle = StyleSheet.create({
  //头部样式
  header_Contrainer: {
    flex: 1,
    height: 44,
    justifyContent: "center",
  },
  header_title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    lineHeight: 44,
  },
  header_line: {
    height: 1,
    backgroundColor: "#dcdcdc",
  },
  //row样式
  row_Contrainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
  },
  row_img: {
    width: 75,
    height: 80,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: "gray",
  },
  row_rightContent: {
    flex: 1,
    // marginRight: 15,
    backgroundColor: "white",
  },
  row_rightContent_tradeName: {
    marginTop: 15,
    // marginRight: 15,
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  row_rightContent_address: {
    marginTop: 7,
    fontSize: 14,
    color: "#414141",
  },
  row_rightContent_price: {
    marginTop: 20,
    marginBottom: 13,
    fontSize: 14,
    fontWeight: "bold",
    color: "#fc5508",
  },
  //row分割线
  separator: {
    height: 1,
    marginLeft: 94,
    // marginRight: 15,
    backgroundColor: "#dcdcdc",
  }
});

module.exports = TradeListView;
