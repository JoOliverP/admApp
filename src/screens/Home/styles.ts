 import styled from 'styled-components/native';
 
 export const Container = styled.View`
   flex: 1;
   flex-direction: column;
   padding: 24px;
   background-color: ${({ theme}) => theme.COLORS.GRAY_600};
 `;