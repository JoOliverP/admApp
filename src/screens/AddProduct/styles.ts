import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* flex-direction: column; */
  /* border: 1px solid teal; */
  padding: 24px;
  background-color: ${({ theme}) => theme.COLORS.GRAY_600};
`;

export const HeaderView = styled.View`
  /* flex: 1; */
  /* width: 100%; */
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 1px solid teal; */
`;

export const FormContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  /* border: 1px solid teal; */
`;

export const Fields = styled.View`

`;

export const Text = styled.Text`
  margin: 10px 0 10px 0;
  color: ${({ theme}) => theme.COLORS.GRAY_100};
`;

export const ButtonsContainer = styled.View`
   /* margin-bottom : 32px; */
   flex-direction: row;
`;

export const ErrorText = styled.Text`
   color: ${({ theme}) => theme.COLORS.RED_DARK};
`;