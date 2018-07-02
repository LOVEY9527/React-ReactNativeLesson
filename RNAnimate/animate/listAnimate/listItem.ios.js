import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Dimensions
} from 'react-native';

var ScreenWidth = Dimensions.get('window').width;

export default class RNListItem extends Component {
    constructor() {
        super()

        this.state = {
            animateValue: new Animated.Value(0),
        }
    }

    componentDidMount() {
        var animateDuration = 500
        // var delayTime = 0
        // if ((this.props.animateType === "translate") ||
        //     (this.props.animateType === "rotateX")) {
        var delayTime = this.props.index * 100
        // }
        Animated.timing(
            this.state.animateValue,
            {
                toValue: 1,
                duration: animateDuration,
                delay: delayTime,
            }
        ).start()
    }

    render() {
        if (this.props.animateType === "translate"){
            return (
                <Animated.View style={[
                    styles.contrainer,
                    {
                        opacity: this.state.animateValue,
                        //移动
                        transform: [{translateX: this.state.animateValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [ScreenWidth, 0]
                            })}]
                    }
                    ]}>
                    <Text style={{
                        fontSize: 15,
                        color: "white"
                    }}>
                        第{this.props.item.key}行
                    </Text>
                </Animated.View>
            );
        }else if (this.props.animateType === "scale"){
            return (
                <Animated.View style={[
                    styles.contrainer,
                    {
                        opacity: this.state.animateValue,
                        //缩放
                        transform:[{scale: this.state.animateValue}]
                    }
                    ]}>
                    <Text style={{
                        fontSize: 15,
                        color: "white"
                    }}>
                        第{this.props.item.key}行
                    </Text>
                </Animated.View>
            );
        } else {
            return (
                <Animated.View style={[
                    styles.contrainer,
                    {
                        opacity: this.state.animateValue,
                        //旋转
                        transform: [{rotateX: this.state.animateValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['180deg', '0deg']
                            })}]
                    }
                    ]}>
                    <Text style={{
                        fontSize: 15,
                        color: "white"
                    }}>
                        第{this.props.item.key}行
                    </Text>
                </Animated.View>
            );
        }
    }
}

var styles = StyleSheet.create({
    contrainer: {
        height: 44,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    }
})