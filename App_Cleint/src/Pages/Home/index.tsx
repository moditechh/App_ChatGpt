import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Button, Conteiner, Info, Recorder, Input, Text, Header } from '../../styles';
import SoundWave from '../../Components/SoundWave';
import Loading from '../../Components/Loading';

import useRecorder from '../../Hooks/UseRecorder/useRecorder';
import { useRecorderContext } from '../../Context/RecorderContext';
import Message from '../../Components/Message';

import { KeyboardAvoidingView } from 'react-native';

import Api from '../../services/api';

const Home = () => {
  const {
    startRecognizing,
    stopRecognizing,
    recording,
    results,
    setResults,
    volume,
    partialResults,
  } = useRecorder();

  const { loading, errorMessage } = useRecorderContext();

  const date = new Date();

  const { sendQuestion } = Api();

  useEffect(() => {
    if (loading) {
      sendQuestion(results);
      setResults('........................');
    }
  }, [loading]);

  return (
    <Conteiner>
      {errorMessage?.status && <Message label={errorMessage.message} />}
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>
            <Text color="#999" weight="400" size={22}>
              {date.getHours() > 18 ? 'Good Nigth' : 'Good Morning'}
            </Text>
          </Header>
          <Recorder>
            {!recording ? (
              <Button onPress={startRecognizing} bg>
                <Icon name="microphone" color="#ffffff" size={65} />
                <SoundWave volume={volume} />
              </Button>
            ) : (
              <Button onPress={stopRecognizing}>
                <Icon name="stop" color="#ffffff" size={50} />
                <SoundWave volume={volume} />
              </Button>
            )}
          </Recorder>
          <KeyboardAvoidingView
            behavior="height"
            style={{
              flex: 1,
              width: 400,
            }}
          >
            <Info>
              <Text color="#999" weight="400">
                Toque para falar
              </Text>
              <Input
                multiline
                numberOfLines={4}
                value={results ? results : partialResults}
                onChangeText={(text) => setResults(text)}
                maxLength={500}
                editable={results !== '.............................'}
              />
            </Info>
          </KeyboardAvoidingView>
        </>
      )}
    </Conteiner>
  );
};

export default Home;
