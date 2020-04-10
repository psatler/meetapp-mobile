import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, InputStyled } from './styles';

interface InputProps {
  icon?: string;
  style: any; // StyleProp<ViewStyle>;
  [key: string]: any;
}

// const Input: React.FC<InputProps> = () => {}
const Input: React.FC<InputProps> = ({ style, icon, ...rest }, ref) => {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255, 0.6)" />}
      <InputStyled {...rest} ref={ref} />
    </Container>
  );
};

// @ts-ignore
export default forwardRef(Input);
