import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home'
import Chef from './components/Chef'
import CDHome from './components/CDHome'
import CDbreakfast from './components/cdbreakfast'
import CDdinner from './components/cddinner'
import CDlunch from './components/cdlunch'
import CDatc from './components/CDatc'
import CDpaym from './components/CDpaym'



export default class App extends React.Component {
  render() {

    return (
      <AppContainer />
    );
  }
}




const RootStack = createStackNavigator({

  CDHome: {screen:CDHome},
  cdbreakfast: {screen:CDbreakfast},
  cdlunch: {screen:CDlunch},
  cddinner: {screen:CDdinner},
  CDatc: {screen:CDatc},
  CDpaym: {screen:CDpaym},
  Home: {screen:Home},
  Chef: {screen:Chef}

})
const AppContainer = createAppContainer(RootStack)