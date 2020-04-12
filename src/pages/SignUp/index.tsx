import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '~/store/ducks/auth/actions';
import { ApplicationState } from '~/store/createStore';

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

export default function SignUp() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const emailRef = useRef();
  const passwordRef = useRef();

  const loading = useSelector((state: ApplicationState) => state.auth.loading);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function goToSignInPage() {
    navigation.navigate('SignIn');
  }

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your full name"
            // acessibility stuff below
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => emailRef!.current!.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your email"
            // acessibility stuff below
            blurOnSubmit={false}
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef!.current!.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry // to display the dots ****
            placeholder="Your secret password"
            // acessibility stuff below
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit} loading={loading}>
            Log in
          </SubmitButton>
        </Form>

        <SignLink onPress={() => goToSignInPage()}>
          <SignLinkText>I already have an account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
