import React, { Component } from 'react';
import {
    SectionList,
    Text,
    View
} from 'react-native';
import SectionDataSource from './reactNativeAnimatableType';
import AnimatableCell from './reactNativeAnimatableCell.ios'

const COLORS = [
    '#65b237', // green
    '#346ca5', // blue
    '#a0a0a0', // light grey
    '#ffc508', // yellow
    '#217983', // cobolt
    '#435056', // grey
    '#b23751', // red
    '#333333', // dark
    '#ff6821', // orange
    '#e3a09e', // pink
    '#1abc9c', // turquoise
    '#302614', // brown
];

const NATIVE_INCOMPATIBLE_ANIMATIONS = ['jello', 'lightSpeedIn', 'lightSpeedOut'];

export default class RNAnimatable extends Component {
    _renderItem = ({item, index}) => {
        return (
            <AnimatableCell
                animateType={item}
                color={COLORS[index % COLORS.length]}
                useNativeDriver={NATIVE_INCOMPATIBLE_ANIMATIONS.indexOf(item) === -1}
            />
        );
    }

    _renderSectionHeader = ({section}) => {
        return (
            <View style={{
                backgroundColor: '#F5FCFF',
                padding: 15,
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 18,
                }}>{section.title}</Text>
            </View>
        );
    }

    render() {
        return (
            <SectionList
                automaticallyAdjustContentInsets={false}
                keyExtractor={item => item}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                sections={SectionDataSource}
            />
        );
    }
}