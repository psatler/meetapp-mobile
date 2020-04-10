import React from 'react';
import { Image } from 'react-native';

// @ts-ignore
import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry // to display the dots ****
            placeholder="Your secret password"
          />
          <SubmitButton onPress={() => {}}>Log in</SubmitButton>
        </Form>

        <SignLink onPress={() => {}}>
          <SignLinkText>Create an account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
