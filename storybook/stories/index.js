import React from 'react';

import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Background from '~/components/Background';
import Button from '~/components/Button';
import Header from '~/components/Header';
import Input from '~/components/Input';
import MeetupCard from '~/components/MeetupCard';
// import CenterView from './CenterView';

storiesOf('Background', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Not Logged In (Public Screens)', () => <Background />)
  .add('Logged In (Private Screens)', () => <Background isLoggedIn />);

storiesOf('Button', module)
  .add('Default', () => <Button> Click me </Button>)
  .add('Button Loading', () => <Button loading> Click me </Button>);

storiesOf('Header', module)
  .add('Default', () => <Header headerTitle="Header Text Default " />)
  .add('Header without Text', () => <Header />);

storiesOf('Input', module)
  .add('Input with icon (person)', () => <Input icon="person" />)
  .add('Input without icon', () => <Input />);

storiesOf('MeetupCard', module)
  .add('with Subscribe option', () => (
    <MeetupCard
      icon="person"
      title={'Title of the meetup'}
      bannerUrl={'https://via.placeholder.com/500x300.png/09f/fff'}
      description={'Meetup description Meetup description Meetup description '}
      dateFormatted={''}
      location={'Vitória, ES, Brasil'}
      organizer={'Pablo Satler'}
      onSubscribe={() => {}}
      subButtonText={'Subscribe'}
    />
  ))
  .add('with Cancel Subscription option', () => (
    <MeetupCard
      icon="person"
      title={'Title of the meetup'}
      bannerUrl={'https://via.placeholder.com/500x300.png/09f/fff'}
      description={'Meetup description Meetup description Meetup description '}
      dateFormatted={''}
      location={'Vitória, ES, Brasil'}
      organizer={'Pablo Satler'}
      onSubscribe={() => {}}
      subButtonText={'Cancel Subscription'}
    />
  ));
