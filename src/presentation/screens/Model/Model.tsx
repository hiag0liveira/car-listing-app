import React from 'react';
import { Container, TextContainer, Title } from './styles';
import { StatusBar } from 'react-native';

const Model: React.FC = ({ route }: any) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <TextContainer>
        <Title>Model Page</Title>
      </TextContainer>
    </Container>
  );
};

export { Model };
