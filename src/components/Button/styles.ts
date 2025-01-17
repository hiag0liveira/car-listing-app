import styled from 'styled-components/native';

interface ButtonProps {
  isDisabled?: boolean;
}
export const ButtonStyled = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  background-color: #007ACC;
  border-radius: 40px;
  height: 58px;
  justify-content: center;
  opacity: ${(props: ButtonProps) => props.isDisabled ? 0.6 : 1};
`;

export const Text = styled.Text`
  color:#F5F5F5;
  font-size: 18px;
  font-weight: 700;
`;
