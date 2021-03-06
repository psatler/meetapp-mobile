import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';

// Using SafeAreaView instead of View because on Iphone the StatusBar
// is included in the calc to position the rest of the elements
export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 30,
  },
})`
  align-self: stretch; /* it will try to fill all the available space */
`;

export const FormInput = styled(Input)`
  margin-bottom: 5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background: #7159c1;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;
