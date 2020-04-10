import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import Input from '~/components/Input';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>Hello!!!</Text>

      <Input icon="call" placeholder="Type your name" />
    </Background>
  );
}
