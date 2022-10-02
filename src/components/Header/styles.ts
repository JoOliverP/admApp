import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme}) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
  margin-top: 30px;
  color: ${({ theme}) => theme.COLORS.WHITE};
  font-size: ${({ theme}) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme}) => theme.FONT_FAMILY.BOLD};
`