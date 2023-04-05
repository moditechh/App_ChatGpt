import React, { useEffect, useState } from 'react';
// import {} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Button, Conteiner, Info, Recorder, Input, Text, Header, ButtonIr } from '../../styles';
import SoundWave from '../../Components/SoundWave';
import Loading from '../../Components/Loading';

import useRecorder from '../../Hooks/UseRecorder/useRecorder';
import { useNavigation } from '@react-navigation/native';
import Message from '../../Components/Message';

const Home = () => {
  const {
    startRecognizing,
    stopRecognizing,
    error,
    loading,
    recording,
    results,
    setResults,
    volume,
  } = useRecorder();

  // const [show, setShow] = useState(false);

  useEffect(() => {
    if (results === '') {
      setResults('.............................');
    }
  }, [results]);

  // const navigation = useNavigation();

  const date = new Date();

  return (
    <Conteiner>
      {/* /** criar context api com um type e message para trazer 
      dinamicamente e usar no componente toast */}
      {error && <Message type="error" message="Essa é uma mensagem de error!" />}
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
          {/* <ButtonIr onPress={() => navigation.navigate('RecordPlayer')}>
            <Icon name="close" color="#ffffff" size={10} />
          </ButtonIr> */}
        </>
      )}
    </Conteiner>
  );
};

export default Home;
