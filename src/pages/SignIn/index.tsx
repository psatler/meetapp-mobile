import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  const passwordRef = useRef();
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function goToSignUpPage() {
    navigation.navigate('SignUp');
  }

  function handleSubmit() {}

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
            // accessibility stuff
            blurOnSubmit={false} // to avoid closing the keyboard
            returnKeyType="next"
            onSubmitEditing={() => passwordRef!.current!.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry // to display the dots ****
            placeholder="Your secret password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit}>Log in</SubmitButton>
        </Form>

        <SignLink onPress={goToSignUpPage}>
          <SignLinkText>Create an account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
