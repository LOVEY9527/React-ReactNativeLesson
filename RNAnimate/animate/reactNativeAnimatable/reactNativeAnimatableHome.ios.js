import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {createAnimatableComponent} from 'react-native-animatable';
import RNAnimatableNormal from  './reactNativeAnimatableNormal.ios';
import RNAnimatableAll from './reactNativeaAnimatableAll';

export default class RNAnimatableHome extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={{width: 150, height: 150, justifyContent: "space-between"}}>
                    <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(0)}>
                        <Text>normalAnimatable</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableOpacityStyles} onPress={() => this.onClick(1)}>
                        <Text>allAnimatable</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    onClick(clickIndex) {
        if (clickIndex === 0) {
            this.props.navigator.push({
                component: RNAnimatableNormal,
                title: "translate",
                passProps: {
                    animateType: "translate"
                }
            })
        } else if(clickIndex === 1){
            this.props.navigator.push({
                component: RNAnimatableAll,
                title: "scale",
                passProps: {
                    animateType: "scale"
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