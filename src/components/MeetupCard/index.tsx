import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BannerImage,
  Information,
  MeetappTitle,
  IconTextContainer,
  TextContainer,
  SubscribeButton,
} from './styles';

interface MeetupCardProps {
  title: string;
  bannerUrl: string;
  description: string;
  dateFormatted: string;
  organizer: string;
  location: string;
  onSubscribe: () => void;
  subButtonText?: string;
}

const MeetupCard: React.FC<MeetupCardProps> = ({
  title,
  bannerUrl,
  description,
  dateFormatted,
  location,
  organizer,
  onSubscribe,
  subButtonText = 'Subscribe',
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
        {subButtonText !== 'Subscribe' && (
          <IconTextContainer>
            <Icon name="description" size={20} color="rgba(0,0,0, 0.6)" />
            <TextContainer> {description} </TextContainer>
          </IconTextContainer>
        )}
        <IconTextContainer>
          <Icon name="date-range" size={20} color="rgba(0,0,0, 0.6)" />
          <TextContainer> {dateFormatted} </TextContainer>
        </IconTextContainer>
        <IconTextContainer>
          <Icon name="location-on" size={20} color="rgba(0,0,0, 0.6)" />
          <TextContainer> {location} </TextContainer>
        </IconTextContainer>
        <IconTextContainer>
          <Icon name="person" size={20} color="rgba(0,0,0, 0.6)" />
          <TextContainer> Organizer: {organizer} </TextContainer>
        </IconTextContainer>
        {/* <MeetappLocation> {location}</MeetappLocation> */}
        <SubscribeButton onPress={onSubscribe} subButtonText={subButtonText}>
          {subButtonText}
        </SubscribeButton>
      </Information>

      {/* <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity> */}
    </Container>
  );
};

export default MeetupCard;
