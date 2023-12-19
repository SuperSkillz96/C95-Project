import react, {Component} from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

import BottomTabNavigator from './components/BottomTabNavigator';

export default class App extends Component {
  
  render() {
    return (
      <BottomTabNavigator/>
    )
  }
  
}