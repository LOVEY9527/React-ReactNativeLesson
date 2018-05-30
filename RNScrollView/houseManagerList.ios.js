import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';

//处理数据源
var houseManagerData =require("./houseManagerData.json")
var houseManagers = houseManagerData.data.AllHouseList

//组件
var HouseManagerList = React.createClass({
  render: function() {
    //定义空数组，存储管家信息的组件
    var houseManagerRows = [];
    //遍历数组
    for (var i in houseManagers) {
      if (houseManagers.hasOwnProperty(i)) {
        //获取管家数据对象
        var houseManager = houseManagers[i];
        //创建组件，显示头像(userHeadPic)、昵称(userNickName)、地址(userAdress)、行业(userType)
        var row = (
          <View style={houseManagerRowStyle.container} key={i}>
            <View style={houseManagerRowStyle.row}>
              <Image
                source={{uri:houseManager.userHeadPic}}
                style={houseManagerRowStyle.headerImg}/>
              <View style={houseManagerRowStyle.centerContainer}>
                <Text style={houseManagerRowStyle.nickName}>{houseManager.userNickName}</Text>
                <Text style={houseManagerRowStyle.address}>{houseManager.userAdress}</Text>
                <Text style={houseManagerRowStyle.type} numberOfLines={2}>{"行业: "+houseManager.userType}</Text>
              </View>
              <View style={houseManagerRowStyle.rightContainer}>
                <TouchableHighlight style={houseManagerRowStyle.chatTouchableHighlight}>
                  <Image
                   source={{uri:"home_ehelper_exclusive_ehelper_contact"}}
                   style={houseManagerRowStyle.chatImg}
                   resizeMode="contain"/>
                </TouchableHighlight>
              </View>
            </View>
            <View style={houseManagerRowStyle.line}></View>
          </View>
        );
        //将创建的组件存储到houseManagerRows
        houseManagerRows.push(row);
      }
    };

    return (
      <View style={houseManagerListStyle.container}>
        <ScrollView style={houseManagerListStyle.list}>
          {
            //管家列表
            houseManagerRows
          }
        </ScrollView>
      </View>
    );
  }
});

var houseManagerListStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    // marginTop: 20,
    backgroundColor: "white"
  }
});

//样式
var houseManagerRowStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    marginLeft: 15,
    marginRight: 15,
    height: 1,
    backgroundColor: "#dcdcdc",
  },
  row: {
    flexDirection: "row",
  },
  headerImg: {
    width: 73,
    height: 73,
    margin: 15,
    backgroundColor: "gray",
    borderRadius: 36.5,
  },
  centerContainer: {
    flex: 1,
    marginLeft: 17,
    justifyContent: "center",
  },
  nickName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#454545",
  },
  address: {
    fontSize: 14,
    color: "#7b7b7b",
    marginTop: 7,
    marginBottom: 7,
  },
  type: {
    fontSize: 14,
    color: "#7b7b7b",
  },
  rightContainer: {
    height: 108,
    width:97,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  chatTouchableHighlight: {
    // marginLeft: 15,
    // marginRight: 15,
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "row",
  },
  chatImg: {
    // flex: 1
    height: 22.5,
    width: 67,
  }
  // line: {
  //   marginLeft: 15,
  //   marginRight: 15,
  // }
});

//导出
module.exports = HouseManagerList
