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

//练习1：实现scrollView的基本功能
// var RNScrollView = require("./lyScrollView")
//练习2：管家列表
var RNScrollView = require("./houseManagerList")

AppRegistry.registerComponent('RNScrollView', () => RNScrollView);
