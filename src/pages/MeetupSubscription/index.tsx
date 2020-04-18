import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import Header from '~/components/Header';
import Background from '~/components/Background';
import MeetupCard from '~/components/MeetupCard';

import { DataResponse } from '~/store/ducks/meetup/types';

import { Container, FlatListStyled } from './styles';

interface SubscriptionProps {
  meetup: DataResponse;
}

export default function MeetupSubscription() {
  const [subscriptionList, setSubscriptionList] = useState<SubscriptionProps[]>(
    []
  );

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadSubscriptions = async () => {
        try {
          const response = await api.get('subscriptions');
          const list = response.data as SubscriptionProps[];
          const formattedMeetups = list.map((item) => {
            const dateFormatted = format(
              parseISO(item.meetup.date),
              "MMMM dd 'at' HH:mm"
            );
            return {
              ...item,
              dateFormatted,
            };
          });

          if (isActive) {
            setSubscriptionList(formattedMeetups);
          }
        } catch (err) {
          // Handle error
          Alert.alert(err.toString(), err.response.data.error);
        }
      };

      loadSubscriptions();

      return () => {
        isActive = false;
      };
    }, [])
  );

  function handleSeeMoreInfo(meetup) {
    console.tron.log(meetup);
  }

  return (
    <Background isLoggedIn>
      <Container>
        <Header headerTitle="My subscriptions" />

        <FlatListStyled
          data={subscriptionList}
          keyExtractor={(item: DataResponse) => String(item.id)}
          renderItem={({ item }) => (
            <MeetupCard
              key={item.meetup.id}
              title={item.meetup.title}
              description={item.meetup.description}
              bannerUrl={item.meetup?.banner?.url}
              location={item.meetup.location}
              onSubscribe={() => handleSeeMoreInfo(item.meetup)}
              subButtonText="See more"
            />
          )}
        />
      </Container>
    </Background>
  );
}
