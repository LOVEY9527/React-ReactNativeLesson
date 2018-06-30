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
        this.componentRef.animate(
            this.props.animateType,
            2000
        )
    }

    render() {
        return (

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

        );
    }
}