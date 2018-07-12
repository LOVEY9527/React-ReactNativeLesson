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
        //遍历changed，根据isViewable对改变的item做显示和隐藏
        for (var index = 0; index < changed.length; index++) {
            var changedInfo = changed[index];
            if (changedInfo.index < this.state.shouldShowAnimatedArray.length) {
                var shouldShowAnimatedArray = this.state.shouldShowAnimatedArray
                var shouldShowAnimated = shouldShowAnimatedArray[changedInfo.index]
                if (this.props.shouldAnimateAllTime) {
                    //如果需要一直做动画，那么不管shouldShowAnimatedArray中元素为true/false都需要setState
                    shouldShowAnimatedArray[changedInfo.index] = changedInfo.isViewable
                    this.setState({
                        shouldShowAnimatedArray: shouldShowAnimatedArray
                    })
                }else {
                    //如果不需要一直做动画，只需要在第一次出现的时有动画效果
                    //那么只有当shouldShowAnimatedArray中元素为false才需要setState
                    if (!shouldShowAnimated) {
                        shouldShowAnimatedArray[changedInfo.index] = changedInfo.isViewable
                        this.setState({
                            shouldShowAnimatedArray: shouldShowAnimatedArray
                        })
                    }
                }
            }
        }
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
