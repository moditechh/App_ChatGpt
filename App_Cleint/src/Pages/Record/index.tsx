import { View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import {
  Button,
  ButtonSpik,
  Conteiner,
  Header,
  HeaderRecorder,
  Player,
  PlayerButtons,
  ResponseBox,
  StopButton,
  Text,
} from '../../styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

import Tts from 'react-native-tts';

export default function RecordPlayer() {
  const { params } = useRoute();

  const navigation = useNavigation();

  const { dados, question }: any = params;
  console.warn(dados);

  const response = String(dados);

  const initTts = async () => {
    if (!Tts.voices) {
      await Tts.getInitStatus();
    }
    await Tts.setDefaultLanguage('pt-br');
    await Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
    await Tts.setDefaultRate(0.5);
    await Tts.setDefaultPitch(1.0);
  };

  useEffect(() => {
    initTts();
    return () => {
      StopSpeak();
    };
  }, []);

  const speakText = async (value: string) => {
    try {
      await Tts.speak(value);
    } catch (error) {
      console.error(error);
    }
  };

  const StopSpeak = () => {
    Tts.stop(speakText);
  };

  const test = () => {
    navigation.navigate('Home');
  };

  return (
    <Conteiner>
      <ScrollView>
        <HeaderRecorder>
          <Text color="#999" weight="400">
            Good Morning
          </Text>
          <Text weight="600">PERGUNTA</Text>
          <Text weight="400">{question}?</Text>
        </HeaderRecorder>
        <Player>
          <PlayerButtons>
            <Button bg onPress={() => speakText(response)}>
              <Icon name="play" color="#ffffff" size={60} />
            </Button>
            <StopButton bg onPress={StopSpeak}>
              <Icon name="stop" color="#ffffff" size={30} />
            </StopButton>
          </PlayerButtons>
          <ResponseBox>
            <Text size={22} weight="400">
              Resposta
            </Text>
            <Text>Resposta:{response}</Text>
          </ResponseBox>
        </Player>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            borderColor: '#fff',
            // backgroundColor: 'rgba(16, 24, 247, 0.347)',
            borderWidth: 2,
            width: '90%',
            height: 60,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}
          onPress={test}
        >
          <Text size={22} weight="500">
            Fazer Outra Pergunta
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Conteiner>
  );
}
