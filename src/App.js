import React, {Component} from 'react';
import './App.css';
import {Authenticator} from 'aws-amplify-react';
import {Amplify} from 'aws-amplify';
import '@aws-amplify/ui/dist/style.css';

export default class App extends Component {
  componentDidMount() {
    Amplify.configure({
      mandatorySignIn: true,
      region: 'cognito-region',
      userPoolId: 'user-pool-id',
      identityPoolId: 'identity-pool-id',
      userPoolWebClientId: 'app-client-id'
    })
  }

  render() {
    return (
      <div><Authenticator /></div>
    )
  }
}