import styled from 'styled-components/native';

export const Conteiner = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #010101;
  padding: 30px 20px;
`;
export const Recorder = styled.View`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
`;
export const Player = styled.View`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Info = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

type IButtonProps = {
  bg?: boolean;
};

export const Button = styled.TouchableOpacity<IButtonProps>`
  width: 106px;
  height: 106px;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  border-radius: 106px;
  background-color: ${({ bg }) => (bg ? '#26c1fa' : '#00aa00')};
`;
export const ButtonIr = styled.TouchableOpacity<IButtonProps>`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  border-radius: 20px;
  background-color: ${({ bg }) => (bg ? '#26c1fa' : '#00aa00')};
`;
export const ButtonSpik = styled.TouchableOpacity<IButtonProps>`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  border-radius: 60px;
  background-color: #999;
`;

type ITextProps = {
  size?: number;
  color?: string;
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700';
};

export const Text = styled.Text<ITextProps>`
  font-size: ${({ size }) => (size ? size : 18)}px;
  font-weight: ${({ weight }) => (weight ? weight : '300')};
  color: ${({ color }) => (color ? color : '#FFF')};
`;

export const Input = styled.TextInput`
  font-size: 24px;
  color: #fff;
  text-align: center;
  /* background-color: #fff000; */
  width: 100%;
  margin-top: 20px;
`;
