import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

interface BackgroundProps {
  isLoggedIn?: boolean;
}

// https://styled-components.com/docs/basics#attaching-additional-props

const Background = styled(LinearGradient).attrs((props: BackgroundProps) => ({
  colors: props.isLoggedIn ? ['#2a2332', '#402944'] : ['#ffafbd', '#ffc3a0'],
}))<BackgroundProps>`
  flex: 1;
`;

export default Background;

// logged: #2a2332, #402944)
// not logged: #ffafbd, #ffc3a0)
