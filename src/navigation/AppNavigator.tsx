import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IntroScreen from '../screens/Auth/IntroScreen';
import LoginScreen from '../screens/Auth/LoginScreen';

const Stack = createStackNavigator();
const options = {headerShown: false, gestureEnabled: false};

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={IntroScreen} options={options} />
        <Stack.Screen name="Login" component={LoginScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
