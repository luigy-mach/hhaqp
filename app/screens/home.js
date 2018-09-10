/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//import Icon from 'react-native-vector-icons/FontAwesome'

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk';


type Props = {};
export default class HomeScreen extends Component<Props> {  
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
  }  
}