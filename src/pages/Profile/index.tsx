import React from 'react';
import { View, Text } from 'react-native';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Profile() {
  return (
    <Background isLoggedIn>
      <View>
        <Text style={{ color: 'white' }}> Profile!! </Text>
      </View>
    </Background>
  );
}
