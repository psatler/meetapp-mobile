import React from 'react';
import { View, Text } from 'react-native';

import Background from '~/components/Background';
// import { Container } from './styles';

export default function Dashboard() {
  return (
    <Background isLoggedIn>
      <View>
        <Text style={{ color: 'white' }}> Dashboard!! </Text>
      </View>
    </Background>
  );
}
