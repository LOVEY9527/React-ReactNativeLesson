import React, {Component, PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Dimensions,
    Image,
    Easing
} from 'react-native';
import DeviceInfo from 'react-native-device-info'
import moneyFront from './money-front.png';
import moneyBack from './money-back.png';

var screenHeight = Dimensions.get('window').height
var screenWidth = Dimensions.get('window').width

export default class RNAnimationItem extends Component{

    constructor() {
        super()

        this.state = {
            startX: this.getRandomNum(0, screenWidth),
            endX: this.getRandomNum(0, screenWidth),
            startY: 0,
            endY: screenHeight,
            animationValue: new Animated.Value(0),
            roateXValue: new Animated.Value(0),
        }
    }

    getRandomNum(Min,Max)
    {
        var Range = Max - Min;
        var Rand = Math.random();
        return(Min + Math.round(Rand * Range));
    }

    componentDidMount() {
        var delayTime = this.props.index * 100
        Animated.parallel([
            Animated.timing(
                this.state.animationValue,
                {
                    toValue: 1,
                    duration: 2000,
                    delay: delayTime,
                    // easing: Easing.in(Easing.ease),
                    // useNativeDriver: true,
                }
                ),
            Animated.timing(
                this.state.roateXValue,
                {
                    toValue: 1,
                    duration: 2000,
                    delay: delayTime,
                    easing: Easing.linear(),
                }
            )
        ]).start();
    }

    render() {
        return (
            <View>
                <Animated.Image
                    source={moneyFront}
                    style={{
                        position: 'absolute',
                        left: this.state.animationValue.interpolate({
                            inputRange: [0,1],
                            outputRange: [this.state.startX, this.state.endX],
                        }),
                        top: this.state.animationValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [this.state.startY, this.state.endY]
                        }),
                        transform: [{rotateX: this.state.roateXValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['180deg', '-180deg'],
                            })}, {rotate: this.state.roateXValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['180deg', '180deg'],
                            })}]
                    }}
                />
                <Animated.Image
                    source={moneyBack}
                    style={{
                        position: 'absolute',
                        left: this.state.animationValue.interpolate({
                            inputRange: [0,1],
                            outputRange: [this.state.startX, this.state.endX],
                        }),
                        top: this.state.animationValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [this.state.startY, this.state.endY]
                        }),
                        transform: [{rotateX: this.state.roateXValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '360deg'],
                            })}, {rotate: this.state.roateXValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '0deg'],
                            })}]
                    }}
                />
            </View>
        );
    }
}