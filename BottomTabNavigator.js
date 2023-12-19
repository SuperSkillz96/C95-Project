import React, {Component} from 'react';
import { Text, View, Stylesheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from "@react-navigation/native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WeeklyTaskScreen from '../screens/WeeklyTaskScreen';
import MonthlyTaskScreen from '../screens/MonthlyTaskScreen';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {

  render() {
    return(
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'MonthlyTaskScreen') {
                        iconName = focused
                            ? 'calendar'
                            : 'calendar-outline';
                    } else if (route.name === 'WeeklyTaskScreen') {
                        iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
          <Tab.Screen name = 'WeeklyTaskScreen' component = {WeeklyTaskScreen} />
          <Tab.Screen name = 'MonthlyTaskScreen' component = {MonthlyTaskScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}