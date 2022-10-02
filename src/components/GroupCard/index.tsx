import React from 'react';
import { Container,Title,Items } from './styles';

import { ButtonIcon } from '../ButtonIcon';


type Props = {
   title: string;
}

export function GroupCard({ title }: Props) {
  return (
    <Container>
      <Title>
         {title}
      </Title>

      <Items>
        <ButtonIcon />
      </Items>
    </Container>
  );
}