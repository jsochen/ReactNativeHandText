import React, {Component} from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    PanResponder,
    ScrollView
} from 'react-native';

class ReactNativeSortableListview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ScrollViewLocation:0,
            data: this.props.data,
            IsResPonder: false,
            location: [],
            ComponentViewNumber: 0
        }
    }
    getWhiteStyle(){
         return {
            width: Dimensions
                .get('window')
                .width,
            height: this.props.itemHeight,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "blue"
        }
    }
    getItemStyle() {
        return {
            width: Dimensions
                .get('window')
                .width,
            height: this.props.itemHeight,
            backgroundColor: "blue",
            borderWidth: 1,
            borderColor: "black"
        }
    }
    getMoveItemStyle(){
        return {
            width: Dimensions
                .get('window')
                .width,
            height: this.props.itemHeight,
            backgroundColor: "black",
            borderWidth: 1,
            borderColor: "black",
            position:"absolute",
            top:0,
            left:0
        }
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            //是否在点击的时候响应true响应
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            //是否在移动的时候响应
            onPanResponderStart: (evt, gestureState) => {
                //点击之后响应 添加逻辑
                this.setState({
                    location: [
                        gestureState.x0, gestureState.y0  //储存点击的位置方便后面判断是否点击后移动
                    ],
                    ComponentViewNumber: Math.floor(gestureState.y0 / this.props.itemHeight)   //储存点击的item
                })
                setTimeout(() => {
                    if (this.state.location[0] == gestureState.x0 && this.state.location[1] == gestureState.y0) {
                        this.setState({IsResPonder: true})   // IsResPonder为true的时候 改变这一条的样式，同时使得移动获得更改权限
                        console.log("条目已经长按");      
                    }
                }, 1500)
            },
            onPanResponderMove: (evt, gestureState) => {
                console.log(this.state.IsResPonder);

            }
        })
        this.ListView_panResponder = PanResponder.create({
            onPanResponderRelease: (evt, gestureState) => {
              this.setState({
                    IsResPonder: false,
                })
            }
        })
    }
    render() {
           let RenderRowView = this.state.data.map((item,index)=>{
                 if(item.name){
                   return (
                        <View
                            name={item.name}
                            ref={"Ref" + item.name}
                            style={this.getItemStyle()}
                            key={index}
                            {...this._panResponder.panHandlers}>
                            <TouchableOpacity >
                                <View>
                                    <Text>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                 )}
                 else{
                     return(
                           <View
                            style={this.getWhiteStyle()}
                            key={index}
                            {...this._panResponder.panHandlers}>
                            <TouchableOpacity >
                                <View>
                                   
                                </View>
                            </TouchableOpacity>
                        </View>
                     )
                 }
           })
           
        return (
            // 
            <ScrollView
             onScroll={(e)=>{this.setState({ScrollViewLocation:e.nativeEvent.contentOffset.y})}}
             scrollEventThrottle={200} 
             ref={(scrollView) => { _scrollView = scrollView; }}
             {...this.ListView_panResponder.panHandlers}
             height={this.props.ScrollViewHeight}> 
             {RenderRowView}
            </ScrollView>
        );
    }
}

export default ReactNativeSortableListview;

const styles = StyleSheet.create({itemView: {}})