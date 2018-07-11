import React, {Component, PureComponent} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableOpacity,
    Switch
} from 'react-native';

import RNListAnimate from "./listAnimate.ios";

export default class RNListAnimateHome extends Component{
    constructor() {
        super()

        this.state = {
            shouldAnimateAllTime: false
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={{width: 300, height: 250, justifyContent: "space-between", alignItems: "center"}}>
                    <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(0)}>
                        <Text>translateAnimate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(1)}>
                        <Text>scaleAnimate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(2)}>
                        <Text>rotateXAnimate</Text>
                    </TouchableOpacity>
                    <View style={
                        [styles.touchableOpacityStyles,
                            {
                                flexDirection: "row",
                                width:300
                            }]
                    }>
                        <Text style={{marginRight:10}}>
                            滚动中是否一直做动画
                        </Text>
                        <Switch value={this.state.shouldAnimateAllTime} onValueChange={()=>this._onValueChange()}/>
                    </View>
                </View>
            </View>
        );
    }

    _onValueChange() {
        shouldAnimateAllTime = !this.state.shouldAnimateAllTime
        this.setState({
            shouldAnimateAllTime: shouldAnimateAllTime
        })
    }

    onClick(clickIndex) {
        if (clickIndex === 0) {
            this.props.navigator.push({
                component: RNListAnimate,
                title: "translate",
                passProps: {
                    animateType: "translate",
                    shouldAnimateAllTime: this.state.shouldAnimateAllTime
                }
            })
        } else if(clickIndex === 1){
            this.props.navigator.push({
                component: RNListAnimate,
                title: "scale",
                passProps: {
                    animateType: "scale",
                    shouldAnimateAllTime: this.state.shouldAnimateAllTime
                }
            })
        }else if(clickIndex === 2){
            this.props.navigator.push({
                component: RNListAnimate,
                title: "rotateX",
                passProps: {
                    animateType: "rotateX",
                    shouldAnimateAllTime: this.state.shouldAnimateAllTime
                }
            })
        }
    }
}

var styles = StyleSheet.create({
    touchableOpacityStyles: {
        backgroundColor: "lightgray",
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    }
})