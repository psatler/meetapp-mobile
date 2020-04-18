import styled from 'styled-components/native';

// Using SafeAreaView instead of View because on Iphone the StatusBar
// is included in the calc to position the rest of the elements
export const Container = styled.SafeAreaView`
  flex: 1;
`;

//@ts-ignore
export const FlatListStyled = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 20, // giving a litle bit of padding to the outer content
  },
})``;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;
