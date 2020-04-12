import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  // CardStyleInterpolators,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

// screens
import SignIn from '~/pages/SignIn';
import SignUp from './pages/SignUp';

// protected screens
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import MeetupRegistration from './pages/MeetupRegistration';

import { useSelector } from 'react-redux';
import { ApplicationState } from '~/store/createStore';

// refer to the auth flow: https://reactnavigation.org/docs/auth-flow/

function Home() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Dashboard" component={Dashboard} />
      <Tabs.Screen name="MeetupRegistration" component={MeetupRegistration} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
}
function Routes() {
  const isLoggedIn = useSelector(
    (state: ApplicationState) => state.auth.loggedIn
  );

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {isLoggedIn ? (
          <>
            <AppStack.Screen name="Home" component={Home} />
          </>
        ) : (
          <>
            <AppStack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
                // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <AppStack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
                // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
              }}
            />
          </>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

// const animationConfigs = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };
