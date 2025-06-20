import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './main/main';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {

  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
};
