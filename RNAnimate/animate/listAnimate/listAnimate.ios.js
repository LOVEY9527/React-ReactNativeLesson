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
    dataSource=[]

    constructor(props) {
        super(props)

        var shouldShowAnimatedArray = []
        for(var index=0; index<17; index++){
            this.dataSource.push({key: index})
            shouldShowAnimatedArray.push(false)
        }

        this.state = {
            shouldShowAnimatedArray: shouldShowAnimatedArray
        }
    }

    _renderItem = ({item, index}) => {
        return (
            <RNListItem
                key={index}
                id={index}
                item={item}
                index={index}
                animateType={this.props.animateType}
                cellHeight={cellHeight}
                maxScreenCellNum={maxScreenCellNum}
                shouldShowAnimated={this.state.shouldShowAnimatedArray[index]}
                shouldAnimateAllTime={this.props.shouldAnimateAllTime}
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

    _onViewableItemsChanged = ({viewableItems, changed}) => {
        for (var index = 0; index < changed.length; index++) {
            var changedInfo = changed[index];
            if (changedInfo.index < this.state.shouldShowAnimatedArray.length) {
                var shouldShowAnimatedArray = this.state.shouldShowAnimatedArray
                shouldShowAnimatedArray[changedInfo.index] = changedInfo.isViewable
                this.setState({
                    shouldShowAnimatedArray: shouldShowAnimatedArray
                })
            }
        }
        // console.log(viewableItems);
        // console.log(changed);
    }

    render() {
        return (
            <FlatList
                style={{
                    flex: 1,
                    marginTop: 64
                }}
                automaticallyAdjustContentInsets={systemVerson < 11}
                data={this.dataSource}
                initialNumToRender={maxScreenCellNum}
                maxToRenderPerBatch={maxScreenCellNum}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this._itemSeparatorComponent}
                onScroll={this._onScroll}
                onViewableItemsChanged={this._onViewableItemsChanged}
            />
        )
    }
}
