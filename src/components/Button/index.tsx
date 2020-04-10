import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

interface ButtonProps {
  loading?: boolean;
  [key: string]: any; // rest definition
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};

export default Button;
