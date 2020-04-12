import React from 'react';
import { Image } from 'react-native';

import Background from '~/components/Background';
import { Container, FlatListStyled } from './styles';

import Header from '~/components/Header';
import MeetupCard from '~/components/MeetupCard';

const data = [1, 2, 3, 4, 5, 6, 7];

export default function Dashboard() {
  return (
    <Background isLoggedIn>
      <Container>
        <Header headerTitle="All Meetups" />

        <FlatListStyled
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <MeetupCard data={item} />}
        />
      </Container>
    </Background>
  );
}
