import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './appnavigation'; // Import your existing StackNavigator

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Navigator">
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        {/* Add more drawer screens as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
