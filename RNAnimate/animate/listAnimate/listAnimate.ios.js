import React, {Component, PureComponent} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Animated,
    Dimensions
} from 'react-native';
import RNListItem from './listItem.ios'
import DeviceInfo from 'react-native-device-info'

var systemVerson = parseInt(DeviceInfo.getSystemVersion())
var screenHeight = Dimensions.get('window').height - 64
var cellHeight = 64
var maxScreenCellNum = Math.ceil(screenHeight / cellHeight)

export default class RNListAnimate extends Component{

    _renderItem = ({item, index}) => {
        console.log(index);
        return (
            <RNListItem
                id={index}
                item={item}
                index={index}
                animateType={this.props.animateType}
                cellHeight={cellHeight}
                maxScreenCellNum={maxScreenCellNum}
            />
        )
    }

    _itemSeparatorComponent = () => {
        return (
            <View style={{
                height: 1,
                backgroundColor: "black",
            }} />
        );
    }

    _onScroll = () => {
        console.log("scrolling");
    }

    render() {
        var dataSource=[]
        for(var index=0; index<20; index++){
            dataSource.push({key: index})
        }

        return (
            <FlatList
                style={{
                    flex: 1,
                }}
                automaticallyAdjustContentInsets={systemVerson < 11}
                data={dataSource}
                initialNumToRender={maxScreenCellNum}
                maxToRenderPerBatch={maxScreenCellNum}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this._itemSeparatorComponent}
                onScroll={this._onScroll}
            />
        )
    }

//     constructor() {
//         super()
//
//         this.state = {
//             animateValue: new Animated.Value(0),
//         }
//     }
//
//     componentDidMount() {
//         Animated.timing(
//             this.state.animateValue,
//             {
//                 toValue: 1,
//                 duration: 2500
//             }
//         ).start()
//     }
//
//     render() {
//         return(
//             <View style={{
//                 flex: 1,
//                 marginTop: 64,
//             }}>
//                 <Text>sequence/delay/stagger/parallel演示</Text>
//                 <Animated.View
//                     style={{
//                         backgroundColor: 'red',
//                         width: 150,
//                         height: 40,
//                         left: this.state.animateValue.interpolate({
//                             inputRange: [0,1],
//                             outputRange: [0,200]
//                         })
//                     }}>
//                     <Text style={{fontSize: 14}}>我是第1个View</Text>
//                 </Animated.View>
//             </View>
//         );
//     }
}
