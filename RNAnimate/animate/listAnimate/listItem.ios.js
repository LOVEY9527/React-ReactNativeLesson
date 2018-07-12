import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Dimensions
} from 'react-native';

var screenWidth = Dimensions.get('window').width;

export default class RNListItem extends Component {
    isAnimating = false;

    constructor() {
        super()

        this.state = {
            animateValue: new Animated.Value(0),
        }
    }

    shouldComponentUpdate(nextProps, nextState ) {
        //如果nextProps.shouldShowAnimated和this.props.shouldShowAnimated一致的话就不需要重新渲染了
        return this.props.shouldShowAnimated != nextProps.shouldShowAnimated;
    }

    componentDidUpdate() {
        // if (this.isAnimating) {
        //     return;
        // }

        if (this.props.shouldShowAnimated) {
            this.startShowAnimate();
        }else {
            this.startHideAnimate();
        }
    }

    startShowAnimate() {
        this.isAnimating = true

        var animateDuration = 500
        //取消动画延迟
        //以一屏幕显示的最大数量的cell为周期，周期中的第一个cell动画延迟0秒，以100倍向上增长，最后周期中最后一个cell
        // var delayTime = (this.props.index % this.props.maxScreenCellNum) * 100

        Animated.timing(
            this.state.animateValue,
            {
                toValue: 1,
                duration: animateDuration,
                // delay: delayTime,
            }
        ).start(success => {
            this.isAnimating = false;
        })
    }

    startHideAnimate() {
        this.isAnimating = true

        //隐藏动画的时间设为0的话，在列表滑动较快的时候动画效果更加衔接
        var animateDuration = 0
        Animated.timing(
            this.state.animateValue,
            {
                toValue: 0,
                duration: animateDuration,
            }
        ).start(success => {
            this.isAnimating = false;
        })
    }

    render() {
        if (this.props.animateType === "translate"){
            return (
                <Animated.View style={[
                    styles.contrainer,
                    {
                        height: this.props.cellHeight,
                        opacity: this.state.animateValue,
                        //移动
                        transform: [{translateX: this.state.animateValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [screenWidth, 0]
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
                        height: this.props.cellHeight,
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
                        height: this.props.cellHeight,
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
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    }
})