import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import { loadMeetups } from '~/store/ducks/meetup/actions';
import { ApplicationState } from '~/store/createStore';
import { DataResponse } from '~/store/ducks/meetup/types';

import Background from '~/components/Background';
import { Container, FlatListStyled } from './styles';

import Header from '~/components/Header';
import MeetupCard from '~/components/MeetupCard';

interface HandleSubscribeProps {
  meetupId: number;
  meetupTitle: string;
}

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetappList = useSelector(
    (state: ApplicationState) => state.meetups.meetupsList
  );

  useEffect(() => {
    async function fetchAllMeetups() {
      // on the web, this request is to the /organizer endpoint, for example
      const response = await api.get('meetups');

      const meetups: DataResponse[] = response.data;

      const formattedMeetups = meetups.map((item) => {
        const dateFormatted = format(parseISO(item.date), "MMMM dd 'at' HH:mm");
        return {
          ...item,
          dateFormatted,
        };
      });

      dispatch(loadMeetups(formattedMeetups));
    }

    fetchAllMeetups();
  }, [dispatch]);

  async function handleSubscribe({
    meetupId,
    meetupTitle,
  }: HandleSubscribeProps) {
    try {
      if (typeof meetupId === 'number') {
        await api.post(`/meetup/${meetupId}/subscription`);

        Alert.alert('Nice!', `You have been subscribed to ${meetupTitle}`);
      }
    } catch (err) {
      Alert.alert('Ouch!', err.response.data.error);
    }
  }

  return (
    <Background isLoggedIn>
      <Container>
        <Header headerTitle="All Meetups" />

        <FlatListStyled
          data={meetappList}
          keyExtractor={(item: DataResponse) => String(item.id)}
          //@ts-ignore
          renderItem={({ item }) => (
            <MeetupCard
              key={item.id}
              title={item.title}
              description={item.description}
              bannerUrl={item.banner?.url}
              location={item.location}
              organizer={item.organizer.name}
              dateFormatted={item.dateFormatted}
              onSubscribe={() =>
                handleSubscribe({ meetupId: item.id, meetupTitle: item.title })
              }
            />
          )}
        />
      </Container>
    </Background>
  );
}
