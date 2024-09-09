import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tabs>
    </Tabs>
  );
}
