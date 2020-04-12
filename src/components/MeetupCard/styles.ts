import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 15px;
  /* padding: 20px; */
  border-radius: 4px;
  background: #fff;
`;

export const BannerImage = styled.Image`
  background: #ffc3a0;
  height: 100px;
`;
export const Information = styled.View`
  margin: 10px 20px;
`;
export const MeetappTitle = styled.Text`
  font-size: 22px;
  font-style: italic;
`;
export const MeetappDescription = styled.Text`
  font-size: 16px;
`;
export const MeetappLocation = styled.Text`
  align-self: flex-end;
`;

export const SubscribeButton = styled(Button)`
  /* background: #ffafbd; */
  margin-top: 5px;
`;
