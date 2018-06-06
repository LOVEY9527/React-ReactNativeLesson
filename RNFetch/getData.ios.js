import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

/*
  fetch 语法：
  fetch(参数)
  .then(完成的回调函数)
  .catch(失败的回调函数)

  fetch(url, opts)
  .then((response) => {
    //网络请求成功执行该回调函数，得到响应对象，通过response可以获取请求的数据
    //例如：json,text等
    return response.text();
    或者 return response.json();
  })
  .then((responseData) => {
    //处理请求得到的数据
  })
  .catch((error) => {
    //网络请求失败执行该回调函数，得到错误信息
  })
*/
// https://mail.luichi.info:8884/appserver/wallet/myBankCards
// http://project.lanou3g.com/projects/bj/reactnative/login.php
function getRequest(url){
  var opts = {
    method: "GET",
  }

  fetch(url, opts)
  .then((response) => {
    return response.text(); //返回一个带有文本的对象
  })
  .then((responseText) => {
    alert(responseText);
  })
  .catch((error) => {
    alert(error);
  })
}

/*
  formData
*/
function postRequest(url){

};

var GetData = React.createClass({
  render: function(){
    return (
      <View style={styles.contrainer}>
        <TouchableOpacity style={styles.btn} onPress={getRequest.bind(this, "https://mail.luichi.info:8884/appserver/wallet/myBankCards")}>
          <Text>get</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>post</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: "cyan",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    width: 60,
    height: 30,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "black",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  }
});

module.exports = GetData;
