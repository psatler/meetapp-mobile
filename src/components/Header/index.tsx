import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

// @ts-ignore
import logo from '~/assets/logo.png';

interface HeaderProps {
  headerTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <Container>
      <Image source={logo} />
      {headerTitle && <Title> {headerTitle} </Title>}
    </Container>
  );
};

export default Header;
