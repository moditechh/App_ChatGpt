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

  // const sendQuestion = async (text: string) => {
  //   const apiKey = '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';
  //   // const API_ENDPOINT = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
  //   const API_ENDPOINT = 'https://api.openai.com/v1/completions';

  //   const headers = {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${apiKey}`,
  //   };

  //   const data = {
  //     model: 'text-davinci-003',
  //     prompt: text + '?',
  //     temperature: 0,
  //     max_tokens: 3000,
  //     top_p: 1,
  //     frequency_penalty: 0,
  //     presence_penalty: 0,
  //     stop: '\n',
  //   };

  //   try {
  //     const response = await axios.post(API_ENDPOINT, data, { headers: headers });
  //     console.log(response.data.choices[0].text, 'RESPOSTA FOHAO');
  //     setLoading(false);
  //     navigation.navigate('RecordPlayer', {
  //       dados: response.data.choices[0].text,
  //       question: text,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     setErrorMessage({
  //       message: 'erro ao acessar a Api do chatGPT, tente novamente...',
  //       status: true,
  //     });
  //     navigation.navigate('Home');
  //     setLoading(false);
  //   }
  // };

  return { sendQuestion };
}
