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
  View
} from 'react-native';

//在RN中，使用fetch实现网络请求
var RNFetch = require("./getData")
//练习1：使用gei和post获取数据

AppRegistry.registerComponent('RNFetch', () => RNFetch);
