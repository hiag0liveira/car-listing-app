import styled from 'styled-components/native';

interface ButtonProps {
  isDisabled?: boolean;
}
export const ButtonStyled = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  background-color: #fff;
  border-radius: 40px;
  height: 58px;
  justify-content: center;
  opacity: ${(props: ButtonProps) => props.isDisabled ? 0.6 : 1};
`;

export const Text = styled.Text`
  color:rgb(0, 0, 0);
  font-size: 18px;
  font-weight: 700;
`;
