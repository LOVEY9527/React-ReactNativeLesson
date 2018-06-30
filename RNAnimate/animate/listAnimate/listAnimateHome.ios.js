import React, {Component, PureComponent} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';

import RNListAnimate from "./listAnimate.ios";

export default class RNListAnimateHome extends Component{
    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={{width: 150, height: 250, justifyContent: "space-between"}}>
                    <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(0)}>
                        <Text>translateAnimate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(1)}>
                        <Text>scaleAnimate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(2)}>
                        <Text>rotateXAnimate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    onClick(clickIndex) {
        if (clickIndex === 0) {
            this.props.navigator.push({
                component: RNListAnimate,
                title: "translate",
                passProps: {
                    animateType: "translate"
                }
            })
        } else if(clickIndex === 1){
            this.props.navigator.push({
                component: RNListAnimate,
                title: "scale",
                passProps: {
                    animateType: "scale"
                }
            })
        }else if(clickIndex === 2){
            this.props.navigator.push({
                component: RNListAnimate,
                title: "rotateX",
                passProps: {
                    animateType: "rotateX"
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