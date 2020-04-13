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

interface MeetupCardProps {
  title: string;
  bannerUrl: string;
  description: string;
  location: string;
}

const MeetupCard: React.FC<MeetupCardProps> = ({
  title,
  bannerUrl,
  description,
  location,
}) => {
  return (
    <Container>
      <BannerImage
        source={{
          uri: bannerUrl
            ? `${bannerUrl}`
            : 'https://via.placeholder.com/500x300.png/09f/fff',
        }}
      />
      <Information>
        <MeetappTitle>{title}</MeetappTitle>
        <MeetappDescription>{description}</MeetappDescription>
        <MeetappLocation> {location}</MeetappLocation>
        <SubscribeButton>Subscribe</SubscribeButton>
      </Information>

      {/* <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity> */}
    </Container>
  );
};

export default MeetupCard;
