import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

// protected screens
import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';
import MeetupSubscription from '~/pages/MeetupSubscription';

const Tabs = createBottomTabNavigator();

// logged: #2a2332, #402944)
// not logged: #ffafbd, #ffc3a0)

function ProtectedRoutes() {
  return (
    <Tabs.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        // activeBackgroundColor: '#402944',
        style: {
          backgroundColor: '#2a2332',
        },
        activeTintColor: '#ffafbd',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      }}>
      <Tabs.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="dashboard" size={20} color={color} />
          ),
          tabBarTestID: 'Dashboard-Tab',
        }}
        component={Dashboard}
      />
      <Tabs.Screen
        name="MeetupSubscription"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="plus-one" size={20} color={color} />
          ),
          tabBarTestID: 'MeetupSubscription-Tab',
        }}
        component={MeetupSubscription}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account-box" size={20} color={color} />
          ),
          tabBarTestID: 'Profile-Tab',
        }}
        component={Profile}
      />
    </Tabs.Navigator>
  );
}

export default ProtectedRoutes;
