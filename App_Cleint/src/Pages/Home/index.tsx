import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Button, Conteiner, Info, Recorder, Input, Text, Header, ButtonIr } from '../../styles';
import SoundWave from '../../Components/SoundWave';
import Loading from '../../Components/Loading';

import useRecorder from '../../Hooks/UseRecorder/useRecorder';
import Message from '../../Components/Message';
import Api from '../../api/api';

import { UseRecorderContext } from '../../Context/RecorderContext';

const Home = () => {
  const { startRecognizing, stopRecognizing, error, recording, results, setResults, volume, end } =
    useRecorder();

  const { sendQuestion } = Api();
  const { errorMessage, loading } = UseRecorderContext();

  useEffect(() => {
    if (results === '') {
      setResults('.............................');
    }
  }, [results]);

  const date = new Date();

  useEffect(() => {
    if (loading) {
      sendQuestion(results);
    }
  }, [loading]);

  return (
    <Conteiner>
      {errorMessage.status && <Message label={errorMessage.message} />}
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
                value={results}
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
