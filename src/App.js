import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDDLE6K3xcejtZhxenIZB1gh7K3vQCLAFw',
      authDomain: 'authentication-381cb.firebaseapp.com',
      databaseURL: 'https://authentication-381cb.firebaseio.com',
      projectId: 'authentication-381cb',
      storageBucket: '',
      messagingSenderId: '28701176'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;