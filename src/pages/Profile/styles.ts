import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.View``;

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
`;
export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;
