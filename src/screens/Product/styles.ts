import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  /* align-items: center; */
  padding: 24px;
  background-color: ${({ theme}) => theme.COLORS.GRAY_600};
`;

export const HeaderView = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid teal; */
`;

export const ContentInfo = styled.View`
  margin-left: 20px;
`;

export const ImageProduct = styled.Image`
   margin-top: 10px;
   border-radius: 8px;
   width: 100px;
   height: 100px;

`
export const Title = styled.Text` 
  width: 200px;
  flex-wrap: wrap;
  color: ${({ theme}) => theme.COLORS.GREEN_500};
  font-family: ${({ theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme}) => theme.FONT_SIZE.XL}px;
`;

export const TextProduct = styled.Text`
  color: ${({ theme}) => theme.COLORS.GRAY_200};
  font-family: ${({ theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme}) => theme.FONT_SIZE.MD}px; 
`;

export const Description = styled.Text`
  flex: 1;
  margin-left: 10px;
  color: ${({ theme}) => theme.COLORS.GRAY_100};
  font-family: ${({ theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme}) => theme.FONT_SIZE.MD}px;
`;

export const Quantity = styled.Text`
  /* margin-top: 10px; */
  color: ${({ theme}) => theme.COLORS.GRAY_100};
  font-size: ${({ theme}) => theme.FONT_SIZE.MD}px;
`;
export const ButtonsContainer = styled.View`
   flex-direction: row;
`;