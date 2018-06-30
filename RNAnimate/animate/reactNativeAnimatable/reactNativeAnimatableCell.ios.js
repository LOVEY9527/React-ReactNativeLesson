import React, { Component } from 'react';
import {
    SectionList,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {createAnimatableComponent} from 'react-native-animatable'

var AnimatableTouchableOpacity = createAnimatableComponent(TouchableOpacity)

export default class RNAnimatableCell extends Component {
    componentRef = null

    _onPress = () => {
        console.log(this.props);
        this.componentRef.setNativeProps({
            style: {
                zIndex: 1,
            },
        });
        this.componentRef.animate(
            this.props.animateType,
            2000
        ).then(() => {
            this.componentRef.setNativeProps({
                style: {
                    zIndex: 0,
                },
            });
        })
    }

    render() {
        return (
            <View style={{
                backgroundColor: "white",
                height: 84
            }}>
                <AnimatableTouchableOpacity
                    ref={(ref) => {this.componentRef=ref}}
                    onPress={this._onPress}
                    useNativeDriver={this.props.useNativeDriver}
                    style={{
                        backgroundColor: this.props.color,
                        height: 64,
                        justifyContent: "center",
                    }}>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 15
                    }}>
                        {this.props.animateType}
                    </Text>
                </AnimatableTouchableOpacity>
            </View>
        );
    }
}