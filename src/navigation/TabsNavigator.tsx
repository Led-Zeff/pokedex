import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigation } from './StackNavigation';
import { SearchScreen } from '../screens/SearchScreen';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      tabBarOptions={{
        activeTintColor: '#ff7043',
        labelStyle: { marginBottom: Platform.OS === 'ios' ? 0 : 10 },
        style: {
          borderWidth: 0,
          elevation: 0,
          height: 60,
          position: 'absolute',
          backgroundColor: 'rgba(255, 255,  255, 0.88)',
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Pokemons',
          tabBarIcon: ({ color }) => (
            <Icon size={20} name="logo-snapchat" color={color} />
          ),
        }}
        component={StackNavigation}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon size={20} name="search-outline" color={color} />
          ),
        }}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
};
