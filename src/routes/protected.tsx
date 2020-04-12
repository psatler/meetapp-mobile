import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// protected screens
import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';
import MeetupRegistration from '~/pages/MeetupRegistration';

const Tabs = createBottomTabNavigator();

function ProtectedRoutes() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Dashboard" component={Dashboard} />
      <Tabs.Screen name="MeetupRegistration" component={MeetupRegistration} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
}

export default ProtectedRoutes;
