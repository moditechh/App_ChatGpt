import { View, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import {
  Button,
  Conteiner,
  Header,
  Player,
  PlayerButtons,
  ResponseBox,
  StopButton,
  Text,
} from '../../styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';

import { UseRecorderContext } from '../../Context/RecorderContext';
import useRecorder from '../../Hooks/UseRecorder/useRecorder';
import Tts from 'react-native-tts';
export default function RecordPlayer() {
  const { params } = useRoute();
  const { errorMessage, setLoading, loading, setErrorMessage } = UseRecorderContext();
  const { setResults } = useRecorder();
  const { dados, question }: any = params;

  const response = String(dados);

  const initTts = async () => {
    if (!Tts.voices) {
      await Tts.getInitStatus();
    }
    await Tts.setDefaultLanguage('pt-br');
    await Tts.setDefaultVoice('com.apple.ttsbundle.Samantha-compact');
    await Tts.setDefaultRate(0.6);
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
      setErrorMessage({
        message: 'Houve um erro ao tentar reproduzir a resposta, tente novamente',
        status: true,
      });
      console.error(error);
    }
  };

  const StopSpeak = () => {
    Tts.stop(speakText);
  };

  return (
    <Conteiner>
      <ScrollView>
        <Header>
          <Text color="#999" weight="400">
            Good Morning
          </Text>
          <Text weight="600">PERGUNTA</Text>
          <Text weight="400">{question}?</Text>
        </Header>
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
      </ScrollView>
    </Conteiner>
  );
}
