import React, { useEffect, useState } from 'react';
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

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetappList = useSelector(
    (state: ApplicationState) => state.meetups.meetupsList
  );

  const [flag, setflag] = useState('');
  // console.tron.log(isFocused);

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
      setflag('changed');
    }

    fetchAllMeetups();
  }, [dispatch]);

  return (
    <Background isLoggedIn>
      <Container>
        <Header headerTitle="All Meetups" />

        <FlatListStyled
          data={meetappList}
          extraData={flag}
          keyExtractor={(item: DataResponse) => String(item.id)}
          renderItem={({ item }) => (
            <MeetupCard
              key={item.id}
              title={item.title}
              description={item.description}
              bannerUrl={item.banner}
              location={item.location}
            />
          )}
        />
      </Container>
    </Background>
  );
}
