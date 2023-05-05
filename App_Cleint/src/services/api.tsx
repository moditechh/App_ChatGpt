import React from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import { useRecorderContext } from '../Context/RecorderContext';

export default function Api() {
  const navigation = useNavigation();

  const { setErrorMessage, setLoading } = useRecorderContext();

  const sendQuestion = async (message: string) => {
    console.log(message, 'Pergunta');

    try {
      const { data } = await axios.post(
        'http://10.0.0.104:8000/api/transcribe',
        { text: message },
        {
          headers: {
            'Accept-Encoding': 'identity',
          },
        }
      );

      console.log(data, 'RESPOSTA');
      setLoading(false);
      navigation.navigate('RecordPlayer', {
        dados: data,
        question: message,
      });
    } catch (error) {
      setErrorMessage({
        message: 'erro ao acessar a Api do chatGPT, tente novamente...',
        status: true,
      });
      navigation.navigate('Home');
      setLoading(false);
      console.log(error);
    }
  };

  return { sendQuestion };
}
