import React from 'react';
// import { TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BannerImage,
  Information,
  MeetappTitle,
  MeetappDescription,
  MeetappLocation,
  SubscribeButton,
} from './styles';

export default function MeetupCard() {
  return (
    <Container>
      <BannerImage
        source={{
          uri:
            'https://s3.amazonaws.com/ckl-website-static/wp-content/uploads/2019/09/React_Native_Animation.png',
        }}
      />
      <Information>
        <MeetappTitle>React Native</MeetappTitle>
        <MeetappDescription>
          Talking about React Native new version, 0.62, along with severalother
          things about this released
        </MeetappDescription>
        <MeetappLocation>Vitória, ES, Brazil</MeetappLocation>
        <SubscribeButton>Subscribe</SubscribeButton>
      </Information>

      {/* <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity> */}
    </Container>
  );
}
