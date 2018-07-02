import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Slider
} from 'react-native';

export default class RNSpringAnimate extends Component {
  constructor() {
    super()
    this.state = {
      springAnimateWidth: new Animated.Value(0),
      springAnimateHeight: new Animated.Value(0),
      tensionSliderValue: 40, //默认张力系数
      frictionSliderValue: 7, //默认摩擦系数
    }
    this._startAnimate = this.startAnimate.bind(this)
  }

  componentDidMount() {
    this._startAnimate()
  }

  componentDidUpdate() {
    this._startAnimate()
  }

  startAnimate() {
    Animated.spring(
      this.state.springAnimateWidth,
      {
        toValue: 150,
        tension: this.state.tensionSliderValue, //张力系数，默认40
        friction: this.state.frictionSliderValue, //摩擦系数，默认7
      }
    ).start();
    Animated.spring(
      this.state.springAnimateHeight,
      {
        toValue: 40,
        tension: this.state.tensionSliderValue,
        friction: this.state.frictionSliderValue,
      }
    ).start()
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <View style={{
          width: 200,
          height:200,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Animated.View style={{
            backgroundColor: "red",
            width: this.state.springAnimateWidth,
            height: this.state.springAnimateHeight
          }} />
        </View>
        <View style={Styles.sliderContrain}>
          <Slider value={this.state.tensionSliderValue}
            maximumValue={100}
            onSlidingComplete={(value) => this._onSliderComplete(0, value)}
            style={{
            width: 200,
          }}/>
          <Text>张力系数tension:{this.state.tensionSliderValue}</Text>
        </View>
        <View style={Styles.sliderContrain}>
          <Slider value={this.state.frictionSliderValue}
            maximumValue={10}
            onSlidingComplete={(value) => this._onSliderComplete(1, value)}
            style={{
            width: 200,
          }}/>
          <Text>摩擦系数friction:{this.state.frictionSliderValue}</Text>
        </View>
      </View>
    );
  }

  _onSliderComplete(index, value) {
    if (index === 0) {
      this.setState({
        springAnimateWidth: new Animated.Value(0),
        springAnimateHeight: new Animated.Value(0),
        tensionSliderValue: parseInt(value),
      })
    }else {
      this.setState({
        springAnimateWidth: new Animated.Value(0),
        springAnimateHeight: new Animated.Value(0),
        frictionSliderValue: parseInt(value),
      })
    }
  }
}

var Styles = StyleSheet.create({
  sliderContrain: {
    width: 320,
    height: 50,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})
