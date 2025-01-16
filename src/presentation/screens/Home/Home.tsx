import React from 'react';
import { Container, TextContainer, Title } from './styles';
import { StatusBar } from 'react-native';

const Home: React.FC = ({ route }: any) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <TextContainer>
        <Title>Home Page</Title>
      </TextContainer>
    </Container>
  );
};

export { Home };
