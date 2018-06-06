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

// var RNListView = require("./lyListView");
var RNListView = require("./tradeListView")

AppRegistry.registerComponent('RNListView', () => RNListView);
