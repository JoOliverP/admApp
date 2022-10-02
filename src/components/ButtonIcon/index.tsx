import { Container,Icon,ButtonTypeStyleProps } from './styles';
import { Feather } from '@expo/vector-icons';

import { TouchableOpacityProps, } from 'react-native';

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
  type ?: ButtonTypeStyleProps
}

export function ButtonIcon({icon, type = "PRIMARY" , ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon 
        name={icon} 
        type={type}
      />
    </Container>
  );
}