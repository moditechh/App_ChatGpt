import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Button, Conteiner, Info, Recorder, Input, Text, Header } from '../../styles';
import SoundWave from '../../Components/SoundWave';
import Loading from '../../Components/Loading';

import useRecorder from '../../Hooks/UseRecorder/useRecorder';
import Message from '../../Components/Message';

import { useRecorderContext } from '../../Context/RecorderContext';

import Api from '../../services/api';

const Home = () => {
  const { startRecognizing, stopRecognizing, recording, results, setResults, volume } =
    useRecorder();

  const { loading, errorMessage } = useRecorderContext();

  const { sendQuestion } = Api();

  const date = new Date();

  useEffect(() => {
    if (loading) {
      sendQuestion(results);
      setResults('.........................');
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
        </>
      )}
    </Conteiner>
  );
};

export default Home;
