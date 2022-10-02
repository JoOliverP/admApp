import React, { Children, ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  children: ReactNode;
}

export function Background({children}: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}