import React, { useState, useRef, useEffect } from 'react';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { useSelector, useDispatch } from 'react-redux';
import { Container, Form, FormInput, SubmitButton, Separator } from './styles';
import { ApplicationState } from '~/store/createStore';
import { updateProfileRequest } from '~/store/ducks/user/actions';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector((state: ApplicationState) => state.user.profile);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // const loading = useSelector((state: ApplicationState) => state.auth.loading);

  const [name, setName] = useState(profile?.name);
  const [email, setEmail] = useState(profile?.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // resetting the password fields when the profile object changes as hitting the update profile button
  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  return (
    <Background isLoggedIn>
      <Container>
        <Header headerTitle="Profile" />

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
            onSubmitEditing={() => oldPasswordRef!.current!.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry // to display the dots ****
            placeholder="Your current password"
            // acessibility stuff below
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef!.current!.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry // to display the dots ****
            placeholder="Your new password"
            // acessibility stuff below
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef!.current!.focus()}
            value={password}
            onChangeText={setPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry // to display the dots ****
            placeholder="Confirm your new password"
            // acessibility stuff below
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <SubmitButton onPress={handleSubmit}>Update Profile</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
