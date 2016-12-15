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

import ReactNativeSortablelistView from './app/react-native-sortable-listview';


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
  {name:"chen"},
  {name:"wo"},
  {name:"chen"},
  {name:"wo"},
  {name:"chen"},
  {name:"wo"},
  {name:"chen"},
  {name:"wo"}
]

export default class TextProject extends Component {
  render() {
    return (
      <View>
        <ReactNativeSortablelistView data={data}></ReactNativeSortablelistView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('TextProject', () => TextProject);