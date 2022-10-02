import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
   type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 4px 0 4px; 

  background-color: ${({ theme}) => theme.COLORS.GRAY_400};
`;

export const Icon = styled(Feather).attrs<Props>(({theme, type}) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;

