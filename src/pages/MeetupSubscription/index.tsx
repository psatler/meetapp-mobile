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
  dateFormatted: string;
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

  async function cancelSub({
    meetupId,
    meetupTitle,
  }: {
    meetupId: number;
    meetupTitle: string;
  }) {
    try {
      if (typeof meetupId === 'number') {
        await api.delete(`/meetup/${meetupId}/subscription`);

        setSubscriptionList((subList) =>
          subList.filter((item) => item.meetup.id !== meetupId)
        );
        Alert.alert(
          'Unsubscription done!',
          `You are not subscribed to ${meetupTitle} anymore`
        );
      }
    } catch (err) {
      const errorResponse = err.response.data.error;
      Alert.alert('Unsubscription was not possible!', errorResponse);
    }
  }

  function handleCancelSubscription({ meetup }: SubscriptionProps) {
    Alert.alert(
      `Canceling subscription from  ${meetup.title}.`,
      'Are you sure you want to cancel the subscription from this meetup?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            cancelSub({ meetupId: meetup.id, meetupTitle: meetup.title }),
        },
      ],
      {
        // cancelable: false,
      }
    );
  }

  return (
    <Background isLoggedIn>
      <Container>
        <Header headerTitle="My subscriptions" />

        <FlatListStyled
          data={subscriptionList}
          keyExtractor={(item: DataResponse) => String(item.id)}
          //@ts-ignore
          renderItem={({ item }) => (
            <MeetupCard
              key={item.meetup.id}
              title={item.meetup.title}
              description={item.meetup.description}
              bannerUrl={item.meetup?.banner?.url}
              location={item.meetup.location}
              organizer={item.meetup.organizer.name}
              dateFormatted={item.dateFormatted}
              onSubscribe={() =>
                handleCancelSubscription({
                  meetup: item.meetup,
                  dateFormatted: item.dateFormatted,
                })
              }
              subButtonText="Cancel Subscription"
            />
          )}
        />
      </Container>
    </Background>
  );
}
