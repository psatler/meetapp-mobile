import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

// screens
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// protected routes
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import MeetupRegistration from './pages/MeetupRegistration';

// refer to the auth flow: https://reactnavigation.org/docs/auth-flow/

function Routes() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {isLoggedIn ? (
          <>
            <AppStack.Screen name="Dashboard" component={Dashboard} />
            <AppStack.Screen name="Profile" component={Profile} />
            <AppStack.Screen
              name="MeetupRegistration"
              component={MeetupRegistration}
            />
          </>
        ) : (
          <>
            <AppStack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <AppStack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
