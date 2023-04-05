import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type IConteinerProps = {
  type: 'success' | 'error' | 'alert';
};

export const Conteiner = styled.View<IConteinerProps>`
  position: absolute;
  top: 10px;
  width: 100%;
  max-height: 60px;
  height: 60px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;
  flex-direction: row;
  border-radius: 5px;
  border-left-width: 7px;
  border-color: ${({ type }) =>
    type === 'success' ? '#0c9e1d' : type === 'error' ? '#ce1919' : '#6aa9f2'};
  /* transition: transform 5s ease-in; */
`;

export const Icon = styled(FontAwesome)``;

export const Button = styled.TouchableOpacity``;

export const MessageText = styled.Text`
  flex: 1;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  color: #010101;
  margin-left: 10px;
`;
