import React from 'react';
import{createAppContainer,createSwitchNaviagtor} from 'react-navigation'
import{createBottomTabNavigator} from 'react-naviagtion-tabs'
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import{AppTabNaviagtor} from './components/AppTabNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}
const switchNavigator=createSwitchNaviagtor({
  WelcomeScreen:{
    screen:WelcomeScreen,
  },
  BottomTab:{
    screen:AppTabNaviagtor
  }
})
const AppContainer=createAppContainer(switchNavigator)