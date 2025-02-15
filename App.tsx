import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Model, SignIn, RedirectUser } from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RedirectUser">
        <Stack.Screen
          name="RedirectUser"
          component={RedirectUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Model" component={Model} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
