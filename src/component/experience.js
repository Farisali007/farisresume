import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

 
export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Experience</Text>
        <Text style={styles.instructions}>- Internee</Text>
        <Text style={styles.instructions}>software house  1 Months</Text>
        <Text style={styles.instructions}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    color:'#000000'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#000000'
    
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
});