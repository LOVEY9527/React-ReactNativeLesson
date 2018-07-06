import React, {Component, PureComponent} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Animated,
    Dimensions
} from 'react-native';
import RNAnimationItem from './animationItem.ios'

export default class RNAnimationGroup extends Component{
    render() {
        var items= []
        for(var index=0; index<10; index++){
            items.push(<RNAnimationItem key={index} index={index}/>)
        }

        return (
            <View style={{
                flex: 1,
                backgroundColor: "white",
            }}>
                {items}
            </View>
        );
    }
}