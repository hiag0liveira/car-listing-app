import React, { useContext } from 'react';
import { Alert, Keyboard, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, Controller } from 'react-hook-form';
import { SignInFormData } from '../../types/signIn';
import { SignInService } from '../../services/SignInService';
import { UserContext } from '../../context/userContext';
import { Button, Input } from '../../components';
import {
  BrandImageStyled,
  ButtonContainer,
  CarImageStyled,
  Container,
  InputContainer,
  Subtitle,
  Title,
} from './styles';

const CarsImg = require('../../assets/carSignIn.png');
const Brands = require('../../assets/brands.png');

const SignIn: React.FC = () => {
  const { control, handleSubmit, formState } = useForm<SignInFormData>();
  const navigation = useNavigation();
  const { updateUser } = useContext(UserContext);

  const onSubmit = async (data: SignInFormData) => {
    const { username, password } = data;

    const response: any = await new SignInService().signIn(username, password);
    if (response.error) {
      return Alert.alert('Erro', 'Credenciais inválidas.');
    }

    await AsyncStorage.setItem('userName', response.user.name);
    updateUser(response.user);

    return navigation.navigate('Home' as never);
  };

  return (
    <Container onPress={() => Keyboard.dismiss()}>
      <StatusBar barStyle="light-content" />
      <Title>Bem-vindo ao CarExplorer</Title>
      <Subtitle>"Descubra as melhores marcas e modelos!"</Subtitle>
      <InputContainer>
        <Controller
          control={control}
          name="username"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Insira seu nome de usuário"
              value={value}
              onChangeText={onChange}
              secureText={false}
            />
          )}
          rules={{ required: true }}
        />
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Insira sua senha"
              value={value}
              onChangeText={onChange}
              secureText
            />
          )}
          rules={{ required: true }}
        />
      </InputContainer>
      <ButtonContainer>
        <Button label="Entrar" onClick={handleSubmit(onSubmit)} disabled={!formState.isValid} />
      </ButtonContainer>
      <BrandImageStyled source={Brands} />
      <CarImageStyled source={CarsImg} />
    </Container>
  );
};

export { SignIn };
