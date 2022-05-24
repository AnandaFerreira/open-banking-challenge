import React from 'react';
import { TBaseComponentProps } from '../../@types/ComponentProps/TBaseComponentProps';
import { Container, Loader } from './styles';

export const Spinner: React.FC<TBaseComponentProps> = ({ id, ...rest }) => {
  return (
    <Container {...rest} id={id}>
      <Loader />
    </Container>
  );
};

export default Spinner;
