import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

// screens
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          options={{ headerShown: false }}
          component={SignIn}
          name="SignIn"
        />
        <AppStack.Screen component={SignUp} name="SignUp" />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
