import React, {Component} from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    PanResponder
} from 'react-native';

class ReactNativeSortableListview extends Component {
    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            data:this.props.data,
            dataSource: ds.cloneWithRows(this.props.data),
            IsResPonder: false,
            location:[],
            ComponentViewNumber:0
        }
    }
    getItemStyle(){
        return {
        width: Dimensions
            .get('window')
            .width,
        height:this.props.itemHeight,
        backgroundColor: "blue",
        borderWidth: 1,
        borderColor: "black"
        }
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,

            onPanResponderStart: (evt, gestureState) => {
                   this.setState({
                       location:[gestureState.x0,gestureState.y0],
                        ComponentViewNumber:Math.floor(gestureState.y0/this.props.itemHeight)
                   })
                   setTimeout(()=>{
                       if(this.state.location[0]==gestureState.x0&&this.state.location[1]==gestureState.y0){
                           this.setState({
                               IsResPonder:true
                           })
                           console.log("条目已经长按");
                           console.log(gestureState);
                           console.log(evt);
                             
                       }
                   },1500)
                   console.log("已经判断完成");
                   
            },
            onPanResponderMove: (evt, gestureState) => {
                   console.log(this.state.IsResPonder);
                   console.log(this.refs.RefListView);
                   
            }

        })
    }
    render() {

        return (<ListView
            ref="RefListView"
            dataSource={this.state.dataSource}
            renderRow={(renderRow) => <View ref={"Ref"+renderRow.name} style={this.getItemStyle()} {...this._panResponder.panHandlers}>
            <TouchableOpacity >
                <View>
                    <Text>{renderRow.name}</Text>
                </View>
            </TouchableOpacity>
        </View>}/>);
    }
}

export default ReactNativeSortableListview;

const styles = StyleSheet.create({
    itemView: {
        
    }
})