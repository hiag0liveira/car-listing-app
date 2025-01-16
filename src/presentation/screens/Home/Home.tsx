import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Alert, FlatList, StatusBar, Text, TouchableOpacity } from 'react-native';
import { UserContext } from '../../context/userContext';
import { CarsService } from '../../../services/CarsService';
import { GetMarksResponse } from '../../../services/CarsService/ICarsService';
import { Input } from '../../components';
import {
  LogoutIcon,
  CarBox,
  CarName,
  ArrowRight,
  Container,
  Header,
  Subtitle,
  TextContainer,
  Title,
  HighlightedTitle,
} from './styles';

const logoutIcon = require('../../assets/logout.png');
const arrowRight = require('../../assets/right-arrow.png');

const Home: React.FC = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation<any>();

  const [userName, setUserName] = useState<string>('');
  const [cars, setCars] = useState<GetMarksResponse[] | null>(null);
  const [searchText, setSearchText] = useState<string>('');

  const handleExitApp = async () => {
    Alert.alert(
      'Confirmação de Logout',
      'Tem certeza que gostaria de sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            await AsyncStorage.removeItem('userName');
            navigation.reset({
              index: 0,
              routes: [{ name: 'SignIn' }],
            });
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleSelectModel = (model: string, name: string) => {
    navigation.navigate('Model', { model, name });
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const storedUserName = await AsyncStorage.getItem('userName');
      if (storedUserName) {
        setUserName(storedUserName);
      } else if (user) {
        setUserName(user.name);
      }
    };

    getUserInfo();
  }, [user]);

  useEffect(() => {
    const getMarks = async () => {
      const response: any = await new CarsService().getMarks();
      setCars(response);
    };

    getMarks();
  }, []);

  const filteredCars = cars?.filter((car) =>
    car.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }: { item: GetMarksResponse }) => (
    <CarBox onPress={() => handleSelectModel(item.codigo, item.nome)}>
      <CarName>{item.nome}</CarName>
      <ArrowRight source={arrowRight} />
    </CarBox>
  );

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#007ACC" />
      <Header>
        <Title>Bem-vindo, {userName}!</Title>
        <TouchableOpacity onPress={handleExitApp}>
          <LogoutIcon source={logoutIcon} />
        </TouchableOpacity>
      </Header>

      <TextContainer>
        <HighlightedTitle>Descubra seu próximo carro!</HighlightedTitle>
        <Subtitle>{userName}, encontre o carro ideal entre as melhores marcas do mundo!</Subtitle>
        <Input
          onChangeText={handleSearch}
          placeholder="Digite uma marca desejeda"
          secureText={false}
          value={searchText}
        />
      </TextContainer>
      <FlatList data={filteredCars} renderItem={renderItem} keyExtractor={(item) => item.codigo} />
    </Container>
  );
};

export { Home };
