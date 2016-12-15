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
            dataSource: ds.cloneWithRows(this.props.data),
            IsResPonder:false,
        }
    }
     
     componentWillMount() {
          this._panResponder = PanResponder.create({
              onStartShouldSetPanResponder:(evt,gestureState)=>true,
              onMoveShouldSetPanResponder:(evt,gestureState)=>true,
              
              onPanResponderStart:(evt,gestureState)=>{
                  setTimeout(()=>{
                     this.setState({
                         IsResPonder:true,
                     });
                     setTimeout(()=>{
                         alert(this.state.IsResPonder)
                     },0)
                  },1000)
              },
              onPanResponderMove:(evt,gestureState)=>{
                   
              }
              
          })
     }
     
    render() {

        return (
            <ListView
                {...this._panResponder.panHandlers}
                dataSource={this.state.dataSource}
                renderRow={(renderRow) => <View style={styles.itemView}>
                <TouchableOpacity  >
                    <View>
                        <Text>{renderRow.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>}/>
        );
    }
}

export default ReactNativeSortableListview;

const styles = StyleSheet.create({
    itemView: {
        width: Dimensions
            .get('window')
            .width,
        height: 50,
        backgroundColor: "blue",
        borderWidth: 1,
        borderColor: "black"
    }
})