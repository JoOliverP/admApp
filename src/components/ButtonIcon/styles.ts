import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
   type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  
  flex-direction: row;
  margin: 0 3px 0 3px;

  background-color: ${({ theme}) => theme.COLORS.GRAY_100};
`;

export const Icon = styled(Ionicons).attrs<Props>(({theme, type}) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;

