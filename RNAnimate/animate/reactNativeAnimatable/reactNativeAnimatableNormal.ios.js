import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import {Animatable, View} from 'react-native-animatable';

export default class RNAnimatableNormal extends Component {
    animatedView = null

    constructor() {
        super()

        this.state = {
            fontSize: 10
        }
    }

    // _onAnimationBegin = () => {
    //     console.log(this.animatedView);
    // }

    _onAnimationEnd = () => {
        // console.log(this.animatedView);
        this.animatedView.animate("fadeOutLeftBig")
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Animatable.View
                    //动画名
                    animation="rotate"
                    //动画时间
                    duration={1500}
                    //动画开始延迟
                    delay={500}
                    //方向
                    direction="reverse"
                    //循环次数(infinite=>无限次)
                    iterationCount="infinite"
                    //循环间隔
                    iterationDelay={500}
                    //轨迹函数
                    easing="linear"
                    style={{
                        backgroundColor: "red",
                        width: 150,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text style={{color: "white"}}>roate</Text>
                </Animatable.View>
                <Animatable.View
                    ref={(ref) => {this.animatedView=ref}}
                    animation="fadeInRightBig"
                    delay={500}
                    //动画开始回调
                    // onAnimationBegin={this._onAnimationBegin}
                    //动画结束回调
                    onAnimationEnd={this._onAnimationEnd}
                    style={{
                        backgroundColor: "blue",
                        marginTop: 30,
                        width: 150,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text style={{color: "white"}}>slideInRight</Text>
                </Animatable.View>
                <TouchableOpacity
                    style={{
                        marginTop: 30,
                        width: 150,
                        height: 60,
                        backgroundColor: "green",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    onPress={() => this.setState({fontSize: (this.state.fontSize || 10) + 5 })}
                >
                    <Animatable.Text
                        //被动态修改的style，修改该style的时候会有动画效果
                        transition="fontSize"
                        style={{
                            fontSize: this.state.fontSize || 10,
                            color: "white"
                        }}
                    >
                        Size me up!
                    </Animatable.Text>
                </TouchableOpacity>
            </View>
        );
    }
}