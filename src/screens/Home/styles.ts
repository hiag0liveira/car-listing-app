import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color:#1C1C1C;
`;

export const Header = styled.View`
  height: 60px;
  background-color: #007ACC;
  padding: 20px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoutIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Title = styled.Text`
  color: #F5F5F5;
  font-size: 18px;
  font-weight: 700;
`;

export const HighlightedTitle = styled.Text`
  color: #F5F5F5;
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  font-weight: 700;
`;
export const TextContainer = styled.View`
  padding-horizontal: 24px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  color: #F5F5F5;
  font-size: 12px;
  font-weight: 300;
  text-align: center;
`;

export const CarBox = styled.TouchableOpacity`
  background-color:#007ACC;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 24px;
  padding: 16px;
`;

export const CarName = styled.Text`
  color: #F5F5F5;
  font-size: 16px;
  font-weight: 700;
`;

export const ArrowRight = styled.Image`
  width: 20px;
  height: 20px;
`;