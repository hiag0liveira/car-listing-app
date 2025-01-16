import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color:#1C1C1C;
`;

export const Header = styled.View`
  height: 80px;
  background-color: #F5F5F5;
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
  color: #1C1C1C;
  font-size: 18px;
  font-weight: 700;
`;

export const HighlightedTitle = styled.Text`
  color: #F5F5F5;
  text-align: center;
  font-size: 24px;
  margin-top: 17px;
  font-weight: 700;
`;
export const TextContainer = styled.View`
  padding-horizontal: 24px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  color: #F5F5F5;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;
  text-align: center;
`;

export const CarBox = styled.TouchableOpacity`
  background-color:#F5F5F5;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 24px;
  padding: 16px;
`;

export const CarName = styled.Text`
  color: #2c2b34;
  font-size: 16px;
  font-weight: 700;
`;

export const ArrowRight = styled.Image`
  width: 20px;
  height: 20px;
`;