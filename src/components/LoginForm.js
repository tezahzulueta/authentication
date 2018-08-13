import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, TextField, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '', label: '', loading: false };

  // Authenticate the user
  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ label: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ label: 'Authentication Failed.', loading: false });
  }

  onLoginSuccess() {
    this.setState({ 
      email: '',
      password: '',
      label: 'Success!',
      loading: false
     });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return(
    <Card>
        <CardSection>
          <TextField 
            placeholder="hello@barbeacon.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })} 
          />
        </CardSection>

        <CardSection>
          <TextField
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.label}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection> 
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;