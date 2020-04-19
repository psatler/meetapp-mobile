import styled, { css } from 'styled-components/native';
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
  text-align: justify;
`;

export const IconTextContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const TextContainer = styled.Text`
  font-size: 16px;
  text-align: justify;
  margin: 0 10px;
  margin-left: 15px;
`;

interface SubscribeButtonProps {
  subButtonText: string;
}

export const SubscribeButton = styled(Button)<SubscribeButtonProps>`
  /* background: #ffafbd; */

  ${(props) =>
    props.subButtonText !== 'Subscribe' &&
    css`
      background: #7159c1;
    `}

  margin-top: 5px;
`;
