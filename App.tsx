import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HomeScreen, DetailsScreen, PaymentScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
          <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
