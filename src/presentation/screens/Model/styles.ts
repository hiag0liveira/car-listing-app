import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #1C1C1C;
`;

export const TextContainer = styled.View`
  padding-horizontal: 24px;
`;

export const Title = styled.Text`
  color: #F5F5F5;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Header = styled.View`
  height: 60px;
  background-color: #007ACC;
  padding: 20px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowLeft = styled.Image`
  width: 20px;
  height: 20px;
`;

export const CarBox = styled.View`
  background-color: #007ACC;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 24px;
  padding: 16px;
`;

export const CarName = styled.Text`
  color: #F5F5F5;
  font-size: 16px;
  font-weight: 700;
`;