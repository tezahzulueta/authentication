import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDDLE6K3xcejtZhxenIZB1gh7K3vQCLAFw',
      authDomain: 'authentication-381cb.firebaseapp.com',
      databaseURL: 'https://authentication-381cb.firebaseio.com',
      projectId: 'authentication-381cb',
      storageBucket: '',
      messagingSenderId: '28701176'
    });
  }

  render() {
    return (
      <View>
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;