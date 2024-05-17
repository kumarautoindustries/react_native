import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './components/screens/HomeScreen';
import SettingScreen from './components/screens/SetttingScreen';
import UserScreen from './components/screens/UserScreen';
import NotificationsScreen from './components/screens/NotificationsScreen';

import Icon from 'react-native-vector-icons/Entypo';
import DrawerNavigator from './components/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App;