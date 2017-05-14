import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SaleScreen from './app/screens/SaleScreen';
import HomeScreen from './app/screens/HomeScreen';

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Sale: { screen: SaleScreen },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);