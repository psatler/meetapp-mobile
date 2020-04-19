import React, { useState, useEffect, useCallback } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

// import { loadMeetups } from '~/store/ducks/meetup/actions';
// import { ApplicationState } from '~/store/createStore';
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
  // const dispatch = useDispatch();

  const [meetappList, setMeetappList] = useState<DataResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [totalAlreadyLoaded, setTotalAlreadyLoaded] = useState(0);
  const [totalOnBackend, setTotalOnBackend] = useState(0);
  // const meetappList = useSelector(
  //   (state: ApplicationState) => state.meetups.meetupsList
  // );

  const fetchMeetups = useCallback(
    async (page = 1) => {
      // on the web, this request is to the /organizer endpoint, for example
      try {
        const response = await api.get('meetups', {
          params: {
            page,
          },
        });

        setTotalOnBackend(response.headers['x-total-count']);

        const meetups: DataResponse[] = response.data;

        const formattedMeetups = meetups.map((item) => {
          const dateFormatted = format(
            parseISO(item.date),
            "MMMM dd 'at' HH:mm"
          );
          return {
            ...item,
            dateFormatted,
          };
        });

        setRefreshing(false);
        setLoadingMore(false);
        setCurrentPage(page);
        setMeetappList(
          page > 1 ? [...meetappList, ...formattedMeetups] : formattedMeetups
        );

        setTotalAlreadyLoaded(
          page > 1
            ? [...meetappList, ...formattedMeetups].length
            : formattedMeetups.length
        );

        // dispatch(loadMeetups(formattedMeetups));
      } catch (error) {
        Alert.alert(
          'Ouch! The meetups could not be loaded!',
          'Something went wrong!. Try again later!'
        );
      }
    },
    [meetappList]
  );

  function loadMore() {
    if (totalAlreadyLoaded < totalOnBackend) {
      // if there is more itens to fetch on backend
      setLoadingMore(true);
      const nextPage = currentPage + 1;
      fetchMeetups(nextPage);
    }
  }

  function pullToRefresh() {
    setRefreshing(true);
    setMeetappList([]); // clearing it out so the list blinks on screen giving a sensation of update
    fetchMeetups(1);
  }

  useEffect(() => {
    fetchMeetups();
  }, []);

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
          onRefresh={pullToRefresh}
          refreshing={refreshing}
          onEndReachedThreshold={0.35} // trigger the method in the onEndReached prop when it gets at 35% of the end of list
          onEndReached={loadMore}
          ListFooterComponent={() => (
            <ListBottomActivityIndicator loadingMore={loadingMore} />
          )}
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

function ListBottomActivityIndicator({
  loadingMore,
}: {
  loadingMore: boolean;
}) {
  if (loadingMore) {
    return <ActivityIndicator size="small" color="#FFF" />;
  }

  return null;
}
