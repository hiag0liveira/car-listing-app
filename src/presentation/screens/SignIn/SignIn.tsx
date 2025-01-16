import React from 'react';
import { Container, TextContainer, Title } from './styles';
import { StatusBar } from 'react-native';

const SignIn: React.FC = ({ route }: any) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <TextContainer>
        <Title>Signin Page</Title>
      </TextContainer>
    </Container>
  );
};

export { SignIn };
