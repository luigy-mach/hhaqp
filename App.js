/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


//import React from 'react';
//import { View, Text } from 'react-native';
import LoginScreen from './app/screens/login'
import HomeScreen from './app/screens/home'
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

//class HomeScreen extends React.Component {
//  render() {
//    return (
//      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text>Home Screen</Text>
//      </View>
//    );
//  }  
//}

export default createStackNavigator(
  {
    Home: LoginScreen,
    Details: HomeScreen,
  },{
    initialRouteName: 'Details',
  }
);