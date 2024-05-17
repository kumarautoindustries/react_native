import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './components/screens/HomeScreen';
import SettingScreen from './components/screens/SetttingScreen';
import UserScreen from './components/screens/UserScreen';
import NotificationsScreen from './components/screens/NotificationsScreen';
import DrawerContent from "./components/DrawerContent";
import Icon from 'react-native-vector-icons/Entypo';


const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#157ed2',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'left',
      headerLeft: () => {
        return (
          <Icon
            name="menu"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            size={30}
            color="#fff"
          />
        );
      },
    }} drawerContent={(props) => <DrawerContent {...props} />} >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
      <Drawer.Screen name="User" component={UserScreen} />
    </Drawer.Navigator >
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
export default App;