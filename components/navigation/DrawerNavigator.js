import * as React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';


import SettingScreen from '../screens/SetttingScreen';
import UserScreen from '../screens/UserScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import DrawerContent from "../navigation/DrawerContent";
import HomeScreen from '../screens/HomeScreen';


const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  return (
    <Drawer.Navigator initialRouteName='Home' screenOptions={{
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

export default DrawerNavigator;