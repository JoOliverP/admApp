import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   margin-top: 20px;
   width: 100%;
   
   background-color: ${({ theme}) => theme.COLORS.GRAY_500};
   border-radius: 6px;
   flex-direction: row;

   align-items: center;

   padding: 24px;
   margin-bottom: 12px;
`;

export const Title = styled.Text`
   font-size: ${({ theme}) => theme.FONT_SIZE.MD}px;
   color: ${({ theme}) => theme.COLORS.GRAY_200};
   font-family: ${({ theme}) => theme.FONT_FAMILY.REGULAR};
`
export const Items = styled.View`
   flex: 3;
   flex-direction: row;
   justify-content: flex-end;
`