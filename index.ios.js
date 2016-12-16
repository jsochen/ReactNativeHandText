/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ReactNativeSortablelistView from './app/ReactNativeSortablelistView';

import ReactNativeSortablelistView2 from './app/ReactNativeSortablelistView2';

class Views extends Component{
  render(){
    return (
      <View><Text>{this.props.name}</Text></View>
    )
  }
}
let data =[
  {name:"chen"},
  {name:"wo"},
  {name:"aaaa"},
  {name:"bbbb"},
  {name:"cccc"},
  {name:"dddd"},
  {name:"eeee"},
  {name:"ffff"},
  {name:"rrrr"},
  {name:"kkkk"}
]

export default class TextProject extends Component {
  render() {
    return (
      <View>
        <ReactNativeSortablelistView2 ScrollViewHeight={400} itemHeight={50} data={data}></ReactNativeSortablelistView2>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('TextProject', () => TextProject);
