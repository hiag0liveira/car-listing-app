import styled from 'styled-components/native';

export const Container = styled.Pressable`
  flex: 1;
  background-color:rgb(0, 0, 0);
`;

export const BrandImageStyled = styled.Image`
  width: 100%;
  height: 250px;
  margin-left: 10px;
  margin-top: 10px;
  resize-mode: contain;
`;

export const CarImageStyled = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: -25px;
  resize-mode: contain;

`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center; 
  margin-top: 20px;
`;

export const Subtitle = styled.Text`
  color: #8e8e8e;
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 10;
  text-align: center; 
  padding-left: 12px;
  padding-right: 12px;

`;

export const InputContainer = styled.View`
    padding-left: 24px;
    padding-right: 24px;
`;

export const ButtonContainer = styled.View`
  margin-top: 26px;
  margin-bottom: 26px;
  padding-left: 24px;
  padding-right: 24px;
`;