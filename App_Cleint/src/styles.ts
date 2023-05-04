import styled from 'styled-components/native';

export const Conteiner = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
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
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PlayerButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ResponseBox = styled.View`
  align-items: flex-start;
  height: 100%;
  flex: 1;
  margin: 20px 0px;
`;
export const Header = styled.View`
  width: 100%;
  justify-content: flex-end;
  height: 20%;
  margin: 20px 0;
  align-items: center;
`;

export const HeaderRecorder = styled.View`
  width: 100%;
  justify-content: flex-start;
  height: 200px;
  margin: 20px 0;
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
export const ButtonA = styled.TouchableOpacity<IButtonProps>`
  width: 56px;
  height: 56px;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  margin: 0px 10px;
  border-radius: 56px;
  background-color: ${({ bg }) => (bg ? '#26c1fa' : '#00aa00')};
`;
export const StopButton = styled.TouchableOpacity<IButtonProps>`
  width: 66px;
  height: 66px;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  border-radius: 66px;
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
  /* padding-top: 20px; */
  font-size: ${({ size }) => (size ? size : 20)}px;
  font-weight: ${({ weight }) => (weight ? weight : '300')};
  color: ${({ color }) => (color ? color : '#FFF')};
`;
export const TextLoad = styled.Text<ITextProps>`
  padding-top: 20px;
  text-align: center;
  font-size: ${({ size }) => (size ? size : 20)}px;
  font-weight: ${({ weight }) => (weight ? weight : '300')};
  color: ${({ color }) => (color ? color : '#FFF')};
`;

export const Input = styled.TextInput`
  font-size: 24px;
  color: #fff;
  text-align: center;
  width: 100%;
  margin-top: 20px;
`;
