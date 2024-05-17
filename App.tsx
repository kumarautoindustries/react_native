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

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{
      statusBarColor: '#157ed2',
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
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator >
  )
}
const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={StackNav} />
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